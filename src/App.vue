<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="container p-0 m-0">
    <div class="row p-0 m-0" style="min-height: -webkit-fill-available;">
      <div class="col-2 p-0 m-0" style="min-height: -webkit-fill-available;">
        <Navigation />
      </div>
      <div class="col-10" style="min-height: -webkit-fill-available;">
        <RouterView />
      </div>
    </div>
  </div>
</template>
