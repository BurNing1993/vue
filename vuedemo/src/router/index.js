import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

Vue.use(Router);

export const constantRouterMap = [
  { path: '/', component: () => import('@/views/home/index') },
  { path: '/404', component: () => import('@/views/404') },
  { path: '*', redirect: '/404' }
];

const router = new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export default router;
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
});
