<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores'

import Navigation from './components/Navigation.vue'
import Alert from './components/Alert.vue';

const authStore = useAuthStore();
</script>

<template>
  <div>
    <Alert style="position: fixed; left: 50%; transform: translate(-50%, 0); top: 60px;" />
    <Navigation class="shadow" style="position: fixed; top: 0; width: 100%; height: 60px;" v-if="authStore.token" />
    <div style="margin-top: 30px; min-height: -webkit-fill-available;">
      <RouterView />
    </div>
  </div>
</template>
