import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import Layout from '@/views/layout/index.vue';
// import Dashboard from '@/views/dashboard/index.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  },
  {
    path: '/',
    name: '你好',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: '你好',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          affix: true,
        },
      },
      {
        path: '/page1',
        name: '哈哈哈',
        component: () => import(/* webpackChunkName: "page1" */ '@/views/dashboard/page1.vue'),
        meta: {
          affix: false,
        },
      },
      {
        path: '/page2',
        name: '大家第四',
        component: () => import(/* webpackChunkName: "page2" */ '@/views/dashboard/page2.vue'),
        meta: {
          affix: false,
        },
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
