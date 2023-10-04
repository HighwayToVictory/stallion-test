import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';


import usersRoutes from './users.routes';
import projectsRoutes from './projects.routes';


import { Home, Dashboard } from '@/views/HomeView';
import { Login } from '@/views/LoginView';
import { About } from '@/views/AboutView';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    ...usersRoutes,
    ...projectsRoutes,
  ]
})

router.beforeEach((to, _, next) => {
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
  } else {
    next();
  }
})


export default router;