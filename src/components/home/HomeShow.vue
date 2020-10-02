<template>
  <div id="home-show">
    <el-row>
      <!--      left-->
      <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">
        <div class="grid-content bg-purple">
        </div>
      </el-col>

      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20">
        <div class="grid-content bg-purple-light">
          <slot name="ShengChen"></slot>
          <div class="col1"></div>
          <slot name="RiZhu"></slot>
          <div class="col1"></div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item>
              <template slot="title">
                <div style="position: relative">
                  <!--          命盘与大运分割-->
                  <el-row justify="center" type="flex" class="row-bg">
                    <el-col :span="18">
                      <div class="grid-content bg-show">
                        <el-divider content-position="center">
                          <div v-show="isShow" style="padding-top: 14px;">逢甲己年立春前10天换运</div>
                          <i class="el-icon-arrow-down"></i>
                        </el-divider>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </template>
              <slot name="DaYun"></slot>
              <div class="col3"></div>
              <slot name="LiuNian"></slot>
              <div class="col2"></div>
              <slot name="LiuYue"></slot>
              <div class="col2"></div>
              <slot name="LiuRi"></slot>
              <div class="col2"></div>
              <slot name="LiuShi"></slot>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>

      <!--      right-->
      <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeShow",
  data() {
    return {
      activeNames: ['1'],
      isShow: false,
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
#home-show {
  padding-bottom: 150px;
}

#home-show .bg-show, .bg-show-light {
  min-height: 9px;
  text-align: center;
}

#home-show {
  text-align: center;
}

#home-show >>> .el-collapse-item__header {
  line-height: 18px;
}

#home-show .el-icon-arrow-down {
  position: static;
  color: white;
}
</style>