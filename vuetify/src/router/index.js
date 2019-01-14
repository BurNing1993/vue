import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
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
