import { createRouter, createWebHistory } from 'vue-router'

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
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      });
    } else {
      let token = localStorage.getItem('jwt');
      let parts = JSON.parse(atob(token.split('.')[1]));

      if (parts['exp'] < Date.now()) {
        next({
          path: '/login',
          params: { nextUrl: to.fullPath }
        });
      }

      next();
    }
  }
  
  next();
})

export default router
