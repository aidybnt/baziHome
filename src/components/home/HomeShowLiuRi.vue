<template>
  <div>
    <!--          流日与流月分割-->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item>
        <template slot="title">
          <el-row justify="center" type="flex" class="row-bg">
            <el-col :span="18">
              <div class="grid-content bg-show">
                <el-divider>
                  <div style="position: relative">日
                    <i class="el-icon-arrow-down"></i>
                  </div>
                </el-divider>
              </div>
            </el-col>
          </el-row>
        </template>
        <div class="col1 col1-mobile"></div>
        <!--          流日-->
        <el-row justify="center" type="flex" id="liuri">
          <el-col :span="16">
            <el-row justify="center" type="flex">
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-show">
                  <img src="@/assets/img/SVG/jia.svg" alt=""><br>
                  <img src="@/assets/img/SVG/jia.svg" alt="">
                </div>
              </el-col>
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
                <div class="grid-content bg-show-light">
                  <img src="@/assets/img/SVG/yi.svg" alt=""><br>
                  <img src="@/assets/img/SVG/yi.svg" alt="">
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
  name: "HomeShowLiuRi",
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

#liuri img {
  max-width: 30px;
  margin: 3px;
}
</style>