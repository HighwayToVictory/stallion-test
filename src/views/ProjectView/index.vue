<template>
    <div class="p-5">
        <div class="h1 border-bottom pb-2 mb-5">
            Project `{{ project.name }}`
        </div>
        <div>
            <div class="h4">
                Host: {{ project.host }}
            </div>
            <div>
                Created By `{{ project.creator }}` at `{{ project.created_at }}`
            </div>
            <div v-if="project.description">
                About: {{ project.description }}
            </div>
            <div v-if="project.labels">
                <div class="h5">
                    Labels
                </div>
                <span v-for="item in project.labels" :key="item.key">
                    {{ item.key + "=" + item.value }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { projectsApi } from '@/api';

export default {
    data() {
        return {
            namespace_id: 0,
            project_id: 0,
            project: ""
        }
    },
    async mounted() {
        const route = useRoute();

        this.namespace_id = route.params.namespace;
        this.project_id = route.params.id;
        this.project = await projectsApi.getSingle(this.namespace_id, this.project_id);
    }
}
</script>

<style>

</style>