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
        async login(username, password) {
            const data = await fetchWrapper.post(`${baseUrl}`, {'username':username,'password':password});    
            const token = data['token'];

            this.token = token;

            localStorage.setItem("jwt", token);

            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;

            localStorage.removeItem('jwt');

            router.go('/login');
        }
    }
});
