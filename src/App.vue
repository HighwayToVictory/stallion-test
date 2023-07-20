<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore();
</script>

<template>
  <div class="container p-0 m-0">
    <div class="row p-0 m-0" style="min-height: -webkit-fill-available;">
      <div class="col-2 p-0 m-0" style="min-height: -webkit-fill-available;">
        <Navigation v-if="authStore.token" />
      </div>
      <div v-bind:class="'col-10' ? authStore.token : 'col-12'" style="min-height: -webkit-fill-available;">
        <RouterView />
      </div>
    </div>
  </div>
</template>
