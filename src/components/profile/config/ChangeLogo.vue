<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改顶部LOGO</span>
        <Subscription></Subscription>
      </div>
      <el-upload action=""
                 :disabled="isDisabled"
                 class="TopLogo-uploader"
                 :before-upload="beforeTopLogoUpload"
                 :show-file-list="false">
        <div v-loading="TopLogoLoading"
             element-loading-text=""
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="mask">
            <img v-if="imgPath" :src="imgPath" class="TopLogo">
            <i v-else class="el-icon-plus TopLogo-uploader-icon"></i>
          </div>
        </div>
      </el-upload>
      <p style="height:42px;line-height: 21px; color: darkorange;">
        仅支持PNG格式 <br>
        图片不大于100kb <br>
        <span style="color: green;border-bottom: black 1px solid">推荐尺寸：300 X 66 px</span>
      </p>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
import Subscription from "@/components/common/Subscription";

export default {
  name: "ChangeLogo",
  components: {Subscription},
  data() {
    return {
      TopLogoLoading: false,
      imgPath: '',
      isDisabled: false,
    };
  },
  methods: {
    beforeTopLogoUpload(file) {
      this.TopLogoLoading = true
      this.isDisabled = true
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 0.1;
      if (!isPNG) {
        this.TopLogoLoading = false
        this.isDisabled = false
        this.$message.error('上传图片只能是 PNG 格式!')
        return false
      }
      if (!isLt2M) {
        this.TopLogoLoading = false
        this.isDisabled = false
        this.$message.error('上传图片大小不能超过 100kb!');
        return false
      }
      let formData = new FormData()
      formData.append('head_logo', file)
      formData.append('TopLogoPath', localStorage.TopLogoPath)
      axios.post(
          // 'http://192.168.1.163/api/TopLogo',
          // '',
          'https://data.water555.xzy/api/TopLogo',
          formData,
          {
            headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}
          })
          .then(response => {
            if (response.status === 200) {
              this.$message({message: response.data.message, type: 'success'})
              localStorage.TopLogoPath = response.data.TopLogoPath
              this.imgPath = localStorage.APP_URL + '/' + response.data.TopLogoPath
              this.$store.commit('TopLogoPathMutations', this.imgPath)
            }
            this.TopLogoLoading = false
            this.isDisabled = false
          })
          .catch(error => {
            if (error.response.status === 422) {
              this.$message({message: error.response.data.errors.head_logo[0], type: 'error'});
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
            this.TopLogoLoading = false
            this.isDisabled = false
          })
      return false
    },
  }
}
</script>

<style scoped>
.TopLogo-uploader >>> .el-upload {
  border: 1px dashed #F56C6C;
  /*border-radius: 6px;*/
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.TopLogo-uploader >>> .el-upload:hover {
  border-color: #409EFF;
}

.TopLogo-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 66px;
  line-height: 66px;
  text-align: center;
}

.TopLogo {
  width: 300px;
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