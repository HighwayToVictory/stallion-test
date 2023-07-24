<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Create Namespace
    </div>
    <div class="form-outline mb-4">
      <input type="text" v-model="name" id="name" class="form-control" placeholder="ode13 ..." />
      <label class="form-label" for="name">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
        Name
      </label>
    </div>
    <button v-on:click="createNamespace" type="button" class="btn btn-primary btn-block mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
        Create
      </button>
  </div>
</template>

<script>
import { namespacesApi } from '@/api';
import router from '@/router';

export default {
  data() {
    return {
      name: ""
    }
  },
  methods: {
    async createNamespace() {
      await namespacesApi.create(this.name);

      this.name = "";

      router.push('/namespaces');
    }
  }
}
</script>

<style>

</style>