import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/login/index.vue')
    }
  ]
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  NProgress.start()
  NProgress.set(0.5)
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router