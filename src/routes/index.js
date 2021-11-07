import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
// import { auth } from './middleware/auth';
// import middlewarePipeline from './middlewarePipeline';


const ADMIN = 'admin';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage'),
      beforeEnter(to, from, next) {
        if (
          store.getters['auth/isLoggedIn'] &&
          store.getters['auth/getUserData'].name === ADMIN
        )
          return next({ name: 'dashboard' });
        else if (
          store.getters['auth/isLoggedIn'] &&
          store.getters['auth/getUserData'].name !== ADMIN
        )
          return next({ name: 'home' });
        next();
      },
      // meta: {
      //     middleware: [
      //         auth
      //     ]
      // }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/HomePage'),
      beforeEnter(to, from, next) {
        if (
          store.getters['auth/isLoggedIn'] &&
          store.getters['auth/getUserData'].name !== ADMIN
        )
        return next();
        next({ name: 'login' });
      },
      // meta: {
      //     middleware: [
      //         auth
      //     ]
      // }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../pages/DashboardPage'),
      beforeEnter(to, from, next) {
        if (
          store.getters['auth/isLoggedIn'] &&
          store.getters['auth/getUserData'].name === ADMIN
        )
          return next();
        next({ name: 'login' });
      },
      // meta: {
      //     middleware: [
      //         auth
      //     ]
      // }
    },
    {
      path: '*',
      name: '404',
      component: () => import('../pages/NotFoundPage'),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (!to.meta.middleware) {
//     return next();
//   }
//   const middleware = to.meta.middleware;

//   const context = {
//     next,
//     store,
//   };
//   return middleware[0]({
//     ...context,
//     next: middlewarePipeline(context, middleware, 1)
//   });
// });

export default router;
