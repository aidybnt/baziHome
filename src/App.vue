<template>
  <div id="app">
    <div>
    </div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {}
}
</script>
<style lang="scss">

/* element-ui 下拉框在ios上 点击两次才能选中 */
.el-scrollbar {
  > .el-scrollbar__bar {
    opacity: 1 !important;
  }
}

@import "assets/css/main.css";
</style>
