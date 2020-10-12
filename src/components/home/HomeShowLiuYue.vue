<template>
  <div>
    <!--          流月与流年分割-->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item>
        <template slot="title">
          <el-row justify="center" type="flex" class="row-bg">
            <el-col :span="18">
              <div class="grid-content bg-show">
                <el-divider>
                  <div style="position: relative">月
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </el-divider>
              </div>
            </el-col>
          </el-row>
        </template>
          <div class="col1 col1-mobile"></div>
        <el-row justify="center" type="flex" id="liuyue">

          <el-col :span="18">
            <el-row justify="center" type="flex">
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light shadow-only-bottom">
                  <img src="@/assets/img/SVG/yi.svg" alt=""><br>
                  <img src="@/assets/img/SVG/yi.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/bing.svg" alt=""><br>
                  <img src="@/assets/img/SVG/bing.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                  <img src="@/assets/img/SVG/ding.svg" alt=""><br>
                  <img src="@/assets/img/SVG/ding.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/wu.svg" alt=""><br>
                  <img src="@/assets/img/SVG/wu.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                  <img src="@/assets/img/SVG/ji.svg" alt=""><br>
                  <img src="@/assets/img/SVG/ji.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/geng.svg" alt=""><br>
                  <img src="@/assets/img/SVG/geng.svg" alt="">
                </div>
              </el-col>
            </el-row>
          </el-col>

        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "HomeShowLiuYue",
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/show.css";

#liuyue img {
  max-width: 30px;
  margin: 3px;
}
</style>