<script setup>
import { enumUtils } from '@/utils'
</script>

<template>
  <div class="p-5">
    <div class="h3 pb-2">
      User profile of <b>{{ enumUtils.role(user.role) }}</b>
    </div>
    <div class="bg-light rounded p-3 mb-3">
      <div class="mb-3" style="text-align: justify;">
        Update your profile settings. Be careful when your changing your credentials because
        you cannot restore them if you forget them. In case of any problem, contact one the admins.
      </div>
    </div>
    <div class="bg-light rounded p-3">
      <div class="row p-0 m-0 mb-4 pt-4" style="grid-column-gap: 20px;"> 
        <div class="col p-0 m-0">
          <div class="form-outline">
            <input type="text" v-model="username" class="form-control" placeholder="admin ..." />
            <label class="form-label" for="username">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Username
            </label>
          </div>
        </div>
        <div class="col p-0 m-0">
          <div class="form-outline">
            <input type="text" v-model="username" class="form-control" placeholder="admin ..." />
            <label class="form-label" for="username">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Username
            </label>
          </div>
        </div>
      </div>
      <div class="pl-4">
        <button v-on:click="updateUser" type="button" class="btn btn-primary btn-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi me-2 bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { userApi } from '@/api';
import { useAuthStore } from '@/stores';

export default {
    data() {
        return {
            username: "",
            user: "",
        }
    },
    methods: {
        async updateUser() {
            await userApi.update(this.username);
            
            const authStore = useAuthStore();
            authStore.logout()
        }
    },
    async mounted() {
        this.user = await userApi.get();
        this.username = this.user.username;
    }
}
</script>

<style>

</style>