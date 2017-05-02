/*
 * Vue 入口文件
 * @Author: Guoxing.han 
 * @Date: 2017-04-26 11:45:17 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import './assets/mock/index.js';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
