/*
 * @Author: Guoxing.han 
 * @Date: 2017-04-28 14:08:44 
 * @Last Modified by: Guoxing.han 
 * @version 0.0.1 
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/about',
      component: resolve => require(['../components/common/home/Home.vue'], resolve),
      children: [{
        path: '/',
        component: resolve => require(['../components/pages/about/Index.vue'], resolve)
      }, {
        path: 'use',
        component: resolve => require(['../components/pages/about/Use.vue'], resolve)
      }]
    },
    {
      path: '/m',
      component: resolve => require(['../components/common/home/Home.vue'], resolve),
      children: [{
        path: '/m/table',
        component: resolve => require(['../components/pages/table/Table.vue'], resolve)
      }, {
        path: '/m/use',
        component: resolve => require(['../components/pages/about/Use.vue'], resolve)
      }]
    },
    {
      path: '/login',
      component: resolve => require(['../components/pages/login/Login.vue'], resolve)
    },
  ]
})
