// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from "axios"
import moment from "moment"
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
Vue.prototype.$moment = moment

import index from '@/components/Home/index'
import detail from '@/components/Blog/detail'

const router = new VueRouter({
  mode: 'history',
  routes: [{
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
      component: index
    },
    {
      path: '/project',
      name: 'project',
      component: index
    },
    {
      path: '/think',
      name: 'think',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: index
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
  },
  // created() {
  //   this.$http({
  //       method: 'get',
  //       url: 'http://47.94.89.18/?json=1',
  //     }).then((res) => {
  //       this.api = res.data.posts
  //
  //       console.log(this.api)
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     })
  // }
})
