import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import './permission';
import './plugins/icons';
import './plugins/element/index';

import 'normalize.css/normalize.css';
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
