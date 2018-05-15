import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import CoreConcepts from '../components/coreconcepts'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'about',
      children:[
        {
        path: 'about',
        name: 'about',
        component: About,
        },
        {
        path: 'coreconcepts',
        name: 'coreconcepts',
        component: CoreConcepts,
        },
      ]
    }
  ]
})
