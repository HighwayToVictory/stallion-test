<script setup>
import { RouterLink } from 'vue-router'
import { parser } from '@/utils';
</script>

<template>
  <div class="p-5">
    <div class="h3 pb-2">
      Namespaces
    </div>
    <div class="row m-0 mb-3" style="grid-column-gap: 20px;">
      <div class="col bg-light rounded p-3 g-2" style="text-align: justify;">
        Each namespace has it's own projects and users. Only users that are in a namespace can
        see the projects and modify them. If they are viewer, they can only see the projects.
        Scroll down to see more namespaces.
      </div>
      <div class="col bg-light rounded p-3 g-2">
        <div class="mb-3">
          Create a new namespace for your grouping your users and projects.
        </div>
        <RouterLink style="width: 100%;" to="/namespaces/new" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-plus-square-dotted" viewBox="0 0 16 16">
            <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
          new namespace
        </RouterLink>
      </div>
    </div>
    <div class="bg-light rounded p-3 g-2">
      <div class="pb-2 mb-3 d-flex justify-content-between">
        <div class="h4">
          list of the current namespaces
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
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" style="text-align: center;">Name</th>
            <th scope="col" style="text-align: center;">Created by</th>
            <th scope="col" style="text-align: center;">Created at</th>
            <th scope="col" style="text-align: center;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in namespacesList" v-bind:key="item['id']">
            <td style="text-align: center;">
              {{ item['name'] }}
            </td>
            <td style="text-align: center;">
              {{ item['created_by']||'not set' }}
            </td>
            <td style="text-align: center;">
              {{ parser.parseTime(item['created_at']) }}
            </td>
            <td style="text-align: center;">
              <button v-on:click="deleteNamespace(item['id'])" class="btn btn-danger btn-sm text-left" style="margin-inline-end: 5px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                delete
              </button>
              <RouterLink :to="`/namespaces/edit/${item['id']}`" class="btn btn-primary btn-sm text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                </svg>
                edit
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { adminNamespacesApi } from '@/api';

export default {
  data() {
    return {
      namespaces: [],
      sortStatus: new Map([
        ["date", "down"],
        ["name", "down"]
      ])
    }
  },
  methods: {
    async deleteNamespace(id) {
      await adminNamespacesApi.remove(id);
      this.namespaces = await adminNamespacesApi.get();
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
      this.namespaces.sort(this.compareObj(field, this.sortStatus.get(field) === "up"));
      this.sortStatus.set(field, this.sortStatus.get(field) === "up" ? "down" : "up");
    }
  },
  async mounted() {
    this.namespaces = await adminNamespacesApi.get();
  },
  computed: {
    namespacesList() {
      return this.namespaces;
    }
  },
}
</script>
