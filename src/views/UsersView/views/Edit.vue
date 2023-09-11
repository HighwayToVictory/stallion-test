<template>
    <div class="p-5">
      <div class="h1 border-bottom pb-2 mb-5">
        Updating namespace `{{ namespace.name }}`
      </div>
      <div class="mb-5" style="text-align: justify;">
        Add users to this namespace or remove users from it. Just make sure to click on
        update button if you want to save your changes. Otherwise it might not save your
        changes.
      </div>
      <button v-on:click="update" type="button" class="btn btn-primary btn-block mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          update
      </button>
      <div class="row border rounded p-5">
        <div class="col">
          <div class="h3 border-bottom pb-2 mb-2">
            Namespace Users
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="user in namespace.users" :key="user['id']">
              {{ user['username'] }}
              <span class="badge bg-danger" v-on:click="remove(user)">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi me-2 bi-dash" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
                remove
              </span>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="h3 border-bottom pb-2 mb-2">
            Other Users
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="user in users" :key="user['id']">
              {{ user['username'] }}
              <span class="badge bg-primary" v-on:click="add(user)">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi me-2 bi-plus-lg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                add
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { adminNamespacesApi, adminUsersApi } from '@/api';
  import { useAlertStore } from '@/stores';
  import { useRoute } from 'vue-router'
  
  export default {
    data() {
      return {
        namespace_id: 0,
        namespace: "",
        users: [],
      }
    },
    methods: {
      add(user) {
        const index = this.users.indexOf(user);
  
        if (index > -1) {
          this.users.splice(index, 1);
        }
  
        this.namespace.users.push(user);
      },
      remove(user) {
        const index = this.namespace.users.indexOf(user);
  
        if (index > -1) {
          this.namespace.users.splice(index, 1);
        }
  
        this.users.push(user);
      },
      async update() {
        let ids = [];
  
        this.namespace.users.forEach((user) => {
          ids.unshift(user.id);
        })
  
        await adminNamespacesApi.update(parseInt(this.namespace_id), ids);
  
        const alertStore = useAlertStore();
        alertStore.success("Updated!");
      }
    },
    async mounted() {
      const route = useRoute();
  
      this.namespace_id = route.params.id;
      this.namespace = await adminNamespacesApi.getSingle(this.namespace_id);
      this.users = await adminUsersApi.get();
  
  
      this.namespace.users.forEach((user) => {
        var index = -1
  
        this.users.forEach((el, i) => {
          if (el.id === user.id) {
            index = i;
          }
        });
  
        if (index > -1) {
          this.users.splice(index, 1);
        }
      })
    }
  }
  </script>