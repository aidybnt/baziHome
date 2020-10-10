<template>
  <div v-if="foot" class="foot">
    <slot></slot>
    &copy; 白小飞 命盘管理系统 版权所有
  </div>
</template>

<script>
export default {
  name: "Foot",
  data() {
    return {
      foot: '',
    }
  },
  methods: {
    isFoot() {
      if (localStorage.user_type === '1') {
        this.foot = false
      }
      if (localStorage.user_type === '0') {
        this.foot = true
      }
    }
  },
  mounted() {
    this.isFoot()
  },
  activated() {
    this.isFoot()
  },
}
</script>

<style scoped>
.foot {
  /*background-color: #595757;*/
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
}
</style>