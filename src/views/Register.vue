<template>
  <div>
    <IndexBody>
      <el-row>
        <el-col :xs="0" :sm="6" :md="6" :lg="8" :xl="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" style="position: relative;">
          <div class="grid-content bg-purple-light"
               v-loading="registerLoading"
               element-loading-text="正在注册，请稍后...">
            <div class="mask">
              <div class="register-input">
                <div class="register-title">
                  <div style="float: left">命盘管理系统</div>
                  <span style="float:right;">注册账号</span>
                </div>
                <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="">
                  <el-form-item
                      prop="registerUsername"
                      label=""
                  >
                    <el-input
                        v-model="registerForm.registerUsername"
                        placeholder="请输入您的账号"
                    >
                      <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item
                      prop="email"
                      label=""
                  >
                    <el-input
                        v-model="registerForm.email"
                        placeholder="请输入您的验证邮箱">
                      <i slot="prefix" class="el-icon-message"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item
                      label=""
                      prop="pass">
                    <el-input
                        placeholder="请输入登陆密码"
                        type="password"
                        v-model="registerForm.pass"
                        autocomplete="off">
                      <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item
                      label=""
                      prop="checkPass">
                    <el-input
                        placeholder="请再次输入登陆密码"
                        type="password"
                        v-model="registerForm.checkPass"
                        autocomplete="off">
                      <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                  </el-form-item>
                </el-form>
                <p style="clear: both; overflow:hidden;">
                  <router-link to="/forget">
                    <el-button type="danger" style="float: left" class="register-button">忘记密码</el-button>
                  </router-link>
                  <el-button type="success" @click="submitForm('registerForm')" style="float: right" class="register-button">注 册</el-button>
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
import IndexBody from "@/components/common/IndexBody";
import Foot from "@/components/common/Foot";
import {post} from "@/utils/request";

export default {
  name: "Register",
  components: {IndexBody, Foot},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerLoading: false,
      message: '',
      registerForm: {
        pass: '',
        checkPass: '',
        email: '',
        registerUsername: '',
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        registerUsername: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(registerForm) {
      this.$refs[registerForm].validate((valid) => {
        if (valid) {
          this.registerLoading = true
          post('register',
              {
                'username': this.registerForm.registerUsername,
                'password': this.registerForm.pass,
                'email': this.registerForm.email,
                'user_ip': localStorage.ip
              },
              {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
              .then(response => {
                this.registerLoading = false
                if (response.status === 200) {
                  this.$router.push({name: 'Login',})
                }
              })
              .catch(error => {
                this.registerLoading = false
              })
        } else {
          return false;
        }
      });
    },
  },
}
</script>

<style scoped>
.register-title {
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

.register-input {
  margin: 0 auto;
  width: 72%;
}

.register-input input {
  margin: 9px 0;
}

.register-input i {
  width: 25px;
  font-size: 15px;
  line-height: 40px;
}

>>> .el-form-item__error {
  color: white !important;
}
</style>