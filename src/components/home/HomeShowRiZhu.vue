<template>
  <div>
    <!--          命盘-->
    <el-row justify="center" type="flex">
      <!--            时-->
      <el-col :span="2">
        <div class="grid-content bg-show">
          <img src="@/assets/img/SVG/ren.svg" alt="">
          <img src="@/assets/img/SVG/ren.svg" alt="">
        </div>
      </el-col>
      <!--            日-->
      <el-col :span="2">
        <div class="grid-content bg-show-light">
          <img src="@/assets/img/SVG/xin.svg" alt="">
          <img src="@/assets/img/SVG/xin.svg" alt="">
        </div>
      </el-col>
      <!--            月-->
      <el-col :span="2">
        <div class="grid-content bg-show">
          <img src="@/assets/img/SVG/geng.svg" alt="">
          <img src="@/assets/img/SVG/geng.svg" alt="">
        </div>
      </el-col>
      <!--            年-->
      <el-col :span="2">
        <div class="grid-content bg-show-light">
          <img src="@/assets/img/SVG/ji.svg" alt="">
          <img src="@/assets/img/SVG/ji.svg" alt="">
        </div>
      </el-col>
      <!--            大运-->
      <el-col :span="2" style="border-left: 1px solid #c2a36a">
        <div class="grid-content bg-show">
          <img src="@/assets/img/SVG/wu.svg" alt="">
          <img src="@/assets/img/SVG/wu.svg" alt="">
        </div>
      </el-col>
      <!--            流年-->
      <el-col :span="2">
        <div class="grid-content bg-show-light">
          <img src="@/assets/img/SVG/ding.svg" alt="">
          <img src="@/assets/img/SVG/ding.svg" alt="">
        </div>
      </el-col>
      <!--            流月-->
      <el-col :span="2">
        <div class="grid-content bg-show">
          <img src="@/assets/img/SVG/bing.svg" alt="">
          <img src="@/assets/img/SVG/bing.svg" alt="">
        </div>
      </el-col>
      <!--            流日-->
      <el-col :span="2">
        <div class="grid-content bg-show-light">
          <img src="@/assets/img/SVG/yi.svg" alt="">
          <img src="@/assets/img/SVG/yi.svg" alt="">
        </div>
      </el-col>
      <!--            时辰-->
      <el-col :span="2">
        <div class="grid-content bg-show">
          <img src="@/assets/img/SVG/jia.svg" alt="">
          <img src="@/assets/img/SVG/jia.svg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeShowRiZhu"
}
</script>

<style scoped>

</style>