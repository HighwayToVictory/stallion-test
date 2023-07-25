<template>
    {{ namespace_id }} | {{ project_id }}
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    data() {
        return {
            namespace_id: 0,
            project_id: 0
        }
    },
    mounted() {
        const route = useRoute();

        this.namespace_id = route.params.namespace;
        this.project_id = route.params.id;
    }
}
</script>

<style>

</style>