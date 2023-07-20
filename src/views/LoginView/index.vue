<template>
  <div style="margin-top: 150px;">
    <form class="w-50 mx-auto border rounded" style="padding: 50px 90px;">
      <div class="mb-5 h2 border-bottom pb-3">
        APT Login
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
      <button v-on:click="loginUser" type="button" class="btn btn-primary btn-block mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'

export default {
  methods: {
    loginUser() {
      const authStore = useAuthStore();
      
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      authStore.login(username, password);
    }
  }
}
</script>