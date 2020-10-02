<template>
  <div class="foot">
    <slot></slot>
    &copy; 白小飞 版权所有
  </div>
</template>

<script>
export default {
  name: "Foot"
}
</script>

<style scoped>
.foot {
  width: 100%;
  text-align: center;
  color: #c1a7a7;
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 30px;
}
</style>