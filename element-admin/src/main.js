import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/element';
import './mock'; // simulation data

import * as filters from './filters'; // global filters

import i18n from './lang';

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
});
