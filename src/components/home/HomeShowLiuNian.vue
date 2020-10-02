<template>
  <div>
    <!--          流年与大运分割-->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item>
        <template slot="title">
          <el-row justify="center" type="flex" class="row-bg">
            <el-col :span="18">
              <div class="grid-content bg-show">
                <el-divider>
                  <div style="position: relative">年
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </el-divider>
              </div>
            </el-col>
          </el-row>
        </template>
        <!--          流年-->
        <el-row justify="center" type="flex" id="liunian">
          <el-col :span="18">
            <!--    年份文字-->
            <el-row justify="center" type="flex">
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <span class="liunian-time">2015</span>
                </div>
              </el-col>
            </el-row>
            <el-row justify="center" type="flex">
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show-light">
                  <img src="@/assets/img/SVG/yi.svg" alt=""><br>
                  <img src="@/assets/img/SVG/yi.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show shadow-only-bottom">
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
            </el-row>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "HomeShowLiuNian",
  data() {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/show.css";

#liunian img {
  max-width: 36px;
  margin: 3px;
}

#liunian .liunian-time {
  display: block;
  color: #f4f4f5;
  font-size: 15px;
  padding-bottom: 9px;
}
</style>