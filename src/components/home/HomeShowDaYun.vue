<template>
  <div>
    <!--          起运时间-->
    <el-row justify="center" type="flex" id="qiyun-time">
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
          <span class="qiyun-time">5</span>
        </div>
      </el-col>
    </el-row>
    <!--          大运-->
    <el-row justify="center" type="flex" id="dayun">
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
        <div class="grid-content bg-show hand">
          <img src="@/assets/img/SVG/geng.svg" alt=""><br>
          <img src="@/assets/img/SVG/geng.svg" alt="">
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-show shadow-only-bottom hand">
          <img src="@/assets/img/SVG/geng.svg" alt=""><br>
          <img src="@/assets/img/SVG/geng.svg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeShowDaYun"
}
</script>

<style scoped>
#dayun {
  margin: 18px 0;
}

#dayun img {
  max-width: 45px;
  margin: 3px 9px 3px 9px;
}

.qiyun-time {
  color: #f4f4f5;
  font-size: 15px;
  height: 15px;
}
</style>