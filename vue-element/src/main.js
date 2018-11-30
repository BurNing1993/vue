import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// style
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// plugins
import './plugins/axios'
import './plugins/element.js'

import '@/icons' // icon
import '@/router/permission' // permission control

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
