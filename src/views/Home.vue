<template>
  <div id="home">
    <HomeHead @imgLoad="headHeightChange">
      <template v-slot:left>
        <logout></logout>
      </template>
    </HomeHead>
    <div :style="height"></div>

    <!--
        <HomeShow>
          <template v-slot:ShengChen>
            <HomeShowShengChen></HomeShowShengChen>
          </template>
          <template v-slot:RiZhu>
            <HomeShowRiZhu></HomeShowRiZhu>
          </template>
          <template v-slot:DaYun>
            <HomeShowDaYun></HomeShowDaYun>
          </template>
          <template v-slot:LiuNian>
            <HomeShowLiuNian></HomeShowLiuNian>
          </template>
          <template v-slot:LiuYue>
            <HomeShowLiuYue></HomeShowLiuYue>
          </template>
          <template v-slot:LiuRi>
            <HomeShowLiuRi></HomeShowLiuRi>
          </template>
          <template v-slot:LiuShi>
            <HomeShowLiuShi></HomeShowLiuShi>
          </template>
        </HomeShow>
    -->

    <div id="home-show">
      <el-row>
        <!--      left-->
        <el-col :xs="0" :sm="1" :md="2" :lg="2" :xl="2">
          <div class="grid-content bg-purple">
          </div>
        </el-col>

        <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="20">
          <div class="grid-content bg-purple-light">
            <!--          生辰-->
            <el-row justify="center" type="flex" class="row-bg">
              <el-col :span="18">
                <div class="grid-content bg-show">
                  <el-divider>2019年11月11日辰时</el-divider>
                </div>
              </el-col>
            </el-row>
            <div class="col1"></div>
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
            <div class="col1"></div>
            <el-collapse v-model="activeDaYun" @change="openDayun">
              <el-collapse-item>
                <!--          命盘与大运分割，折叠按钮-->
                <template slot="title">
                  <div style="position: relative">
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
                <!--          大运起运时间-->
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
                <div class="col3"></div>
                <!--          流年折叠-->
                <el-collapse v-model="activeLiuNian" @change="openLiuNian">
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
                      <el-col :span="20">
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
                <div class="col2"></div>
                <!--          流月折叠-->
                <el-collapse v-model="activeLiuYue" @change="openLiuYue">
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
                <div class="col2"></div>
                <!--          流日折叠-->
                <el-collapse v-model="activeLiuRi" @change="openLiuRi">
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
                <div class="col2"></div>
                <!--          流时折叠-->
                <el-collapse v-model="activeLiuShi" @change="openLiuShi" id="liushi-title">
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
                      <el-col :span="18">
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

    <Foot style="background-color: #595757;"></Foot>

  </div>
</template>

<script>
import Logout from "@/components/common/Logout";
import HomeHead from "@/components/home/HomeHead";
import Foot from "@/components/common/Foot";

export default {
  name: 'Home',
  components: {
    Foot,
    HomeHead,
    Logout
  },
  data() {
    return {
      activeDaYun: ['1'],
      activeLiuNian: ['1'],
      activeLiuYue: ['1'],
      activeLiuRi: ['1'],
      activeLiuShi: ['1'],
      isShow: false,
      height: {
        height: '66px'
      },
      cancelable: false,
      logoutLoading: false,
      message: '',
    }
  },
  methods: {
    //打开大运
    openDayun(val) {
      this.isShow = !this.isShow
    },
    //打开流年
    openLiuNian(val) {
    },
    //打开流月
    openLiuYue(val) {
    },
    //打开流日
    openLiuRi(val) {
    },
    //打开流时
    openLiuShi(val) {
    },
    //设置头部Img的高度
    headHeightChange(imgHeight) {
      this.height.height = imgHeight + 24 + 'px'
    },
  },
  activated() {
    this.height.height = this.$store.state.homeHeadLogoHeight + 24 + 'px'
  },
  // watch: {
  //   '$store.state.homeHeadLogoHeight': {
  //     handler: function (n, o) {
  //       this.height.height = n + 24 + 'px'
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
}
</script>
<style>
#home {
  background-color: #595757;
  min-height: 100vh;
}

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

#liuyue img {
  max-width: 30px;
  margin: 3px;
}

#liushi img {
  max-width: 24px;
  margin: 3px;
}

@import "~@/assets/css/show-mobile.css";
</style>
