<template>
  <div id="home-head">
    <el-row>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="1">
        <div class="grid-content bg-purple">
          <slot name="left"></slot>
        </div>
      </el-col>
      <el-col :xs="16" :sm="16" :md="20" :lg="20" :xl="22" style="position: relative;">
        <div class="grid-content bg-purple-light imgWrap" ref="imgHeight">
          <img @load="imgLoad" :src="topLogoImgUrl" class="topLogo">
        </div>
      </el-col>
      <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="1">
        <div class="grid-content bg-purple">
          <i class="el-icon-setting" @click="toLink"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeHead",
  data() {
    return {
      topLogoImgUrl: '',
    }
  },
  methods: {
    toLink() {
      this.$router.push(this.$store.state.whichLink)
    },
    imgLoad() {
      let imgHeight = this.$refs.imgHeight.offsetHeight
      this.$emit('imgLoad', imgHeight)
    },
    isTopLogoImgUrl() {
      this.topLogoImgUrl = localStorage.APP_URL + '/' + localStorage.TopLogoPath
      let cut = this.topLogoImgUrl.substring(this.topLogoImgUrl.length - 3)
      if (cut !== 'png') {
        this.topLogoImgUrl = 'http://data.com/storage/toplogo.png'
      } else {
        this.topLogoImgUrl = localStorage.APP_URL + '/' + localStorage.TopLogoPath
      }
    }
  },
  watch: {
    deep: true,
    immediate: true,
    '$store.state.TopLogoPath': function () {
      this.topLogoImgUrl = this.$store.state.TopLogoPath
    },
  },
  mounted() {
    this.isTopLogoImgUrl()
  }
}
</script>

<style scoped>
#home-head {
  background-color: #595757;
  width: 100%;
  min-height: 66px;
  /*line-height: 66px;*/

  color: #f4f4f5;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 333;
  /*transform: translateZ(2001px);*/
}

.imgWrap {
  min-height: 66px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.topLogo {
  overflow: hidden;
}

#home-head img {
  max-width: 90%;
  margin: 0 auto;
  /*background-color: #ccc;*/
}

#home-head .grid-content {
  /*min-height: 66px;*/
}

#home-head i {
  font-size: 30px;
  cursor: pointer;
  margin-right: 18px;
  height: 66px;
  line-height: 66px;
  float: right;
  color: white;
}
</style>