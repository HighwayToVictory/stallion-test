<script setup>
import { RouterLink } from 'vue-router'
import { parser } from '@/utils';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
  <div class="p-5">
    <div class="h3 pb-2 mb-3">
      Dashboard
    </div>
    <div class="bg-light rounded p-3">
      <div style="text-align: justify;">
        This is the main dashboard. You can select a namespace from available namespaces for you
        and see the projects of that namespace. If you cannot see a namespace in your list, contact
        to one of the admin users so that they add you to that namespace. You cannot see neither namespaces
        that you are not belong to or their projects.
      </div>
    </div>
    <div class="my-3">
      <div class="row m-0 g-2" style="grid-column-gap: 20px;">
        <div class="col p-3 bg-light rounded">
          <div class="mb-3">
            Select a namespace from the list below which contains your available namespaces:
          </div>
          <select v-model="namespace" class="form-select" aria-label=".form-select-sm example">
            <option v-for="item in namespaces" :key="item.id" :value="item">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="col p-3 bg-light rounded">
          <div class="mb-3">
            Create a new project into your namespaces in order to perform your tests:
          </div>
          <div>
            <RouterLink style="width: 100%;" v-if="authStore.user() || authStore.admin()" to="/projects/new" type="button" class="btn btn-success btn-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-plus-square-dotted" viewBox="0 0 16 16">
                <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
              </svg>
              create a new project
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light rounded p-3 my-3">
      <div v-if="this.namespace != null">
        <div class="pb-2 d-flex justify-content-between">
          <div class="h4">
            namespace projects
          </div>
          <div>
            <button v-on:click="compare('date', false)" class="btn btn-sm btn-dark" style="margin-right: 10px;">
              Sort by date
            </button>
            <button v-on:click="compare('name', false)" class="btn btn-sm btn-dark">
              Sort by name
            </button>
          </div>
        </div>
        <div v-if="this.projects.length > 0">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style="text-align: center;">Name</th>
                <th scope="col" style="text-align: center;">Created at</th>
                <th scope="col" style="text-align: center;">Created by</th>
                <th scope="col" style="text-align: center;">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in projectsList" v-bind:key="project['id']">
                <td style="text-align: center;">
                  {{ project['name'] }}
                </td>
                <td style="text-align: center;">
                  {{ parser.parseTime(project['created_at']) }}
                </td>
                <td style="text-align: center;">
                  {{  project['created_by']??'none' }}
                </td>
                <td style="text-align: center;">
                  <button v-if="authStore.user() || authStore.admin()" v-on:click="deleteProject(project['id'])" class="btn btn-danger btn-sm text-left" style="margin-right: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-x-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    delete project
                  </button>
                  <RouterLink :to="`/projects/${this.namespace.id}/${project.id}`" class="btn btn-primary btn-sm text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-x-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    view project
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          No projects!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'
import { projectsApi, namespacesApi, userProjectsApi } from '@/api';

export default {
  data() {
    return {
      user: "",
      namespaces: [],
      projects: [],
      namespace: null
    }
  },
  methods: {
    async select(namespace) {
      this.namespace = namespace;
      
      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    },
    async deleteProject(id) {
      await userProjectsApi.remove(this.namespace.id, id);
      
      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    },
    compareObj(field, reverse) {
      return (a, b) => {
        const av = a[field];
        const bv = b[field];

        if (reverse) {
          return av < bv ? 1 : -1;
        } else {
          return av > bv ? 1 : -1;
        }
      }
    },
    compare(field, reverse) {
      this.projects.sort(this.compareObj(field, reverse));
    }
  },
  async mounted() {
    const authStore = useAuthStore();

    this.user = authStore.username();

    this.namespaces = await namespacesApi.get();

    if (this.namespaces.length > 0) {
      this.namespace = this.namespaces[0];

      let tmp = await projectsApi.get(this.namespace.id);
      this.projects = tmp.projects;
    }
  },
  computed: {
    projectsList() {
      return this.projects;
    }
  },
  watch: {
    namespace: async function(n, o) {
      if (n !== o) {
        await this.select(n);
      }
    },
  }
}
</script>