import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dom: '',        //太极图动画
    access_token: '',
    refresh_token: '',
    whichLink: 'profileAdd',
    TopLogoPath: '',
    homeHeadLogoHeight: ''
  },
  //异步操作在这里
  actions: {},
  //如果同步直接在这里
  mutations: {
    changerShowRightSide(state) {
      state.showRightSide = !state.showRightSide
    },
    //命盘展示返回上一次的操作界面
    whichLinkMutations(state, v) {
      state.whichLink = v
    },
    TopLogoPathMutations(state, v) {
      state.TopLogoPath = v
    },
    homeHeadLogoHeightMutations(state, v) {
      state.homeHeadLogoHeight = v
    }
  },
  getters: {},
  modules: {}
})
