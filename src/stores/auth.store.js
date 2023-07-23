import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';
import router from '@/router';


const baseUrl = `${import.meta.env.VITE_API_URL}/login`;


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem("jwt"),
        returnUrl: null
    }),
    actions: {
        username() {
            return JSON.parse(atob(this.token.split('.')[1]))['name'];
        },
        admin() {
            return JSON.parse(atob(this.token.split('.')[1]))['role'] === 1;
        },
        user() {
            return JSON.parse(atob(this.token.split('.')[1]))['role'] === 2;
        },
        async login(username, password) {
            const data = await fetchWrapper.post(`${baseUrl}`, {'username':username,'password':password});    
            const token = data['token'];

            this.token = token;

            localStorage.setItem("jwt", token);

            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            this.returnUrl = '/';

            localStorage.removeItem('jwt');

            window.location.replace('/login');
        }
    }
});
