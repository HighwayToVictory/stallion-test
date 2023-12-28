<template>
  <div style="margin-top: 150px;">
    <form class="m-auto shadow p-5 rounded" style="width: 30%;">
      <div class="mb-4 border-bottom pb-3 d-flex justify-content-between align-items-center">
        <div class="h2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi text-danger me-2 bi-fire" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
          </svg>
          LOGIN
        </div>
        <span class="badge bg-danger">
          {{ version }}
        </span>
      </div>
      <div class="mb-4">
        Please use your account credentials to login into the system's dashboard.
      </div>
      <div class="form-outline mb-4">
        <input type="text" id="username" class="form-control" placeholder="admin ..." />
        <label class="form-label" for="username">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
          username
        </label>
      </div>
      <div class="form-outline mb-4">
        <input type="password" id="password" class="form-control" placeholder="password ..." />
        <label class="form-label" for="password">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-key-fill" viewBox="0 0 16 16">
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          password
        </label>
      </div>
      <div class="mb-4" style="text-align: center;">
        <button v-on:click="loginUser" type="button" class="btn btn-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores'

export default {
  data() {
    return {
      version: ""
    }
  },
  methods: {
    loginUser() {
      const authStore = useAuthStore();
      
      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      authStore.login(username, password);
    }
  },
  mounted() {
    this.version = import.meta.env.VITE_VERSION;
  }
}
</script>