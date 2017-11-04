import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  img: false
}

const mutations = {
  toggle(state) {
    if(state.img) {
      state.img = false
    } else {
      state.img = true
    }
  }
}

const actions = {
  goNav({
    commit
  }) {
    commit('show')
  },
  backNav({
    commit
  }) {
    commit('hide')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
