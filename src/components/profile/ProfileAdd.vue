<template>
  <div id="profileAdd">
    <el-container>

      <el-container>

        <el-main class="form-main">

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px">

            <div class="col4"></div>

            <!--            排盘规则-->
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item name="1">
                <template slot="title">
                  <el-divider>排盘规则</el-divider>
                </template>
                <el-card class="box-card">
                  <div class="text item">
                    <h3>所选日期为公历</h3>
                  </div>
                  <div class="text item">
                    <h3>
                      立春换年
                      交节换月
                      子正换日
                      正点换时
                    </h3>
                    <h3 style="color: #F56C6C">
                      例如：立春时刻为14:30:02，则可能导致一天，中上午属于上一年，下午属于下一年<br>
                      其他以此类推
                    </h3>
                    <h3 style="color: #F56C6C">
                      尤其跨节点的时间，如需校对真太阳时，请自行查询
                    </h3>
                    <h3>
                      分早晚子时，23:00到23:59为晚子时
                    </h3>
                    <h3>
                      <el-link type="danger">具体如何确定命盘，请结合实际情况灵活调整</el-link>
                    </h3>

                  </div>
                </el-card>
              </el-collapse-item>
            </el-collapse>

            <!--            移动端命盘展示-->
            <div class="view-mingpan-mobile">
              <div>
                <img :src="timeGan" alt="">
                <img :src="dayGan" alt="">
                <img :src="monthGan" alt="">
                <img :src="yearGan" alt="">
                <br>
                <img :src="timeZhi" alt="">
                <img :src="dayZhi" alt="">
                <img :src="monthZhi" alt="">
                <img :src="yearZhi" alt="">
              </div>
            </div>

            <div id="profileAdd-mobile">

              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="男" border></el-radio>
                  <el-radio label="女" border></el-radio>
                </el-radio-group>
              </el-form-item>

              <el-form-item label="年" prop="year">
                <el-select
                    v-model="ruleForm.year"
                    placeholder="请选择年"
                    @change="changeYear()"
                    popper-class="year">
                  <el-option
                      v-for="item in years()"
                      :key="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="月" prop="month">
                <el-select
                    v-model="ruleForm.month"
                    placeholder="请选择月"
                    @change="changeMonth()"
                    popper-class="month">
                  <el-option
                      v-for="item in 12"
                      :key="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="日" prop="day">
                <el-select
                    v-model="ruleForm.day"
                    placeholder="请选择日"
                    @change="changeDay()"
                    popper-class="day">
                  <el-option
                      v-for="item in 31"
                      :key="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="时" prop="hour">
                <el-select
                    v-model="ruleForm.hour"
                    placeholder="请选择日"
                    @change="changeHour()"
                    popper-class="day">
                  <el-option
                      v-for="item in hours()"
                      :key="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="分" prop="minute">
                <el-select
                    v-model="ruleForm.minute"
                    placeholder="请选择日"
                    @change="changeMinute()"
                    popper-class="day">
                  <el-option
                      v-for="item in minutes()"
                      :key="item"
                      :value="item"
                      style="width:15px;float: left;">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-divider class="hr"></el-divider>

              <el-form-item label="命主姓名" prop="name">
                <el-input
                    maxlength="24"
                    show-word-limit
                    v-model="ruleForm.name"
                    style="width: 217px">
                </el-input>
              </el-form-item>

              <el-form-item label="称呼" prop="call">
                <el-input
                    maxlength="24"
                    show-word-limit
                    v-model="ruleForm.call"
                    style="width: 217px"></el-input>
              </el-form-item>

              <el-form-item label="出生地" prop="born">
                <el-input
                    maxlength="60"
                    show-word-limit
                    v-model="ruleForm.born"
                    style="width: 217px"></el-input>
              </el-form-item>

              <el-form-item label="常住区域" prop="area">
                <el-select v-model="ruleForm.area"
                           placeholder="请选择常住区域"
                           style="width: 217px"
                           popper-class="area">
                  <el-option label="大陆" value="大陆"></el-option>
                  <el-option label="台湾" value="台湾"></el-option>
                  <el-option label="海外" value="海外"></el-option>
                </el-select>
              </el-form-item>

              <el-form label-position="top">
                <el-form-item label="本命特征" style="padding: 0 21px">
                  <el-checkbox-group v-model="ruleForm.type">
                    <div style="margin-bottom: -1px;">
                      <el-checkbox-button label="五行流通" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命纯阳" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命纯阴" name="type"></el-checkbox-button>
                      <el-checkbox-button label="日主受克" name="type"></el-checkbox-button>
                      <el-checkbox-button label="地支合空" name="type"></el-checkbox-button>
                    </div>
                    <div style="margin-bottom: -1px">
                      <el-checkbox-button label="官克比劫" name="type"></el-checkbox-button>
                      <el-checkbox-button label="比劫克财" name="type"></el-checkbox-button>
                      <el-checkbox-button label="财星克印" name="type"></el-checkbox-button>
                      <el-checkbox-button label="印克食伤" name="type"></el-checkbox-button>
                      <el-checkbox-button label="食伤克官" name="type"></el-checkbox-button>
                    </div>
                    <div style="margin-bottom: -1px">
                      <el-checkbox-button label="官杀被合" name="type"></el-checkbox-button>
                      <el-checkbox-button label="比劫被合" name="type"></el-checkbox-button>
                      <el-checkbox-button label="财星被合" name="type"></el-checkbox-button>
                      <el-checkbox-button label="印星被合" name="type"></el-checkbox-button>
                      <el-checkbox-button label="食伤被合" name="type"></el-checkbox-button>
                    </div>
                    <div style="margin-bottom: -1px">
                      <el-checkbox-button label="官杀过旺" name="type"></el-checkbox-button>
                      <el-checkbox-button label="比劫成林" name="type"></el-checkbox-button>
                      <el-checkbox-button label="财星满盘" name="type"></el-checkbox-button>
                      <el-checkbox-button label="印星过旺" name="type"></el-checkbox-button>
                      <el-checkbox-button label="食伤过旺" name="type"></el-checkbox-button>
                    </div>
                    <div>
                      <el-checkbox-button label="本命无官" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命无印" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命无比" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命无食" name="type"></el-checkbox-button>
                      <el-checkbox-button label="本命无财" name="type"></el-checkbox-button>
                    </div>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>


              <el-form-item label="备注" prop="desc">
                <el-input type="textarea"
                          v-model="ruleForm.desc"
                          rows="3"
                          style="width: 217px">
                </el-input>
              </el-form-item>

            </div>

            <!--=========================================普通显示-->
            <div id="profileAdd-show">
              <div style="width: 100%;height:100%;overflow:hidden;">

                <el-row type="flex" class="row-bg">
                  <!--                输入出生时间-->
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                          <el-radio label="男" border></el-radio>
                          <el-radio label="女" border></el-radio>
                        </el-radio-group>
                      </el-form-item>

                      <el-form-item label="年" prop="year">
                        <el-select
                            v-model="ruleForm.year"
                            placeholder="请选择年"
                            @change="changeYear()"
                            popper-class="year">
                          <el-option
                              v-for="item in years()"
                              :key="item"
                              :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="月" prop="month">
                        <el-select
                            v-model="ruleForm.month"
                            placeholder="请选择月"
                            @change="changeMonth()"
                            popper-class="month">
                          <el-option
                              v-for="item in 12"
                              :key="item"
                              :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="日" prop="day">
                        <el-select
                            v-model="ruleForm.day"
                            placeholder="请选择日"
                            @change="changeDay()"
                            popper-class="day">
                          <el-option
                              v-for="item in 31"
                              :key="item"
                              :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="时" prop="hour">
                        <el-select
                            v-model="ruleForm.hour"
                            placeholder="请选择日"
                            @change="changeHour()"
                            popper-class="day">
                          <el-option
                              v-for="item in hours()"
                              :key="item"
                              :value="item">
                          </el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="分" prop="minute">
                        <el-select
                            v-model="ruleForm.minute"
                            placeholder="请选择日"
                            @change="changeMinute()"
                            popper-class="day">
                          <el-option
                              v-for="item in minutes()"
                              :key="item"
                              :value="item"
                              style="width:15px;float: left;">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </el-col>

                  <!--              命盘展示-->
                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <div class="view-mingpan" ref="viewMingpan">
                        <div>
                          <img :src="timeGan" alt="">
                          <img :src="dayGan" alt="">
                          <img :src="monthGan" alt="">
                          <img :src="yearGan" alt="">
                          <br>
                          <img :src="timeZhi" alt="">
                          <img :src="dayZhi" alt="">
                          <img :src="monthZhi" alt="">
                          <img :src="yearZhi" alt="">
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>

              </div>
              <el-divider class="hr"></el-divider>
              <el-row>
                <el-col :span="12">
                  <el-form-item label="命主姓名" prop="name">
                    <el-input
                        maxlength="24"
                        show-word-limit
                        v-model="ruleForm.name" style="width: 75%"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="称呼" prop="call">
                    <el-input
                        maxlength="24"
                        show-word-limit
                        v-model="ruleForm.call" style="width: 75%"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="出生地" prop="born">
                    <el-input
                        maxlength="60"
                        show-word-limit
                        v-model="ruleForm.born" style="width: 75%"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="常住区域" prop="area">
                    <el-select v-model="ruleForm.area" placeholder="请选择常住区域" style="width: 75%;" popper-class="area">
                      <el-option label="大陆" value="大陆"></el-option>
                      <el-option label="台湾" value="台湾"></el-option>
                      <el-option label="海外" value="海外"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-form-item label="本命特征">
                <el-checkbox-group v-model="ruleForm.type">
                  <div style="margin-bottom: -1px;">
                    <el-checkbox-button label="五行流通" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命纯阳" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命纯阴" name="type"></el-checkbox-button>
                    <el-checkbox-button label="日主受克" name="type"></el-checkbox-button>
                    <el-checkbox-button label="地支合空" name="type"></el-checkbox-button>
                  </div>
                  <div style="margin-bottom: -1px">
                    <el-checkbox-button label="官克比劫" name="type"></el-checkbox-button>
                    <el-checkbox-button label="比劫克财" name="type"></el-checkbox-button>
                    <el-checkbox-button label="财星克印" name="type"></el-checkbox-button>
                    <el-checkbox-button label="印克食伤" name="type"></el-checkbox-button>
                    <el-checkbox-button label="食伤克官" name="type"></el-checkbox-button>
                  </div>
                  <div style="margin-bottom: -1px">
                    <el-checkbox-button label="官杀被合" name="type"></el-checkbox-button>
                    <el-checkbox-button label="比劫被合" name="type"></el-checkbox-button>
                    <el-checkbox-button label="财星被合" name="type"></el-checkbox-button>
                    <el-checkbox-button label="印星被合" name="type"></el-checkbox-button>
                    <el-checkbox-button label="食伤被合" name="type"></el-checkbox-button>
                  </div>
                  <div style="margin-bottom: -1px">
                    <el-checkbox-button label="官杀过旺" name="type"></el-checkbox-button>
                    <el-checkbox-button label="比劫成林" name="type"></el-checkbox-button>
                    <el-checkbox-button label="财星满盘" name="type"></el-checkbox-button>
                    <el-checkbox-button label="印星过旺" name="type"></el-checkbox-button>
                    <el-checkbox-button label="食伤过旺" name="type"></el-checkbox-button>
                  </div>
                  <div>
                    <el-checkbox-button label="本命无官" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命无印" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命无比" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命无食" name="type"></el-checkbox-button>
                    <el-checkbox-button label="本命无财" name="type"></el-checkbox-button>
                  </div>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item label="备注" prop="desc">
                <el-input type="textarea"
                          v-model="ruleForm.desc"
                          rows="3"
                          style="width: 90%;">
                </el-input>
              </el-form-item>
            </div>
            <el-form-item class="profile-button">
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <!--              <el-button @click="resetForm('ruleForm')">重置</el-button>-->
            </el-form-item>

          </el-form>

        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "ProfileAdd",
  data() {
    return {
      activeNames: [],  // 折叠菜单默认显示
      today: '',
      //八个字取值
      years: '',
      minutes: '',
      hours: '',
      solar: '',
      lunar: '',
      yearGan: '',
      yearZhi: '',
      monthGan: '',
      monthZhi: '',
      dayGan: '',
      dayZhi: '',
      timeGan: '',
      timeZhi: '',
      ruleForm: {
        sex: '男',
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        name: '',
        call: '',
        born: '',
        area: '',
        type: [],
        desc: '',
      },
      rules: {
        year: [
          {required: true, message: '请填写年', trigger: 'change'}
        ],
        month: [
          {required: true, message: '请填写月', trigger: 'change'}
        ],
        day: [
          {required: true, message: '请填写日', trigger: 'change'}
        ],
        hour: [
          {required: true, message: '请填写时', trigger: 'change'}
        ],
        minute: [
          {required: true, message: '请填写分', trigger: 'change'}
        ],
        sex: [
          {required: true, message: '请选择性别', trigger: 'change'}
        ],
        name: [
          {min: 1, max: 24, message: '长度在 1 到 24 个字符', trigger: 'blur'}
        ],
        call: [
          {min: 1, max: 24, message: '长度在 1 到 24 个字符', trigger: 'blur'}
        ],
        born: [
          {min: 1, max: 60, message: '长度在 1 到 60 个字符', trigger: 'blur'}
        ],
      },
    };
  },
  created() {
    //小时
    this.hours = function () {
      let bar = Array.from(new Array(23 + 1).keys()).slice(0)
      return bar
    }
    //分钟
    this.minutes = function () {
      let bar = Array.from(new Array(59 + 1).keys()).slice(10)
      bar.unshift('00', '01', ' 02', '03', '04', '05', '06', '07', '08', '09')
      return bar
    }
    //年
    this.years = function () {
      return Array.from(new Array(2099 + 1).keys()).slice(1901)
    }
    //默认时间
    this.today = this.Solar.fromDate(new Date())
    //页面渲染 默认
    this.ruleForm.year = this.today.getYear()
    this.ruleForm.month = this.today.getMonth()
    this.ruleForm.day = this.today.getDay()
    this.ruleForm.hour = this.today.getHour()
    this.ruleForm.minute = this.today.getMinute()
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log(1);
          // console.log(this.ruleForm.type);
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //开始计算八字
    computeBaZi() {
      this.solar = this.Solar.fromYmdHms(
          this.ruleForm.year,
          this.ruleForm.month,
          this.ruleForm.day,
          this.ruleForm.hour,
          this.ruleForm.minute,
          0)
      this.lunar = this.solar.getLunar()
      return this.lunar
    },
    //匹配图片
    getImg(e) {
      if (e === '甲') {
        return require('@/assets/img/SVG/jia.svg')
      }
      if (e === '乙') {
        return require('@/assets/img/SVG/yi.svg')
      }
      if (e === '丙') {
        return require('@/assets/img/SVG/bing.svg')
      }
      if (e === '丁') {
        return require('@/assets/img/SVG/ding.svg')
      }
      if (e === '戊') {
        return require('@/assets/img/SVG/wu.svg')
      }
      if (e === '己') {
        return require('@/assets/img/SVG/ji.svg')
      }
      if (e === '庚') {
        return require('@/assets/img/SVG/geng.svg')
      }
      if (e === '辛') {
        return require('@/assets/img/SVG/xin.svg')
      }
      if (e === '壬') {
        return require('@/assets/img/SVG/ren.svg')
      }
      if (e === '癸') {
        return require('@/assets/img/SVG/gui.svg')
      }
      if (e === '子') {
        return require('@/assets/img/SVG/zi.svg')
      }
      if (e === '丑') {
        return require('@/assets/img/SVG/chou.svg')
      }
      if (e === '寅') {
        return require('@/assets/img/SVG/yin.svg')
      }
      if (e === '卯') {
        return require('@/assets/img/SVG/mao.svg')
      }
      if (e === '辰') {
        return require('@/assets/img/SVG/chen.svg')
      }
      if (e === '巳') {
        return require('@/assets/img/SVG/si.svg')
      }
      if (e === '午') {
        return require('@/assets/img/SVG/wu_.svg')
      }
      if (e === '未') {
        return require('@/assets/img/SVG/wei.svg')
      }
      if (e === '申') {
        return require('@/assets/img/SVG/shen.svg')
      }
      if (e === '酉') {
        return require('@/assets/img/SVG/you.svg')
      }
      if (e === '戌') {
        return require('@/assets/img/SVG/xu.svg')
      }
      if (e === '亥') {
        return require('@/assets/img/SVG/hai.svg')
      }
    },
    //改变年
    changeYear() {
      this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
      this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
      this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
      this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
      this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
      this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
      this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
      this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    },
    //改变月
    changeMonth() {
      this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
      this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
      this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
      this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
      this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
      this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
      this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
      this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    },
    //改变日
    changeDay() {
      this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
      this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
      this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
      this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
      this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
      this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
      this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
      this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    },
    //改变时
    changeHour() {
      this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
      this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
      this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
      this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
      this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
      this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
      this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
      this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    },
    //改变分
    changeMinute() {
      this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
      this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
      this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
      this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
      this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
      this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
      this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
      this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    },
  },
  computed: {
    //计算男女
    gender: function () {
      if (this.ruleForm.sex === '男') {
        return 1
      } else {
        return 0
      }
    },
  },
  mounted() {
    //初始化
    this.yearGan = this.getImg(this.computeBaZi().getYearGanByLiChun())
    this.yearZhi = this.getImg(this.computeBaZi().getYearZhiByLiChun())
    this.monthGan = this.getImg(this.computeBaZi().getMonthGanExact())
    this.monthZhi = this.getImg(this.computeBaZi().getMonthZhiExact())
    this.dayGan = this.getImg(this.computeBaZi().getDayGanExact())
    this.dayZhi = this.getImg(this.computeBaZi().getDayZhiExact())
    this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
    this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
    this.timeGan = this.getImg(this.computeBaZi().getTimeGan())
    this.timeZhi = this.getImg(this.computeBaZi().getTimeZhi())
  },
  destroyed() {
  },
}
</script>

