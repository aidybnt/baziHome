import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dom: '',
    access_token: '',
    refresh_token: '',
    // logoutLoading: '',
    showRightSide: true
  },
  //异步操作在这里
  actions: {},
  //如果同步直接在这里
  mutations: {
    changerShowRightSide(state) {
      state.showRightSide = !state.showRightSide
    }
  },
  getters: {},
  modules: {}
})
