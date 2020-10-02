<template>
  <div id="home-head">
    <el-row>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="1">
        <div class="grid-content bg-purple">
          <slot name="left"></slot>
        </div>
      </el-col>
      <el-col :xs="16" :sm="16" :md="20" :lg="20" :xl="22" style="position: relative;">
        <div class="grid-content bg-purple-light">
          <img src="@/assets/img/72ppi/homelogo.png" alt="">
        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="1">
        <div class="grid-content bg-purple">
          <!--          <i @click="rightSideClick" class="el-icon-s-fold"></i>-->
          <router-link to="profileAdd">
            <i class="el-icon-setting"></i>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeHead",
  methods: {
    rightSideClick() {
      this.$store.commit('changerShowRightSide')
    }
  }
}
</script>

<style scoped>
#home-head {
  background-color: #595757;
  width: 100%;
  min-height: 66px;
  line-height: 66px;
  font-size: 30px;
  color: #f4f4f5;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 333;
  /*transform: translateZ(2001px);*/
}

#home-head img {
  max-width: 90%;
  margin: 15px 0 0 0;
  /*background-color: #ccc;*/
}

#home-head .grid-content {
  min-height: 66px;
}

#home-head i {
  cursor: pointer;
  margin-right: 18px;
  height: 66px;
  line-height: 66px;
  float: right;
  color: white;
}
</style>