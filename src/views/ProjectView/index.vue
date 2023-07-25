<template>
    <div class="p-5">
        <div class="h1 border-bottom pb-2 mb-5">
            Project `{{ project.name }}`
        </div>
        <div class="overflow-auto" style="height: 460px;">
            <div class="d-flex justify-content-between align-items-center mb-5">
                <div class="h4">
                    {{ project.host }}
                </div>
                <span class="badge bg-secondary">
                    Created By `{{ project.creator }}` at `{{ project.created_at }}`
                </span>
            </div>
            <div class="m-2" v-if="project.description && project.description.length > 0">
                <div class="h5">
                    Description
                </div>
                <textarea class="w-100 p-3" :value="project.description" disabled></textarea>
            </div>
            <div class="mt-2 mb-5 border-bottom pb-5" v-if="project.labels && project.labels.length > 0">
                <span class="badge bg-primary m-1" v-for="item in project.labels" :key="item.key">
                    {{ item.key + "=" + item.value }}
                </span>
            </div>
            <div v-if="project.documents && project.documents.length > 0">
                <div class="h5">
                    Documents
                </div>
            </div>
            <div v-else>
                No for this project documents!
            </div>
            <button class="btn btn-primary mt-5">
                execute tests
            </button>
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