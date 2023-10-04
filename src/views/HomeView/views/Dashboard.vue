<script setup>
import { RouterLink } from 'vue-router'
import { parser } from '@/utils';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
  <div class="p-5 rounded shadow m-5">
    <div class="h3 pb-2 mb-3">
      Dashboard
    </div>
    <div class="my-3">
      <div class="row m-0 g-2" style="grid-column-gap: 20px;">
        <div class="col bg-light rounded p-3">
          <div style="text-align: justify;">
            This is the main dashboard. In this page you can see all of the system projects.
            In order to get more details about each projects, click on view project button.
            You execute projects in their page.
          </div>
        </div>
        <div class="col p-3 bg-light rounded">
          <div class="mb-3">
            Create a new project in order to perform your tests:
          </div>
          <div>
            <RouterLink style="width: 100%;" to="/projects/new" type="button" class="btn btn-success btn-block">
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
      <div>
        <div class="pb-2 d-flex justify-content-between">
          <div class="h4">
            namespace projects
          </div>
          <div>
            <button v-on:click="compare('date')" class="btn btn-sm btn-dark" style="margin-right: 10px;">
              <svg v-if="sortStatus.get('date') == 'down'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
              </svg>
              Sort by date
            </button>
            <button v-on:click="compare('name')" class="btn btn-sm btn-dark">
              <svg v-if="sortStatus.get('name') == 'down'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up me-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
              </svg>
              Sort by name
            </button>
          </div>
        </div>
        <div>
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
                  {{  project['created_by']??'not set' }}
                </td>
                <td style="text-align: center;">
                  <button v-on:click="deleteProject(project['id'])" class="btn btn-danger btn-sm text-left" style="margin-right: 5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-x me-2" viewBox="0 0 16 16">
                      <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                      <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293l-1.146-1.147z"/>
                    </svg>
                    delete project
                  </button>
                  <RouterLink :to="`/projects/${project.id}`" class="btn btn-primary btn-sm text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill me-2" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                    view project
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'
import { projectsApi } from '@/api';

export default {
  data() {
    return {
      user: "",
      projects: [],
      sortStatus: new Map([
        ["date", "down"],
        ["name", "down"]
      ])
    }
  },
  methods: {
    async deleteProject(id) {
      await projectsApi.remove(id);
      this.projects = await projectsApi.getAll();
    },
    compareObj(field, reverse) {
      return (a, b) => {
        const av = a[field];
        const bv = b[field];

        if (typeof av == "string") {
          return reverse ? av.localeCompare(bv) : bv.localeCompare(av);
        } else {
          if (reverse) {
            return av < bv ? 1 : -1;
          } else {
            return av > bv ? 1 : -1;
          }
        }
      }
    },
    compare(field) {
      this.projects.sort(this.compareObj(field, this.sortStatus.get(field) === "up"));
      this.sortStatus.set(field, this.sortStatus.get(field) === "up" ? "down" : "up");
    }
  },
  async mounted() {
    const authStore = useAuthStore();
    this.user = authStore.username();

    this.projects = await projectsApi.getAll();
  },
  computed: {
    projectsList() {
      return this.projects;
    }
  }
}
</script>