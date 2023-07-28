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
        <div>
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
                <div class="h4 mb-3">
                    Documents
                </div>
                <div class="mb-5" style="text-align: justify;">
                    In this section you can see the project documents. Documents are created when you execute penetration
                    testing for a project. Each document is a certificate for an spicific attack that was performed on your
                    host. You see the attack results in their log files.
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
                            {{ "Executed at: " + parser.parseTime(item.created_at) }}
                        </span>
                    </div>
                    <div class="col p-3" style="text-align: center;">
                        <a v-on:click="download(item.id)" class="btn btn-sm btn-secondary" download>
                            view log file
                        </a>
                    </div>
                </div>
            </div>
            <div class="my-5" style="text-align: justify;" v-else>
                There are not documents for this project! You can create documents by executing penetration
                testing on your host. Just click the button below. If you are a viewer, you cannot execute the project.
                Project execution is only available for admins and developers.
            </div>
            <button v-if="authStore.user() || authStore.admin()" v-on:click="execute" class="btn mt-5" :class="this.executealbe ? 'btn-success' : 'btn-warning disabled'">
                <svg v-if="this.executealbe" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-skip-start-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-hourglass-split" viewBox="0 0 16 16">
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                </svg>
                {{ this.executealbe ? 'execute tests' : 'wait ...' }}
            </button>
            <button v-if="(authStore.user() || authStore.admin()) && !this.executealbe" class="btn btn-primary mt-5" style="margin-left: 5px;" v-on:click="reloadProject">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
                reload
            </button>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { projectsApi, userProjectsApi } from '@/api';
import { fetchWrapper } from '@/helpers';

export default {
    data() {
        return {
            namespace_id: 0,
            project_id: 0,
            project: "",
            executealbe: false
        }
    },
    methods: {
        async download(id) {
            const url = projectsApi.download(this.namespace_id, this.project_id, id);

            console.log(url);

            let file = await fetchWrapper.file(url);
            window.location.assign(file);
        },
        async execute() {
            if (!this.executealbe) {
                return;
            }

            this.executealbe = false;

            await userProjectsApi.execute(this.namespace_id, this.project_id);
        },
        checkExec() {
            const limit = this.project.documents.length;
            var count = 0;
            this.project.documents.forEach((el) => {
                if (el.status === 3 || el.status === 4) {
                    count++;
                }
            });

            if (count == limit) {
                this.executealbe = true;
            }
        },
        async reloadProject() {
            this.project = await projectsApi.getSingle(this.namespace_id, this.project_id);
            this.checkExec();
        }
    },
    async mounted() {
        const route = useRoute();

        this.namespace_id = route.params.namespace;
        this.project_id = route.params.id;
        this.project = await projectsApi.getSingle(this.namespace_id, this.project_id);

        this.checkExec();
    }
}
</script>