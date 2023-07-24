<script setup>
import { parser } from '@/utils';
</script>

<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Welcome `{{ user }}`
    </div>
    <div class="mb-5" style="text-align: justify;">
      This is the main dashboard. You can select a namespace from available namespaces for you
      and see the projects of that namespace. If you cannot see a namespace in your list, contact
      to one of the admin users so that they add you to that namespace. You cannot see neither namespaces
      that you are not belong to or their projects.
    </div>
    <div v-if="this.namespace != null">
      <div class="mb-5 border-bottom pb-2 row">
        <div class="h3 col-10">
          Projects
        </div>
        <div class="col-2">
          <select v-model="namespace" class="form-select" aria-label=".form-select-sm example">
            <option v-for="item in namespaces" :key="item.id" :value="item">
              {{ item.name }}
            </option>
          </select>
        </div>
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