<style scoped>
#profileAdd {
  width: 100%;
}
#profileAdd h3{
  font-weight: 540;
}
#profileAdd .el-container {
  background-color: #bdc0c1;
}

>>> .el-collapse-item__header {
  border: none;
  border: 0;
}

>>> .el-divider {
  background-color: #c2a36a;
}

>>> .el-icon-arrow-right {
  display: none;
}

>>> .el-collapse {
  border: none;
  border: 0;
}

>>> .el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 30px;
  height: 30px;
  text-align: center;
  font-size: 15px;
  border: none;
}

>>> .el-main {
  padding-top: 0;
  background-color: #bdc0c1;
}

#profileAdd form {
  max-width: 720px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
}

#profileAdd .view-mingpan {
  min-width: 360px;
  height: 330px;
  /*padding: 15px;*/
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  color: white;
  /*margin-left: 30px;*/
  background-color: #595757;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#profileAdd .view-mingpan div:nth-child(1) {
  /*background-color: pink;*/
  overflow: hidden;
}

#profileAdd .view-mingpan img {
  width: 54px;
  margin: 3px 6px;
}

>>> .el-date-picker__header, .el-date-picker__header--bordered {
  display: none !important;
  border: none;
}

>>> .el-form-item__label {
  font-size: 15px;
}

