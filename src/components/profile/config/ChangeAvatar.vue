<template>
  <div v-loading="avatarLoading" element-loading-text="正在上传，请稍后...">
    <div class="mask">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>修改头像</span>
        </div>
        <el-upload action=""
                   ref="avatarUpload"
                   :on-change="imgChange"
                   :auto-upload="false"
                   :file-list="fileList"
                   :show-file-list="true">
          <el-button slot="trigger" type="primary">选取文件</el-button>
          <el-button :disabled="buttonDisabled" style="margin-left: 15px;" type="success" @click="submitUpload">上 传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-upload>
        <p style="height: 18px;line-height: 21px; color: darkorange;">
          支持 JPG、PNG 格式 <br>
          图片不大于100kb
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {post} from "@/utils/request";

export default {
  name: "ChangeAvatar",
  data() {
    return {
      avatarLoading: false,
      imgPath: '',
      imgFile: '',
      buttonDisabled: true,
      fileList: []
    };
  },
  methods: {
    imgChange(e, list) {
      this.imgFile = e.raw
      const isJPG = this.imgFile.type === 'image/jpeg';
      const isPNG = this.imgFile.type === 'image/png';
      const isLt2M = this.imgFile.size / 1024 / 1024 < 0.1;
      if (!isJPG && !isPNG) {
        this.$message.error('上传图片只能是 JPG、PNG 格式!')
        this.buttonDisabled = true
        this.$refs.avatarUpload.clearFiles()
        this.imgFile = []
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 100kb!');
        this.buttonDisabled = true
        this.$refs.avatarUpload.clearFiles()
        this.imgFile = []
        return false
      }
      // 这一步，是 展示最后一次选择
      if (list.length > 0) {
        this.fileList = [list[list.length - 1]]
      }
      this.buttonDisabled = false
    },
    submitUpload() {
      this.avatarLoading = true
      let formData = new FormData()
      formData.append('avatar', this.imgFile)
      formData.append('avatarPath', localStorage.avatarPath)
      post('avatar', formData,
          {headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}})
          .then(response => {
            if (response.status === 200) {
              this.$message({message: response.data.message, type: 'success'})
              localStorage.avatar = response.data.avatar
              localStorage.avatarPath = response.data.avatarPath
              this.imgPath = localStorage.APP_URL + response.data.avatar
              this.$emit('avatarEvent', this.imgPath)
              this.buttonDisabled = true
              this.$refs.avatarUpload.clearFiles()
            }
            console.log(response);
            this.avatarLoading = false
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.$message({message: error.response.data.errors.avatar[0], type: 'error'});
            }
            if (error.response.status === 403) {
              this.$message({message: error.response.data.message, type: 'error'});
            }
            if (error.response.status === 500) {
              this.$message({message: '服务器错误，请重试。', type: 'error'})
            }
            //超时处理
            if (error.response.status === 'timeout') {
              this.$message({message: '请求超时，请重试，或检查网络。', type: 'error'})
            }
            console.log(error.response);
            this.avatarLoading = false
          })
      /*
      axios.post('http://192.168.1.163/api/avatar',
          // 'https://data.water555.xzy/api/avatar',
          formData,
          {
            headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}
          })
          .then(response => {
            if (response.status === 200) {
              this.$message({message: response.data.message, type: 'success'})
              localStorage.avatar = response.data.avatar
              localStorage.avatarPath = response.data.avatarPath
              this.imgPath = localStorage.APP_URL + response.data.avatar
              this.$emit('avatarEvent', this.imgPath)
            }
            // console.log(response);
            this.avatarLoading = false
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.$message({message: error.response.data.errors.avatar[0], type: 'error'});
            }
            if (error.response.status === 403) {
              this.$message({message: error.response.data.message, type: 'error'});
            }
            if (error.response.status === 500) {
              this.$message({message: '服务器错误，请重试。', type: 'error'})
            }
            //超时处理
            if (error.response.status === 'timeout') {
              this.$message({message: '请求超时，请重试，或检查网络。', type: 'error'})
            }
            // console.log(error.response);
            this.avatarLoading = false
          })

       */
    },
  }
}
</script>

<style scoped>
.el-list-enter-active,
/deep/ .el-list-leave-active {
  transition: none;
}

/deep/ .el-list-enter,
/deep/ .el-list-leave-active {
  opacity: 0;
}

/deep/ .el-upload-list__item:first-child {
  margin-top: 0;
}

/deep/ .el-upload-list {
  padding: 9px 0;
  height: 24px;
  line-height: 24px;
}
</style>