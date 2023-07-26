import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores';


import usersRoutes from './users.routes';
import namespaceRoute from './namespace.route';
import projectRoute from './project.route';


import HomeView from '../views/HomeView/index.vue'
import LoginView from '../views/LoginView/index.vue'
import Profile from '../views/UsersView/views/Profile.vue'


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
      path: '/profile',
      component: Profile,
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
    },
    ...usersRoutes,
    ...namespaceRoute,
    ...projectRoute,
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

      // check admin and user routes
      if (to.matched.some(record => record.meta.adminRoute)) {
        if (parts['role'] == 1) {
          next();
        } else {
          next({
            path: from.path,
          });
        }
      } else if (to.matched.some(record => record.meta.userRoute)) {
        if (parts['role'] == 1 || parts['role'] == 2) {
          next();
        } else {
          next({
            path: from.path,
          });
        }
      } else {
        next();
      } 
    }
  } else {
    next();
  }
})


export default router;