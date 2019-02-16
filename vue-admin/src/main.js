import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/styles/index.scss'; // global css
import '@/icons'; // icon
import '@/permission'; // permission control

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
