import Vue from 'vue'
import App from './App.vue'
import {
  userRoutes,
  publicRoutes,
  operatorRoutes
} from './router/index'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import G6 from '@antv/g6';

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.prototype.G6 = G6
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
const router = new VueRouter({
  history: 'hash',
  routes: [...userRoutes, ...operatorRoutes, ...publicRoutes] // (缩写) 相当于 routes: routes
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')