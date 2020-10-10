<template>
  <div style="width: 100%">
    <el-container>
      <el-header style="height: auto !important; padding-bottom: 24px">
        <el-avatar :size="66" :src="imgPath"></el-avatar>
        <el-divider>{{ username }}</el-divider>
      </el-header>
      <el-main>
        <ChangePassword></ChangePassword>
        <ChangeAvatar @avatarEvent="avatarEvent"></ChangeAvatar>
        <ChangeLogo></ChangeLogo>
        <HideCopy></HideCopy>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ChangePassword from "@/components/profile/config/ChangePassword";
import ChangeAvatar from "@/components/profile/config/ChangeAvatar";
import ChangeLogo from "@/components/profile/config/ChangeLogo";
import HideCopy from "@/components/profile/config/HideCopy";

export default {
  name: "ProfileConfig",
  components: {HideCopy, ChangeLogo, ChangeAvatar, ChangePassword},
  data() {
    return {
      imgPath: '',
    }
  },
  computed: {
    username() {
      return localStorage.username
    },
  },
  methods: {
    avatarEvent(v) {
      this.imgPath = v
    },
    isAvatar() {
      this.imgPath = localStorage.APP_URL + localStorage.avatar
      let cut = this.imgPath.substring(this.imgPath.length - 3)
      if (cut !== 'peg' && cut !== 'jpg' && cut !== 'png') {
        this.imgPath = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      } else {
        this.imgPath = localStorage.APP_URL + localStorage.avatar
      }
    }
  },
  mounted() {
    this.isAvatar()
  }
}
</script>

<style scoped>
@import "~@/assets/css/profile-config.css";

.el-header {
  margin-top: 24px;
  text-align: center;
}

.el-avatar {
  margin-bottom: 24px;
}

.el-divider__text {
  background-color: #f4f4f5;
  color: #595757;
  font-size: 18px;
  padding: 6px 24px;
}

</style>