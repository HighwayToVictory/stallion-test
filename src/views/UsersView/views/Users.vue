<script setup>
import { enumUtils, parser } from '@/utils';
</script>

<template>
  <div class="p-5 rounded shadow m-5">
    <div class="h3 pb-2">
      Users
    </div>
    <div class="row p-0 m-0 mb-3" style="grid-column-gap: 20px;">
      <div class="col bg-light rounded p-3" style="text-align: justify;">
        In users page you can see all of the system users. You can create new users
        or remove the existing ones. Since all users can have access to every component
        and every action, make sure to authorize your clients before giving them access
        to the application.
      </div>
      <div class="col bg-light rounded p-3">
        <div class="mb-4">
          Create new users in order to give them suitable rules to work with application.
        </div>
        <div class="form-outline mb-4">
        <input v-model="username" type="text" id="username" class="form-control" placeholder="admin ..." />
        <label class="form-label" for="username">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
          Username
        </label>
      </div>
      <div class="form-outline mb-4">
        <input v-model="password" type="password" id="password" class="form-control" placeholder="password ..." />
        <label class="form-label" for="password">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-key-fill" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          Password
        </label>
      </div>
        <button style="inline-size: none;: 100%;" type="button" class="btn btn-primary" v-on:click="create()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-fill-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
          </svg>
          new user
        </button>
      </div>
    </div>
    <div class="bg-light rounded p-3 g-2">
      <div class="h4">
        list of the system users
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" style="text-align: center;">User</th>
            <th scope="col" style="text-align: center;">Created at</th>
            <th scope="col" style="text-align: center;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user['id']">
            <td style="text-align: center;">
              {{ user['username'] }}
            </td>
            <td style="text-align: center;">
              {{ parser.parseTime(user['created_at']) }}
            </td>
            <td style="text-align: center;">
              <button v-on:click="deleteUser(user['id'])" class="btn btn-sm btn-danger text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-x-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                </svg>
                delete user
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { usersApi } from '@/api';
import { useAlertStore } from '@/stores';

export default {
  data() {
    return {
      username: "",
      password: "",
      users: []
    }
  },
  methods: {
    async deleteUser(id) {
      await usersApi.remove(id);
      this.users = await usersApi.get();

      const alertStore = useAlertStore();
      alertStore.success(`User deleted!`);
    },
    async create() {
      await usersApi.create(this.username, this.password);
      this.users = await usersApi.get();

      const alertStore = useAlertStore();
      alertStore.success(`User ${this.username} created!`);

      this.username = "";
      this.password = "";
    }
  },
  async mounted() {
    this.users = await usersApi.get();
  }
}
</script>