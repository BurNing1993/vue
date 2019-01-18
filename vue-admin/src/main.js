import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// style
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

// plugins
import './plugins/element';

import '@/icons'; // icon
import '@/router/permission'; // permission control

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
