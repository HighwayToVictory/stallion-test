<script setup>
import { RouterLink } from 'vue-router'
import { enumUtils, parser } from '@utils';
</script>

<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Users
    </div>
    <div class="mb-5">
      <RouterLink to="/users/new" type="button" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-fill-add" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
        </svg>
        New user
      </RouterLink>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Role</th>
          <th scope="col">Created at</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user['id']">
          <td class="p-3">
            {{ user['username'] }}
          </td>
          <td class="p-3">
            {{ enumUtils.convertRoleToString(user['role']) }}
          </td>
          <td class="p-3">
            {{ parser.parseDate(user['created_at']) }}
          </td>
          <td>
            <button v-on:click="deleteUser(user['id'])" class="btn btn-danger text-left">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi me-2 bi-person-x-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
              </svg>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { usersApi } from '@/api';

import router from '@/router';

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async deleteUser(id) {
      await usersApi.remove(id);

      router.go('/users');
    }
  },
  async mounted() {
    this.users = await get();
  }
}
</script>

<style>

</style>