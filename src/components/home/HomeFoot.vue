<template>
  <div class="home-foot">
    <slot></slot>
    &copy; 白小飞 命盘管理系统 版权所有
  </div>
</template>

<script>
export default {
  name: "HomeFoot"
}
</script>

<style scoped>
.home-foot {
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
</style>