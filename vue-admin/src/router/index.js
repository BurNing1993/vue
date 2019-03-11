import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '../views/layout/Layout.vue';

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import(/* webpackChunkName: "redirect" */ '../views/redirect/index.vue'),
      },
    ],
  },
  { path: '/login', component: () => import(/* webpackChunkName: "login" */'../views/login/index.vue'), hidden: true },
  { path: '/404', component: () => import(/* webpackChunkName: "404" */'../views/404.vue'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    children: [{
      path: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */'../views/dashboard/index.vue'),
      name: 'Dashboard',
      meta: {
        title: 'dashboard', icon: 'dashboard', noCache: true, affix: true,
      },
    }],
  },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
});

export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'tree',
        name: 'Tree',
        component: () => import(/* webpackChunkName: "redirect" */'../views/example/index.vue'),
        meta: { title: 'Example', icon: 'tree' },
      },
    ],
  },
  { path: '*', redirect: '/404', hidden: true },
];
