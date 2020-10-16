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
    homeHeadLogoHeight: '',
    homeLinkButton: '',
    addRequestList: '',
    totalPages: '',
    editLink: '',
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
    },
    //添加命盘成功 跳转到Home页面，profile页面才会有回到Home的按钮
    homeLinkButtonMutations(state, v) {
      state.homeLinkButton = v
    },
    //添加数据成功，让List页面请求数据
    addRequestListMutations(state, v) {
      state.addRequestList = v
    },
    totalPagesMutations(state, v) {
      state.totalPages = v
    },
    editLinkMutations(state, v) {
      state.editLink = v
    }
  },
  getters: {},
  modules: {}
})
