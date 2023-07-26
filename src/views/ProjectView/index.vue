<script setup>
import { parser, enumUtils } from '@/utils';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <div class="p-5">
        <div class="h1 border-bottom pb-2 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi me-2 bi-kanban-fill" viewBox="0 0 16 16">
                <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
            </svg>
            Project `{{ project.name }}`
        </div>
        <div class="overflow-auto" style="height: 460px;">
            <div class="d-flex justify-content-between align-items-center mb-5">
                <div class="h4">
                    {{ project.host }}
                </div>
                <span class="badge bg-secondary">
                    Created By `{{ project.creator }}` at `{{ parser.parseTime(project.created_at) }}`
                </span>
            </div>
            <div class="m-2" v-if="project.description && project.description.length > 0">
                <div class="h5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-clipboard-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
                    </svg>
                    Description
                </div>
                <textarea class="w-100 p-3" :value="project.description" disabled></textarea>
            </div>
            <div class="mt-2 mb-5 border-bottom pb-5" v-if="project.labels && project.labels.length > 0">
                <span class="badge bg-primary m-1" v-for="item in project.labels" :key="item.key">
                    {{ item.key + " = " + item.value }}
                </span>
            </div>
            <div v-if="project.documents && project.documents.length > 0">
                <div class="h4 mb-2">
                    Documents
                </div>
                <div class="row rounded bg-light text-dark my-3" v-for="item in project.documents" :key="item.id">
                    <div class="col p-3" style="text-align: center;">
                        {{ item.instruction }}
                    </div>
                    <div class="col p-3" style="text-align: center;">
                        <span class="badge bg-primary">
                            {{ enumUtils.status(item.status) }}
                        </span>
                    </div>
                    <div class="col p-3" style="text-align: center;">
                        <span class="badge bg-dark">
                            {{ parser.parseTime(item.created_at) }}
                        </span>
                    </div>
                    <div class="col p-3" style="text-align: center;">
                        <button v-on:click="download(item.id)" class="btn btn-sm btn-secondary">
                            download log file
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                There are not documents for this project!
            </div>
            <button v-if="authStore.user() || authStore.admin()" class="btn btn-success   mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
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
    methods: {
        async download(id) {
            await projectsApi.download(this.namespace_id, this.project_id, id);
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