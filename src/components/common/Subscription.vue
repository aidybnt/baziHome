<template>
<span v-if="Subscription" style="margin-left: 18px; font-size: 15px">
  <el-link type="danger"><i class="el-icon-info"></i> 订阅<slot></slot></el-link>
</span>
</template>

<script>
export default {
  name: "isSubscription",
  data() {
    return {
      Subscription: ''
    }
  },
  methods: {
    isSubscription() {
      if (localStorage.user_type === '1') {
        this.Subscription = false
      }
      if (localStorage.user_type === '0') {
        this.Subscription = true
      }
    }
  },
  mounted() {
    this.isSubscription()
  },
  activated() {
    this.isSubscription()
  }
}
</script>

<style scoped>

</style>