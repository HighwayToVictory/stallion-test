import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';
import router from '@/router';

const baseUrl = `${import.meta.env.VITE_API_URL}/login`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: JSON.parse(localStorage.getItem('jwt')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const token = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });    

            this.token = token;

            localStorage.setItem('jwt', token);

            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;

            localStorage.removeItem('jwt');

            router.push('/login');
        }
    }
});
