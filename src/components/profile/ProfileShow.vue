<template>
  <div>
    <ProfileShowHead @imgLoad="headHeightChange"></ProfileShowHead>
    <div :style="height"></div>
    <el-container style="border: 1px solid #eee">

      <el-aside class="profile-aside">
        <el-menu style="position:fixed;">
          <router-link v-for="(item, index) in menu" :key="index" :to="index">
            <el-menu-item @click="setLink(index)" v-if="index == isActive" :class="leftLinkBgc">
              <i class="el-icon-arrow-right"></i>{{ item }}
            </el-menu-item>
            <el-menu-item @click="setLink(index)" v-else>
              <i class="el-icon-arrow-right"></i>{{ item }}
            </el-menu-item>
          </router-link>
          <div v-if="this.$store.state.editLink" class="editHover">
            <i class="el-icon-setting"></i>{{ profileEdit }}
          </div>
        </el-menu>
      </el-aside>

      <router-view ref="profileList"></router-view>

    </el-container>

    <Foot style="background-color: #595757;"></Foot>
    <ProfileShowFoot></ProfileShowFoot>

  </div>
</template>

<script>
import ProfileShowHead from "@/components/profile/ProfileShowHead";
import ProfileShowFoot from "@/components/profile/ProfileShowFoot";
import Foot from "@/components/common/Foot";
import {post} from "@/utils/request";

export default {
  name: "ProfileShow",
  components: {Foot, ProfileShowFoot, ProfileShowHead},
  data() {
    return {
      menu: {
        'profileAdd': '添加命盘',
        'profileList': '命盘列表',
        'profileConfig': '个人资料',
      },
      'profileEdit': '编辑命盘',
      height: {
        height: '76px'
      },
      leftLinkBgc: 'leftLinkBgc',
    }
  },
  created() {
    this.$store.commit('whichLinkMutations', this.$route.path.replace('/', ''))
  },
  computed: {
    isActive() {
      return this.$route.path.replace('/', '');
    },
  },
  methods: {
    headHeightChange(imgHeight) {
      this.height.height = imgHeight + 'px'
    },
    setLink(index) {
      this.$store.commit("whichLinkMutations", index)
    }
  },
  watch: {
    deep: true,
    immediate: true,
    '$store.state.editLink': function () {
      if (this.$store.state.editLink) {
        this.leftLinkBgc = ''
      }
      if (!this.$store.state.editLink) {
        this.leftLinkBgc = 'leftLinkBgc'
      }
    },
  },
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

.profile-aside {
  width: 150px !important;
  background-color: rgb(238, 241, 246) !important;
}

.el-menu-item {
  padding-right: 40px;
}

.editHover {
  color: white;
  background-color: #f60;
  padding: 18px 0 18px 21px;
  font-size: 15px;
  cursor: pointer;
}

.editHover i {
  margin-right: 12px;
}

@import "~@/assets/css/profile.css";
</style>