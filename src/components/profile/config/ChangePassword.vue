<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <el-col :xs="24" :sm="14" :md="10" :lg="8" :xl="4">
        <div class="grid-content bg-purple">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
            <el-form-item label="原密码" prop="oldPassWord">
              <el-input type="password" v-model="ruleForm.oldPassWord"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassWord">
              <el-input type="password" v-model="ruleForm.newPassWord"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="isLoading" @click="submitForm('ruleForm')">提交修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-card>
  </div>
</template>

<script>
import {post} from "@/utils/request";

export default {
  name: "ChangePassword",
  data() {
    return {
      isLoading: false,
      ruleForm: {
        oldPassWord: '',
        newPassWord: ''
      },
      rules: {
        oldPassWord: [{required: true, message: '请输入原密码', trigger: 'blur'}],
        newPassWord: [{required: true, message: '请输入新密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isLoading = true
          post('resetPassword',
              {'password': this.ruleForm.oldPassWord, 'resetPassword': this.ruleForm.newPassWord},
              {headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer ' + localStorage.access_token}})
              .then(response => {
                this.isLoading = false
                if (response.status === 200) {
                  localStorage.clear()
                  this.$router.push({name: 'Login',})
                }
              })
              .catch(error => {
                this.isLoading = false
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

</style>