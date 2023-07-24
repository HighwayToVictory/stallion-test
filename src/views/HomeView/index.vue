<script setup>
import { parser } from '@/utils';
</script>

<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Welcome `{{ user }}`
    </div>
    <div class="mb-5">
      <div class="d-flex justify-content-between align-items-center mb-4" v-for="item in namespaces" :key="item.id">
        <span class="badge bg-secondary" v-on:click="select(item)">
          {{ item.name }}
        </span>
        <span>
          <span class="badge bg-primary badge-pill" style="margin-right: 10px;">
            {{ parser.parseDate(item.created_at) }}
          </span>
          <span class="badge" :class="this.namespace.id === item.id ? 'bg-success'  : 'bg-danger'">
            {{ this.namespace.id === item.id ? 'selected'  : 'select' }}
          </span>
        </span>
      </div>
    </div>
    <div v-if="this.namespace != null">
      <div class="h3 mb-5 border-bottom pb-2">
        Projects
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'
import { viewApi } from '@/api';

export default {
  data() {
    return {
      user: "",
      namespaces: [],
      projects: [],
      namespace: null
    }
  },
  methods: {
    select(namespace) {
      this.namespace = namespace;
    }
  },
  async mounted() {
    const authStore = useAuthStore();

    this.user = authStore.username();

    this.namespaces = await viewApi.get();

    if (this.namespaces.length > 0) {
      this.namespace = this.namespaces[0];
    }
  }
}
</script>

<style>

</style>