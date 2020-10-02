<template>
  <div id="login">
    <IndexBody>
      <el-row>
        <el-col :xs="0" :sm="6" :md="6" :lg="8" :xl="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" style="position: relative;">
          <div class="grid-content bg-purple-light"
               v-loading="loginLoading"
               element-loading-text="正在登陆，请稍后...">
            <div class="mask">
              <div class="login-input">
                <div class="login-title">
                  <div style="float: left">命盘管理系统</div>
                  <span style="float:right;">用户登陆</span>
                </div>
                <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="">
                  <el-form-item prop="loginUsername" label="">
                    <el-input
                        v-model="loginForm.loginUsername"
                        placeholder="请输入您的账号"
                    >
                      <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="" prop="pass">
                    <el-input
                        placeholder="请输入登陆密码"
                        type="password"
                        v-model="loginForm.pass"
                        autocomplete="off">
                      <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                  </el-form-item>
                </el-form>
                <p style="clear: both; overflow:hidden;">
                  <router-link to="/register">
                    <el-button type="success" style="float: left" class="login-button">注 册</el-button>
                  </router-link>
                  <el-button type="primary" @click="submitForm('loginForm')" style="float: right" class="login-button">登 陆</el-button>
                </p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="0" :sm="6" :md="6" :lg="8" :xl="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </IndexBody>
    <Foot></Foot>
  </div>
</template>

<script>
import {post} from "@/utils/request";
import IndexBody from "@/components/common/IndexBody";
import Foot from "@/components/common/Foot";

export default {
  name: "Login",
  components: {Foot, IndexBody},
  data() {
    return {
      // screenWidth: '',
      // screenHeight: '',
      loginLoading: false,
      message: '',
      loginForm: {
        pass: '',
        loginUsername: '',
      },
      rules: {
        pass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        loginUsername: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    //点击登陆按钮执行的操作
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          //加载loading
          this.loginLoading = true
          //发送请求
          post('login',
              {
                'username': this.loginForm.loginUsername,
                'password': this.loginForm.pass,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              }).then(response => {
            // console.group('登陆请求');
            // console.log(response);
            // console.log(response.data);
            // console.groupEnd()
            if (response.status == 200) {
              this.$message({message: response.data.message, type: 'success'});
              this.loginLoading = false
              //本地存储token
              localStorage.access_token = response.data.data.access_token
              //登陆成功
              this.$router.push({name: 'Home',})
            }
            this.loginLoading = false
          }).catch(error => {
            this.loginLoading = false
            // console.group('登陆错误响应');
            // console.log(error);
            // console.groupEnd()
            if (error.status == 403) {
              this.loading = false
              this.$message({message: error.data.message, type: 'error'});
            }
            //超时处理
            if (error == 'timeout') {
              this.$message({message: '请求超时，请重试，或检查网络。', type: 'error'});
            }
          })
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(function () {
      if (this.$route.query.active) {
        if (this.$route.query.active == '1') {
          this.$message({message: '账号已成功激活，请登陆。', type: 'success'});
        } else {
          this.$message({message: this.$route.query.active, type: 'warning'});
        }
      }
    })
    // this.screenWidth = document.body.clientWidth;
    // this.screenHeight = document.body.clientHeight;
    // window.onresize = () => {
    //   return (() => {
    //     this.screenWidth = document.body.clientWidth;
    //     this.screenHeight = document.body.clientHeight;
    //     console.log('width=>>>' + this.screenWidth);
    //     console.log('height=>>>' + this.screenHeight);
    //   })();
    // };
  },
}
</script>

<style scoped>
.login-title {
  min-width: 240px;
  margin: 0 0 30px 0;
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 1px solid #fff;
  height: 30px;
}

/*没有高度，布局无效*/
.bg-purple {
  min-height: 12px;
}

.bg-purple-light {
  padding: 39px 0 1px 0;
  box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.6);
  text-align: center;
  background: rgba(255, 255, 255, .6);
  border-radius: 4px;
  margin: 0 15px;
}

.login-input {
  margin: 0 auto;
  width: 72%;
}

.login-input input {
  margin: 9px 0;
}

.login-input i {
  width: 25px;
  font-size: 15px;
  line-height: 40px;
}

>>> .el-form-item__error {
  color: white !important;
}
</style>