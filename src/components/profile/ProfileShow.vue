<template>
  <div>
    <ProfileShowHead></ProfileShowHead>
    <div style="height: 76px"></div>
    <el-container style="border: 1px solid #eee">

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>

          <router-link v-for="(item, index) in menu" :key="index" :to="index">
            <el-menu-item v-if="index == isActive" class="leftLinkBgc">
              <i class="el-icon-arrow-right"></i>{{ item }}
            </el-menu-item>
            <el-menu-item v-else>
              <i class="el-icon-arrow-right"></i>{{ item }}
            </el-menu-item>
          </router-link>

        </el-menu>
      </el-aside>

      <router-view></router-view>

    </el-container>

    <HomeFoot></HomeFoot>
  </div>
</template>

<script>
import ProfileShowHead from "@/components/profile/ProfileShowHead";
import HomeFoot from "@/components/home/HomeFoot";

export default {
  name: "ProfileShow",
  components: {HomeFoot, ProfileShowHead},
  data() {
    return {
      menu: {
        'profileAdd': '添加命盘',
        'profileList': '命盘列表',
        'profileConfig': '个人资料'
      },
    }
  },
  computed: {
    isActive() {
      return this.$route.path.replace('/', '');
    }
  }
}
</script>

<style scoped>
.el-aside {
  color: #333;
}

.leftLinkBgc {
  background-color: #53a8ff !important;
  color: white
}

.leftLinkBgc i {
  color: white
}

.el-menu-item {
  font-size: 15px;
}
</style>