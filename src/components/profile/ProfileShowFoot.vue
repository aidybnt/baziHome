<template>
  <div>
    <div style="height: 66px"></div>
    <div class="mobile-profile-foot">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
            v-for="(item, index) in menu"
            :key="index"
            :label="item"
            :name="index">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProfileShowFoot",
  data() {
    return {
      activeName: '',
      menu: {
        'profileAdd': '添加命盘',
        'profileList': '命盘列表',
        'profileConfig': '个人资料',
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      this.$store.commit("whichLinkMutations", tab.name)
      this.$router.push(tab.name)
    },
  },
  mounted() {
    this.activeName = this.$store.state.whichLink;
  },
}
</script>

<style scoped>
.mobile-profile-foot {
  background-color: #595757;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  color: #c1a7a7;
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 333;
  /*transform: translateZ(2001px);*/
}

.mobile-profile-foot {
  display: none;
  padding: 0;
}

>>> .el-tabs__header {
  width: 100%;
  margin-bottom: 3px;
}

>>> .el-tabs__nav {
  width: 100%;
  text-align: center;
  display: flex;
}

>>> .el-tabs__item {
  padding: 0;
  height: 60px;
  line-height: 60px;
  color: white;
  font-size: 15px;
  flex: 1;

}

>>> .el-tabs__item:hover {
  color: #409EFF;
  cursor: pointer;
}
</style>