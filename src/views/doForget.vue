<template>
  <div>
    <IndexBody>
      <el-row>
        <el-col :xs="0" :sm="6" :md="6" :lg="8" :xl="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" style="position: relative;">
          <div class="grid-content bg-purple-light"
               v-loading="doForgetLoading"
               element-loading-text="正在更新密码，请稍后...">
            <div class="mask">
              <div class="doForget-input">
                <div class="doForget-title">
                  <div style="float: left">命盘管理系统</div>
                  <span style="float:right;">输入新密码</span>
                </div>
                <el-form :model="doForgetForm" status-icon :rules="rules" ref="doForgetForm" label-width="">
                  <el-form-item
                      label=""
                      prop="pass">
                    <el-input
                        placeholder="请输入新的登陆密码"
                        type="password"
                        v-model="doForgetForm.pass"
                        autocomplete="off">
                      <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item
                      label=""
                      prop="checkPass">
                    <el-input
                        placeholder="请再次输入新的登陆密码"
                        type="password"
                        v-model="doForgetForm.checkPass"
                        autocomplete="off">
                      <i slot="prefix" class="el-icon-lock"></i>
                    </el-input>
                  </el-form-item>
                </el-form>
                <p style="clear: both; overflow:hidden;">
                  <el-button type="success" @click="submitForm('doForgetForm')" style="float: right" class="doForget-button">提 交</el-button>
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
  name: "doForget",
  components: {Foot, IndexBody},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.doForgetForm.checkPass !== '') {
          this.$refs.doForgetForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.doForgetForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      doForgetLoading: false,
      message: '',
      doForgetForm: {
        pass: '',
        checkPass: '',
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    submitForm(doForgetForm) {
      this.$refs[doForgetForm].validate((valid) => {
        if (valid) {
          this.doForgetLoading = true
          post('doChangePassword',
              {
                'password': this.doForgetForm.pass,
                'token': this.$route.query.token,
                'created_at': this.$route.query.created_at,
                'email': this.$route.query.email,
              },
              {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
              .then(response => {
                this.doForgetLoading = false
                if (response.status === 200) {
                  this.$router.push({name: 'Login',})
                }
              })
              .catch(error => {
                this.doForgetLoading = false
              })
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.doForget-title {
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

.doForget-input {
  margin: 0 auto;
  width: 72%;
}

.doForget-input input {
  margin: 9px 0;
}

.doForget-input i {
  width: 25px;
  font-size: 15px;
  line-height: 40px;
}

>>> .el-form-item__error {
  color: white !important;
}
</style>