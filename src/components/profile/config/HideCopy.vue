<template>
  <div v-if="hideCopy">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span slot="reference">隐藏底部版权</span>
        <Subscription></Subscription>
      </div>
      <el-link type="danger">{{ isShowFoot }}</el-link>
    </el-card>
  </div>
</template>

<script>
import Subscription from "@/components/common/Subscription";

export default {
  name: "HideCopy",
  components: {Subscription},
  data() {
    return {
      isShowFoot: '默认显示',
      hideCopy: ''
    }
  },
  methods: {
    isHideCopy() {
      if (localStorage.user_type === '1') {
        this.hideCopy = false
      }
      if (localStorage.user_type === '0') {
        this.hideCopy = true
      }
    }
  },
  mounted() {
    this.isHideCopy()
  },
  activated() {
    this.isHideCopy()
  }
}
</script>

<style scoped>

</style>