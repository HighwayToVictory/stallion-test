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
    <canvas class="my-3" id="entities"></canvas>
    <canvas class="my-3" id="requests"></canvas>
    <div v-if="metrics">
      <div class="row p-0 m-0" style="grid-column-gap: 20px; grid-row-gap: 20px; ">
        <div class="col bg-primary text-light rounded p-3">
          <div>
            token expire: {{ this.metrics.jwt??'none' }} minutes
          </div>
        </div>
        <div class="col-12 bg-primary text-light rounded p-3">
          <div>
            core address: <b>{{ this.metrics.core??'none' }}</b>
          </div>
        </div>
        <div class="col-12 bg-secondary text-light rounded p-3">
          <div>
            ftp address: <b>{{ this.metrics.ftp??'none' }}</b>
          </div>
        </div>
        <div class="col-12 bg-dark text-light rounded p-3">
          <div>
            database address: <b>{{ this.metrics.mysql??'none' }}</b>
          </div>
        </div>
        <div class="col bg-primary text-light rounded p-3">
          <div>
            failed requests: {{ this.metrics.metrics.failed_requests??'none' }}
          </div>
        </div>
        <div class="col bg-secondary text-light rounded p-3">
          <div>
            successful requests: {{ this.metrics.metrics.successful_requests??'none' }}
          </div>
        </div>
        <div class="col bg-dark text-light rounded p-3">
          <div>
            downloads: {{ this.metrics.metrics.total_downloads??'none' }}
          </div>
        </div>
        <div class="col bg-light rounded p-3">
          <div>
            executes: {{ this.metrics.metrics.total_executes??'none' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js/auto';
import { metricsApi } from '@/api';

export default {
  data() {
    return {
      metrics: undefined,
      timeline: []
    }
  },
  methods: {
    async pullMetrics() {
      this.metrics = await metricsApi.get();
      this.timeline.push({
        "time": new Date(),
        "metrics": this.metrics
      });

      const ctx = document.getElementById('entities');
      const requests_ctx = document.getElementById('requests');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['namespaces', 'users', 'projects'],
          datasets: [{
            label: '# of entities',
            data: [this.metrics.namespaces, this.metrics.users, this.metrics.metrics.total_projects],
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      new Chart(requests_ctx, {
        type: 'line',
        labels: ["1","2","3","4","5","6","7","8","9","10"],
        datasets: [
          {
            label: 'failed',
            data: [1,2,3,3,4,5,7,8,9,10],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      });
    }
  },
  async mounted() {
    await this.pullMetrics();

    setInterval(this.pullMetrics, 5000);
  }
}
</script>