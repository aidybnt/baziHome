<template>
  <div id="home">
    <div style="height: 99px"></div>

    <HomeRight></HomeRight>

    <HomeHead>
      <template v-slot:left>
        <logout></logout>
      </template>
    </HomeHead>

    <HomeShow>
      <template v-slot:ShengChen>
        <HomeShowShengChen></HomeShowShengChen>
      </template>
      <template v-slot:RiZhu>
        <HomeShowRiZhu></HomeShowRiZhu>
      </template>
      <template v-slot:DaYun>
        <HomeShowDaYun></HomeShowDaYun>
      </template>
      <template v-slot:LiuNian>
        <HomeShowLiuNian></HomeShowLiuNian>
      </template>
      <template v-slot:LiuYue>
        <HomeShowLiuYue></HomeShowLiuYue>
      </template>
      <template v-slot:LiuRi>
        <HomeShowLiuRi></HomeShowLiuRi>
      </template>
      <template v-slot:LiuShi>
        <HomeShowLiuShi></HomeShowLiuShi>
      </template>
    </HomeShow>

    <HomeFoot></HomeFoot>

  </div>
</template>

<script>
import Logout from "@/components/common/Logout";
import HomeHead from "@/components/home/HomeHead";
import HomeFoot from "@/components/home/HomeFoot";
import HomeRight from "@/components/home/HomeRight";
import HomeShow from "@/components/home/HomeShow";
import HomeShowRiZhu from "@/components/home/HomeShowRiZhu";
import HomeShowShengChen from "@/components/home/HomeShowShengChen";
import HomeShowDaYun from "@/components/home/HomeShowDaYun";
import HomeShowLiuNian from "@/components/home/HomeShowLiuNian";
import HomeShowLiuYue from "@/components/home/HomeShowLiuYue";
import HomeShowLiuRi from "@/components/home/HomeShowLiuRi";
import HomeShowLiuShi from "@/components/home/HomeShowLiuShi";

export default {
  name: 'Home',
  components: {HomeShowLiuShi, HomeShowLiuRi, HomeShowLiuYue, HomeShowLiuNian, HomeShowDaYun, HomeShowShengChen, HomeShowRiZhu, HomeShow, HomeRight, HomeFoot, HomeHead, Logout},
  data() {
    return {
      cancelable: false,
      logoutLoading: false,
      message: '',
    }
  },
  //监听子组件异步完成，通过VUEX
  //退出登陆监听 调出message提示
  watch: {
    // deep: true,
    // immediate: true,
    // '$store.state.logoutLoading': function () {
    //   if (this.$store.state.logoutLoading == false) {
    //     this.logoutLoading = this.$store.state.logoutLoading
    //   }
    //   this.$nextTick(function () {
    //     this.$store.state.logoutLoading = ''
    //   })
    // },
  },
  methods: {
    // logoutClick() {
    //   this.logoutLoading = true
    //   this.$refs.logout.logout()
    // },
    // rightSideClick() {
    //   this.$store.commit('changerShowRightSide')
    // },
    handleChange(val) {
      console.log(val);
    }
  },
}
</script>
<style>
#home {
  background-color: #595757;
  min-height: 100vh;
}

@import "~@/assets/css/show-mobile.css";
</style>