>>> .el-form-item {
  margin-bottom: 18px;
}

.el-select-dropdown__item {
  padding: 0;
}

>>> .el-textarea__inner {
  /*background-color: pink;*/
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 2px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

>>> .el-divider__text {
  background-color: #595757;
  color: white;
}

.hr {
  margin: 15px 0 24px 0;
}

#profileAdd >>> .el-collapse-item__header, >>> .el-collapse-item__wrap {
  background-color: white !important;
}

#profileAdd >>> .el-collapse-item__header {
  /*border-bottom: 1px solid #ebeef5;*/
}

#profileAdd .view-mingpan-mobile {
  display: none;
  width: 100%;
  margin-bottom: 24px;
  background-color: #595757;
  padding: 24px 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  color: white;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#profileAdd .view-mingpan-mobile img {
  width: 54px;
  margin: 3px 6px;
}

#profileAdd-show >>> .el-checkbox-button__inner {
  padding: 15px 26px;
  font-size: 15px;
}

#profileAdd-mobile >>> .el-checkbox-button__inner {
  padding: 15px 6px;
  font-size: 12px;
}

#profileAdd-mobile {
  display: none;
}

#profileAdd .el-collapse {
  margin-bottom: 24px;
  margin-left: 24px;
  margin-right: 24px;
}
</style>