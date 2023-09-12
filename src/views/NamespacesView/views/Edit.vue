<template>
  <div class="p-5">
    <div class="h3 pb-2 mb-3">
      Updating namespace <b>{{ namespace.name }}</b>
    </div>
    <div class="bg-light rounded p-3 mb-3">
      <div style="text-align: justify;">
        Add users to this namespace or remove users from it. Just make sure to click on
        update button if you want to save your changes. Otherwise it might not save your
        changes.
      </div>
    </div>
    <div class="bg-light rounded p-3">
      <div class="mb-3">
        <input type="text" v-model="name" id="name" class="form-control" placeholder="ode13 ..." />
        <label class="form-label" for="name">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-bucket-fill" viewBox="0 0 16 16">
            <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/>
          </svg>
          Name
        </label>
      </div>
      <div class="row m-0 p-0 rounded mb-5">
        <div class="col">
          <div class="h6 border-bottom pb-2 mb-2">
            namespace users
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
          <div class="h6 border-bottom pb-2 mb-2">
            other users
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
      <button v-on:click="update" type="button" class="btn btn-primary btn-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          update namespace
      </button>
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
      name: "",
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

      await adminNamespacesApi.update(parseInt(this.namespace_id), this.name, ids);

      const alertStore = useAlertStore();
      alertStore.success("Updated!");
    }
  },
  async mounted() {
    const route = useRoute();

    this.namespace_id = route.params.id;
    this.namespace = await adminNamespacesApi.getSingle(this.namespace_id);
    this.users = await adminUsersApi.get();
    this.name = this.namespace.name;


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