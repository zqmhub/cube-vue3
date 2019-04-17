import Vue from 'vue'
import Router from 'vue-router'

import Register from './views/Register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      // name: 'login',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',

      component: Register
    },
    {
      path: '/home',
      name: 'home',

      component: () => import('./views/Home.vue')
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      redirect: '/tabbar/home',
      component: () => import('./views/Tabbar.vue'),
      children: [{
        path: 'home',

        alias: 'tabbar/home',
        component: () => import('./views/Index.vue')
      }, {
        path: 'list',
        name: 'list',
        component: () => import('./views/List.vue')
      }, {
        path: 'search',
        name: 'search',
        component: () => import('./views/Search.vue')
      }, {
        path: 'cart',
        name: 'cart',
        component: () => import('./views/Cart.vue')
      }, {
        path: 'mine',
        name: 'mine',
        component: () => import('./views/Mine.vue')
      }, ]
    },
  ]
})