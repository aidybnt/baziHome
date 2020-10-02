<template>
  <div>
    <!--          流时与流日分割-->
    <el-collapse v-model="activeNames" @change="handleChange" id="liushi-title">
      <el-collapse-item>
        <template slot="title">
          <el-row justify="center" type="flex" class="row-bg">
            <el-col :span="18">
              <div class="grid-content bg-show">
                <el-divider>
                  <div style="position: relative">时
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </el-divider>
              </div>
            </el-col>
          </el-row>
        </template>
        <div class="col1 col1-mobile"></div>
        <!--          流时-->
        <el-row justify="center" type="flex" id="liushi">
          <el-col :span="14">
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
  name: "HomeShowLiuShi",
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

#liushi img {
  max-width: 24px;
  margin: 3px;
}

</style>