<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores'

import Navigation from './components/Navigation.vue'
import Alert from './components/Alert.vue';

const authStore = useAuthStore();
</script>

<template>
  <div class="container p-0 m-0">
    <Alert style="position: fixed; left: 50%; transform: translate(-50%, 0); top: 20px;" />
    <div class="row p-0 m-0" style="min-height: -webkit-fill-available;">
      <div class="col-2 p-0 m-0" style="min-height: -webkit-fill-available;">
        <Navigation style="position: fixed; top: 0; left:0; width: inherit;" v-if="authStore.token" />
      </div>
      <div v-bind:class="authStore.token ? 'col-10' : 'w-100'" style="min-height: -webkit-fill-available;">
        <RouterView />
      </div>
    </div>
  </div>
</template>
