import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../components/layout/index.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
    },
  ],
});

export default router;
