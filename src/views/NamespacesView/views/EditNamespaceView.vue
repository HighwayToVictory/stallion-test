<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
  {{ "Edit " + route.params.id }}
</template>

<script>
export default {

}
</script>

<style>

</style>