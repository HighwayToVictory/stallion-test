<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Users
    </div>
    <div class="mb-5">
      <RouterLink to="/users/new" type="button" class="btn btn-primary">Create</RouterLink>
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
            {{ convertRoleToString(user['role']) }}
          </td>
          <td class="p-3">
            {{ parseDate(user['created_at']) }}
          </td>
          <td>
            <button v-on:click="deleteUser(user['id'])" class="btn btn-danger" style="margin-right: 2px;">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchWrapper } from '@/helpers';
import router from '@/router';

const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    convertRoleToString(input) {
      console.log(input);

      switch (input) {
        case 1:
          return "Admin";
        case 2:
          return "Developer";
        case 3:
          return "Viewer";
      }
    },
    parseDate(input) {
      let d = new Date(input);

      return d.getFullYear() + " / " + d.getUTCMonth() + " / " + d.getDate();
    },
    async deleteUser(id) {
      await fetchWrapper.delete(`${baseUrl}/${id}`);

      router.go('/users');
    }
  },
  async mounted() {
    const users = await fetchWrapper.get(`${baseUrl}`);

    this.users = users;
  }
}
</script>

<style>

</style>