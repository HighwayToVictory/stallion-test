<script setup>
import { RouterLink } from 'vue-router'
import { enumUtils, parser } from '@/utils';
</script>

<template>
  <div class="p-5">
    <div class="h3 pb-2">
      Users
    </div>
    <div class="row p-0 m-0 mb-3" style="grid-column-gap: 20px;">
      <div class="col bg-light rounded p-3" style="text-align: justify;">
        In users page you can see all of the system users. You can create new users
        or remove the existing ones. Pay attention to user roles. Only admin users have
        access to users, namespaces, and instructions pages. Developer users can create projects
        and execute them.
      </div>
      <div class="col bg-light rounded p-3">
        <div class="mb-4">
          Create new users in order to give them suitable rules to work with application.
        </div>
        <RouterLink style="width: 100%;" to="/users/new" type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-fill-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
          </svg>
          new user
        </RouterLink>
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
            <th scope="col" style="text-align: center;">Role</th>
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
              {{ enumUtils.role(user['role']) }}
            </td>
            <td style="text-align: center;">
              {{ parser.parseTime(user['created_at']) }}
            </td>
            <td style="text-align: center;">
              <button v-on:click="deleteUser(user['id'])" class="btn btn-sm btn-danger text-left" style="margin-right: 5px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-x-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                </svg>
                delete user
              </button>
              <button v-on:click="updateUser(user['id'])" class="btn btn-sm btn-primary text-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil me-2" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                edit user
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { adminUsersApi } from '@/api';
import { useAlertStore } from '@/stores';

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async deleteUser(id) {
      await adminUsersApi.remove(id);
      this.users = await adminUsersApi.get();
      const alertStore = useAlertStore();
      alertStore.success(`User deleted!`);
    },
    updateUser(id) {
      console.log(id);
    }
  },
  async mounted() {
    this.users = await adminUsersApi.get();
  }
}
</script>