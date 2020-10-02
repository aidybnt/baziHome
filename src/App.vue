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
@import "assets/css/main.css";

#app {
}
</style>
