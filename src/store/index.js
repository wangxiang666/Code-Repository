import Vue from 'vue'
import Vuex from 'vuex'
import {
  setStore,
  getStore
} from '@/util/store'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    role: getStore({
      name: 'role'
    }) || '',
    globalTimer: null
  },
  mutations: {
    changeRole(state, data) {
      state.role = data
      setStore({
        name: 'role',
        content: data,
        type: 'session'
      })
    },
    resetTimer(state, data) {
      if (data === 1) {
        localStorage.setItem('p-alive', '1')
        state.globalTimer = setTimeout(() => {
          localStorage.setItem('p-alive', '0')
        }, 1000 * 60 * 10)
      } else {
        if (state.globalTimer) {
          clearTimeout(state.globalTimer)
        }
        localStorage.setItem('p-alive', '0')
      }
    }
  }
})

export default store