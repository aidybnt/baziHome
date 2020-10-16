<template>
  <div>
    <div v-loading.fullscreen.lock="logoutLoading" element-loading-text="正在退出登陆，请稍后...">
      <i
          @click="logout"
          style="margin-left: 18px;
        cursor: pointer;
        height: 66px;
        line-height: 66px;
        float: left;font-size: 30px;"

          class="el-icon-switch-button">
      </i>
    </div>
  </div>
</template>

<script>
import {post} from "@/utils/request";

export default {
  name: "Logout",
  data() {
    return {
      logoutLoading: false
    }
  },
  methods: {
    logout() {
      this.logoutLoading = true
      post('logout', {}, {headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.access_token}})
          .then(response => {
            this.logoutLoading = false
            this.$store.commit("whichLinkMutations", 'profileAdd')
            localStorage.clear()
            this.$router.push({name: 'Index'})
          })
          .catch(error => {
            this.logoutLoading = false
          })
    }
  }
}
</script>

<style scoped>

</style>