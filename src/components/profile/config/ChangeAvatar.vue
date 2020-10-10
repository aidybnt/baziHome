<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改头像</span>
      </div>
      <el-upload action=""
                 :disabled="isDisabled"
                 class="avatar-uploader"
                 :before-upload="beforeAvatarUpload"
                 :show-file-list="false">
        <div v-loading="avatarLoading"
             element-loading-text=""
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="mask">
            <img v-if="imgPath" :src="imgPath" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </div>
        </div>
      </el-upload>
      <p style="height: 18px;line-height: 21px; color: darkorange;">
        支持 JPG、PNG 格式 <br>
        图片不大于100kb
      </p>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ChangeAvatar",
  data() {
    return {
      avatarLoading: false,
      imgPath: '',
      isDisabled: false,
    };
  },
  methods: {
    beforeAvatarUpload(file) {
      this.avatarLoading = true
      this.isDisabled = true
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 0.1;
      if (!isJPG && !isPNG) {
        this.avatarLoading = false
        this.isDisabled = false
        this.$message.error('上传图片只能是 JPG、PNG 格式!')
        return false
      }
      if (!isLt2M) {
        this.avatarLoading = false
        this.isDisabled = false
        this.$message.error('上传图片大小不能超过 100kb!');
        return false
      }
      let formData = new FormData()
      formData.append('avatar', file)
      formData.append('avatarPath', localStorage.avatarPath)

      axios.post(
          // 'http://192.168.1.163/api/avatar',
          // '',
          'https://data.water555.xzy/api/avatar',
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
            this.isDisabled = false
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
            this.isDisabled = false
          })
      return false
    },
  }
}
</script>

<style scoped>
.avatar-uploader >>> .el-upload {
  border: 1px dashed #F56C6C;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader >>> .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 66px;
  height: 66px;
  line-height: 66px;
  text-align: center;
}

.avatar {
  width: 66px;
  height: 66px;
  display: block;
}

>>> .el-loading-spinner {
  font-size: 24px;
  top: 60%;
  margin-top: -23px;
  width: 100%;
  text-align: center;
  position: absolute;
}
</style>