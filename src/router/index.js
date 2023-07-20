import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';

import HomeView from '../views/HomeView/index.vue'
import LoginView from '../views/LoginView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView/index.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authStore = useAuthStore();

    if (!authStore.token) {
      authStore.returnUrl = to.fullPath;

      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    } else {
      let parts = JSON.parse(atob(authStore.token.split('.')[1]));

      if (parts['exp'] < Date.now() / 1000) {
        authStore.logout();
      }

      next();
    }
  }
  
  next();
})

export default router;