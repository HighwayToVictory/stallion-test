<template>
  <div class="p-5">
    <div class="h3 pb-2 mb-3">
      Metrics
    </div>
    <div class="bg-light rounded p-3 mb-3">
      <div style="text-align: justify;">
        In metrics page you can view cluster metrics to get some information about
        the projects, namespaces, users and their activities. In here you can check
        system health and other components activities like mysql database, core api, ftp server.
        This page <span style="color: darkred;">does not</span> provide actions to change cluster settings.
      </div>
    </div>
    <div v-if="metrics">
      <div class="row p-0 m-0 mb-3" style="grid-column-gap: 20px; grid-row-gap: 20px; ">
        <div class="col-12 bg-light rounded p-1">
          <div>
            token expire: {{ this.metrics.jwt??'none' }} minutes
          </div>
        </div>
        <div class="col-12 bg-light rounded p-1">
          <div>
            core address: <b>{{ this.metrics.core??'none' }}</b>
          </div>
        </div>
        <div class="col-12 bg-light rounded p-1">
          <div>
            ftp address: <b>{{ this.metrics.ftp??'none' }}</b>
          </div>
        </div>
        <div class="col-12 bg-light rounded p-1">
          <div>
            database address: <b>{{ this.metrics.mysql??'none' }}</b>
          </div>
        </div>
      </div>
    </div>
    <canvas class="my-3" id="entities"></canvas>
    <canvas class="my-3" id="requests"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import { metricsApi } from '@/api';

export default {
  data() {
    this.entitiesChart = null
    this.requestsChart = null
    return {
      count: 0,
      limit: 20,
      metrics: undefined,
    }
  },
  methods: {
    addDataToRequests(failed, success, download, execute) {
      const date = new Date();
      this.requestsChart.data.labels.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      this.requestsChart.data.datasets[0].data.push(failed);
      this.requestsChart.data.datasets[1].data.push(success);
      this.requestsChart.data.datasets[2].data.push(download);
      this.requestsChart.data.datasets[3].data.push(execute);

      this.requestsChart.update();

      if (this.count == this.limit) {
        this.requestsChart.data.labels.shift();
        this.requestsChart.data.datasets[0].data.shift();
        this.requestsChart.data.datasets[1].data.shift();
        this.requestsChart.data.datasets[2].data.shift();
        this.requestsChart.data.datasets[3].data.shift();
        this.requestsChart.update();
      } else {
        this.count++;
      }
    },
    addDataToCharts(namespaces, users, metrics) {
      this.entitiesChart.data.datasets[0].data = [namespaces, users, metrics];  
      this.entitiesChart.update();
    },
    async pullMetrics() {
      this.metrics = await metricsApi.get();
      this.addDataToCharts(
        this.metrics.namespaces, 
        this.metrics.users, 
        this.metrics.metrics.total_projects
      );
      this.addDataToRequests(
        this.metrics.metrics.failed_requests,
        this.metrics.metrics.successful_requests,
        this.metrics.metrics.total_downloads,
        this.metrics.metrics.total_executes
      );
    }
  },
  async mounted() {
    this.entitiesChart = new Chart(document.getElementById('entities'), {
      type: 'bar',
      data: {
        labels: ['namespaces', 'users', 'projects'],
        datasets: [{
          label: '# of entities',
          data: []
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    this.requestsChart = new Chart(document.getElementById('requests'), {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'failed requests',
            data: [],
            fill: false,
            borderColor: 'rgb(192, 75, 75)',
            tension: 0.1
          },
          {
            label: 'successful requests',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'downloads',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 75, 192)',
            tension: 0.1
          },
          {
            label: 'executes',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 75)',
            tension: 0.1
          }
        ]
      }
    });

    await this.pullMetrics();

    setInterval(this.pullMetrics, 2000);
  }
}
</script>