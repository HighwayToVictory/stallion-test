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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-braces-asterisk" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z"/>
        </svg>
        Name
      </label>
    </div>
    <div class="form-outline mb-4">
      <input type="text" v-model="host" id="host" class="form-control" placeholder="google.com ..." />
      <label class="form-label" for="host">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-bullseye" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-folder" viewBox="0 0 16 16">
          <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
        </svg>
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