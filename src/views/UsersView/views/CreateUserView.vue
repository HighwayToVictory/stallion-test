<template>
  <div class="p-5">
    <div class="h1 border-bottom pb-2 mb-5">
      Create User
    </div>
    <div class="form-outline mb-4">
      <input type="text" id="username" class="form-control" placeholder="admin ..." />
      <label class="form-label" for="username">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
        Username
      </label>
    </div>
    <div class="form-outline mb-4">
      <input type="password" id="password" class="form-control" placeholder="password ..." />
      <label class="form-label" for="password">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-key-fill" viewBox="0 0 16 16">
          <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        Password
      </label>
    </div>
    <div class="form-outline mb-4">
      <select id="role" class="form-control">
        <option value="1">Admin</option>
        <option value="2">Developer</option>
        <option value="3">Viewer</option>
      </select>
      <label class="form-label" for="role">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-dpad-fill" viewBox="0 0 16 16">
          <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3Zm1.288 2.34a.25.25 0 0 1 .424 0l.799 1.278A.25.25 0 0 1 8.799 4H7.201a.25.25 0 0 1-.212-.382l.799-1.279Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
        </svg>
        Role
      </label>
    </div>
    <button v-on:click="createUser" type="button" class="btn btn-primary btn-block mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
        Create
      </button>
  </div>
</template>

<script>
import { fetchWrapper } from '@/helpers';
import router from '@/router';

const baseUrl = `${import.meta.env.VITE_API_URL}/admin/users`;

export default {
  methods: {
    async createUser() {
      let name = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      let role = parseInt(document.getElementById("role").value);

      await fetchWrapper.post(`${baseUrl}`, {"username": name, "password": pass, "role": role});

      router.push('/users');
    }
  }
}
</script>

<style>

</style>