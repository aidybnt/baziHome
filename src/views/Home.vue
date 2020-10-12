<template>
  <div id="home">
    <HomeHead @imgLoad="headHeightChange">
      <template v-slot:left>
        <logout></logout>
      </template>
    </HomeHead>
    <div :style="height"></div>

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

    <Foot style="background-color: #595757;"></Foot>

  </div>
</template>

<script>
import Logout from "@/components/common/Logout";
import HomeHead from "@/components/home/HomeHead";
import HomeShow from "@/components/home/HomeShow";
import HomeShowRiZhu from "@/components/home/HomeShowRiZhu";
import HomeShowShengChen from "@/components/home/HomeShowShengChen";
import HomeShowDaYun from "@/components/home/HomeShowDaYun";
import HomeShowLiuNian from "@/components/home/HomeShowLiuNian";
import HomeShowLiuYue from "@/components/home/HomeShowLiuYue";
import HomeShowLiuRi from "@/components/home/HomeShowLiuRi";
import HomeShowLiuShi from "@/components/home/HomeShowLiuShi";
import Foot from "@/components/common/Foot";

export default {
  name: 'Home',
  components: {
    Foot,
    HomeShowLiuShi,
    HomeShowLiuRi,
    HomeShowLiuYue,
    HomeShowLiuNian,
    HomeShowDaYun,
    HomeShowShengChen,
    HomeShowRiZhu,
    HomeShow,
    HomeHead,
    Logout
  },
  data() {
    return {
      height: {
        height: '66px'
      },
      cancelable: false,
      logoutLoading: false,
      message: '',
    }
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    },
    headHeightChange(imgHeight) {
      this.height.height = imgHeight + 24 + 'px'
    },
  },
  activated() {
    this.height.height = this.$store.state.homeHeadLogoHeight + 24 + 'px'
  },
  // watch: {
  //   '$store.state.homeHeadLogoHeight': {
  //     handler: function (n, o) {
  //       this.height.height = n + 24 + 'px'
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
}
</script>
<style>
#home {
  background-color: #595757;
  min-height: 100vh;
}

@import "~@/assets/css/show-mobile.css";
</style>
