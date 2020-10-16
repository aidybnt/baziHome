<template>
  <div>
    <IndexBody>
      <el-row>
        <el-col :xs="0" :sm="6" :md="6" :lg="8" :xl="9">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" style="position: relative;">
          <div class="grid-content bg-purple-light"
               v-loading="forgetLoading"
               element-loading-text="正在发送Email，请稍后...">
            <div class="mask">
              <div class="forget-input">
                <div class="forget-title">
                  <div style="float: left">命盘管理系统</div>
                  <span style="float:right;">找回密码</span>
                </div>
                <el-form :model="forgetForm" status-icon :rules="rules" ref="forgetForm" label-width="">
                  <el-form-item
                      prop="email"
                      label=""
                  >
                    <el-input
                        v-model="forgetForm.email"
                        placeholder="请输入您的注册邮箱">
                      <i slot="prefix" class="el-icon-message"></i>
                    </el-input>
                  </el-form-item>
                </el-form>
                <p style="clear: both; overflow:hidden;">
                  <el-button
                      type="success"
                      @click="submitForm('forgetForm')"
                      style="float: right"
                      class="forget-button">发送邮件
                  </el-button>
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
  name: "Forget",
  components: {Foot, IndexBody},
  data() {
    return {
      forgetLoading: false,
      forgetForm: {
        email: '',
      },
      rules: {
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    submitForm(forgetForm) {
      this.$refs[forgetForm].validate((valid) => {
        if (valid) {
          this.forgetLoading = true
          post('changePassword',
              {'email': this.forgetForm.email},
              {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
              .then(response => {
                this.forgetLoading = false
                if (response.status === 200) {
                  this.$router.push({name: 'Login',})
                }
              })
              .catch(error => {
                this.forgetLoading = false
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
.forget-title {
  min-width: 240px;
  margin: 0 0 30px 0;
  color: #000000;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 1px solid #fff;
  height: 30px;
}

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

.forget-input {
  margin: 0 auto;
  width: 72%;
}

.forget-input input {
  margin: 9px 0;
}

.forget-input i {
  width: 25px;
  font-size: 15px;
  line-height: 40px;
}

>>> .el-form-item__error {
  color: white !important;
}
</style>