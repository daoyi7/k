// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from "axios"
import moment from "moment"
import 'clientjs'

import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

import apiConfig from '../config/api.config'
axios.defaults.baseURL = apiConfig.baseURL

Vue.prototype.$http = axios
Vue.prototype.$moment = moment

import index from '@/components/Home/index'
import detail from '@/components/Blog/detail'
import project from '@/components/Project/project'
import blog from '@/components/Blog/blog'
import think from '@/components/Think/think'
import search from '@/components/Search/search'
import NotFound from '@/components/NotFound/404'

const router = new VueRouter({
  // mode: 'history',
  'linkActiveClass': 'active',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/think',
      name: 'think',
      component: think
    },
    {
      path: '/about',
      name: 'about',
      component: index
    },
    {
      path: '/search/:search',
      name: 'search',
      component: search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
