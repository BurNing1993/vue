import Vue from 'vue';
import Element from 'element-ui';
import '@/styles/index.scss'; // global css
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import i18n from '@/lang';
import '@/icons'; // icon
import '@/errorLog'; // error log
import '@/permission'; // permission control

import Cookies from 'js-cookie';


Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value),
});
