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
    <div v-if="metrics" class="row p-0 m-0" style="grid-column-gap: 20px; grid-row-gap: 20px; ">
      <div class="col bg-light rounded p-3">
        <div>
          namespaces: {{ this.metrics.namespaces??'none' }}
        </div>
      </div>
      <div class="col bg-dark text-light rounded p-3">
        <div>
          users: {{ this.metrics.users??'none' }}
        </div>
      </div>
      <div class="col bg-secondary text-light rounded p-3">
        <div>
          projects: {{ this.metrics.metrics.total_projects??'none' }}
        </div>
      </div>
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
</template>

<script>
import { metricsApi } from '@/api';

export default {
  data() {
    return {
      metrics: undefined
    }
  },
  async mounted() {
    this.metrics = await metricsApi.get();
  }
}
</script>