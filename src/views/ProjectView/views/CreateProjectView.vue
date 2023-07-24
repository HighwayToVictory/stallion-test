<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Create Project
    </div>
    <div class="mb-5" style="text-align: justify;">
      Make a new project in a namespace that you want.
    </div>
    <div class="form-outline mb-4">
      <input type="text" v-model="name" id="name" class="form-control" placeholder="mysite ..." />
      <label class="form-label" for="name">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-bucket-fill" viewBox="0 0 16 16">
          <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/>
        </svg>
        Name
      </label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" v-model="host" id="host" class="form-control" placeholder="google.com ..." />
      <label class="form-label" for="host">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-bucket-fill" viewBox="0 0 16 16">
          <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/>
        </svg>
        Host
      </label>
    </div>
    <div class="form-outline mb-4">
      <select v-model="namespace" id="namespace" class="form-select" aria-label=".form-select-sm example">
        <option v-for="item in namespaces" :key="item.id" :value="item">
          {{ item.name }}
        </option>
      </select>
      <label class="form-label" for="namespace">
        Namespace
      </label>
    </div>
    <button v-on:click="createProject" type="button" class="btn btn-primary btn-block mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
        create
    </button>
  </div>
</template>

<script>
import { namespacesApi } from '@/api';
import { viewApi, projectsApi } from '@/api';

import router from '@/router';

export default {
  data() {
    return {
      name: "",
      host: "",
      namespace: "",
      namespaces: []
    }
  },
  methods: {
    async createProject() {
      await projectsApi.create(this.namespace.id, this.name, this.host);

      this.name = "";
      this.host = "";

      router.push('/');
    }
  },
  async mounted() {
    this.namespaces = await viewApi.get();
    this.namespace = this.namespaces[0];
  }
}
</script>

<style>

</style>