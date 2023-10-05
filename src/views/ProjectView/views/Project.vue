<script setup>
import { parser, enumUtils } from '@/utils';
</script>

<template>
    <div class="p-5 rounded shadow m-5">
        <div class="h3 pb-2 mb-3">
            Project <b>{{ project.name }}</b>
        </div>
        <div class="bg-light shadow rounded p-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="badge bg-dark">
                    Target address: <b>{{ project.host }}</b>
                </div>
                <span class="badge bg-secondary">
                    Created By <b>{{ project.creator }}</b> at {{ parser.parseTime(project.created_at) }}
                </span>
            </div>
            <div v-if="project.description && project.description.length > 0">
                <div class="h6">
                    Description
                </div>
                <textarea class="w-100 p-3" :value="project.description" disabled></textarea>
            </div>
            <div class="my-3" v-if="project.labels && project.labels.length > 0">
                <div class="h6 mb-3">
                    Labels
                </div>
                <span class="badge bg-primary m-1" v-for="item in project.labels" :key="item.key">
                    {{ item.key + " = " + item.value }}
                </span>
            </div>
            <div class="my-3" v-if="project.endpoints && project.endpoints.length > 0">
                <div class="h6 mb-3">
                    Endpoints
                </div>
                <small class="bg-primary text-light p-2 rounded m-1" v-for="item in project.endpoints" :key="item">
                    {{ project.host + item }}
                </small>
            </div>
            <div class="my-3" v-if="project.params && project.params.length > 0">
                <div class="h6 mb-3">
                    Parameters
                </div>
                <span class="badge bg-primary m-1" v-for="item in project.params" :key="item.key">
                    {{ item.key + " = " + item.value }}
                </span>
            </div>
        </div>
        <div class="bg-light shadow rounded p-3 mt-3">
            <div v-if="project.documents && project.documents.length > 0">
                <div class="h5 mb-3">
                    Documents
                </div>
                <div class="mb-5" style="text-align: justify;">
                    In this section you can see the project documents. Documents are created when you execute penetration
                    testing for a project. Each document is a certificate for an spicific attack that was performed on your
                    host. You see the attack results in their log files.
                </div>
                <div :class="getRowClassList(item.result)" v-for="item in project.documents" :key="item.id">
                    <div class="col">
                        {{ item.instruction }}
                    </div>
                    <div class="col" style="text-align: center;">
                        <span class="badge bg-light-dark">
                            {{ enumUtils.status(item.status) }}
                        </span>
                    </div>
                    <div class="col" style="text-align: center;"    >
                        <span class="badge bg-light-dark">
                            {{ "executed at: " + parser.parseTime(item.created_at) }}
                        </span>
                    </div>
                    <div class="col">
                        <span class="badge bg-light-dark">
                            {{ "execution time: (Ms) " + item.execution_time||'not set' }}
                        </span>
                    </div>
                    <div class="col" style="text-align: center;">
                        <a v-on:click="download(item.id)" style="margin-right: 5px;" class="btn btn-sm btn-light" download>
                            view log file
                        </a>
                        <a v-on:click="rerun(item.id)" class="btn btn-sm btn-dark">
                            rerun the test
                        </a>
                    </div>
                </div>
            </div>
            <div class="my-2" style="text-align: justify;" v-else>
                There are not documents for this project! You can create documents by executing penetration
                testing on your host. Just click the button below. If you are a viewer, you cannot execute the project.
                Project execution is only available for admins and developers.
            </div>
            <button v-on:click="execute" class="btn mt-3" :class="this.executealbe ? 'btn-primary' : 'btn-warning disabled'">
                <svg v-if="this.executealbe" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-skip-start-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-hourglass-split" viewBox="0 0 16 16">
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                </svg>
                {{ this.executealbe ? 'execute tests' : 'wait ...' }}
            </button>
            <button class="btn btn-success mt-3" style="margin-inline-start: 5px;" v-on:click="reloadProject">
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
import { projectsApi } from '@/api';
import { fetchWrapper } from '@/helpers';
import { useAlertStore } from '@/stores';

export default {
    data() {
        return {
            project_id: 0,
            project: "",
            executealbe: false
        }
    },
    methods: {
        async download(id) {
            const url = projectsApi.download(this.project_id, id);

            let file = await fetchWrapper.file(url);
            if (file != null) {
                window.location.assign(file);
            }
        },
        async execute() {
            if (!this.executealbe) {
                return;
            }

            this.executealbe = false;

            await projectsApi.execute(this.project_id);
        },
        async rerun(id) {
            const alertStore = useAlertStore();
            alertStore.success("rerun request is send. click on reload!");

            await projectsApi.rerun(this.project_id, id);
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
            this.project = await projectsApi.get(this.project_id);
            this.checkExec();
        },
        getRowClassList(result) {
            let list = "row shadow align-items-center m-0 p-0 rounded my-3 p-1";
            let bg = "bg-white";

            switch (result) {
                case 2:
                    bg = "bg-light-success text-light";
                    break;
                case 3:
                    bg = "bg-light-danger text-light";
                    break;
                case 4:
                    bg = "bg-light-warning";
                    break;
            }

            return list + " " + bg;
        }
    },
    async mounted() {
        const route = useRoute();

        this.project_id = route.params.id;
        this.project = await projectsApi.get(this.project_id);

        this.checkExec();
    }
}
</script>

<style scoped>
.bg-light-danger {
    background-color: rgb(255, 119, 119);
}

.bg-light-success {
    background-color: rgb(29, 165, 108);
}

.bg-light-warning {
    background-color: rgb(255, 255, 147);
}

.bg-light-dark {
    background-color: rgb(77, 77, 77);
}
</style>