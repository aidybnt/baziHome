<template>
  <div v-loading="TopLogoLoading" element-loading-text="正在上传，请稍后...">
    <div class="mask">
      <el-card class="box-card">
        <div slot="header" class="clearfix sub">
          <span>修改顶部LOGO</span>
          <Subscription></Subscription>
        </div>
        <el-upload action=""
                   ref="topLogoUpload"
                   :on-change="imgChange"
                   :auto-upload="false"
                   :file-list="fileList"
                   :show-file-list="true">
          <el-button slot="trigger" type="primary">选取文件</el-button>
          <el-button :disabled="buttonDisabled" style="margin-left: 15px;" type="success" @click="submitUpload">上 传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-upload>
        <p style="height:42px;line-height: 21px; color: darkorange;">
          仅支持PNG格式 <br>
          图片不大于100kb <br>
          <span style="color: green;border-bottom: black 1px solid">推荐尺寸：300 X 66 px</span>
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import Subscription from "@/components/common/Subscription";
import {post} from "@/utils/request";

export default {
  name: "ChangeLogo",
  components: {Subscription},
  data() {
    return {
      TopLogoLoading: false,
      imgPath: '',
      imgFile: '',
      buttonDisabled: true,
      fileList: []
    };
  },
  methods: {
    imgChange(e, list) {
      this.imgFile = e.raw
      const isPNG = this.imgFile.type === 'image/png';
      const isLt2M = this.imgFile.size / 1024 / 1024 < 0.1;
      if (!isPNG) {
        this.$message.error('上传图片只能是 PNG 格式!')
        this.buttonDisabled = true
        this.$refs.topLogoUpload.clearFiles()
        this.imgFile = []
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 100kb!');
        this.buttonDisabled = true
        this.$refs.topLogoUpload.clearFiles()
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
      this.TopLogoLoading = false
      let formData = new FormData()
      formData.append('head_logo', this.imgFile)
      formData.append('TopLogoPath', localStorage.TopLogoPath)
      post('TopLogo', formData,
          {headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}})
          .then(response => {
            if (response.status === 200) {
              this.$message({message: response.data.message, type: 'success'})
              localStorage.TopLogoPath = response.data.TopLogoPath
              localStorage.TopLogo = response.data.TopLogo
              this.imgPath = localStorage.APP_URL + '/' + response.data.TopLogoPath
              this.$store.commit('TopLogoPathMutations', this.imgPath)
            }
            this.TopLogoLoading = false
          })
          .catch(error => {
            if (error.status === 422) {
              this.$message({message: error.data.errors.head_logo[0], type: 'error'});
            }
            if (error.status === 403) {
              this.$message({message: error.data.message, type: 'error'});
            }
            if (error.status === 500) {
              this.$message({message: '服务器错误，请重试。', type: 'error'})
            }
            //超时处理
            if (error.status === 'timeout') {
              this.$message({message: '请求超时，请重试，或检查网络。', type: 'error'})
            }
            this.TopLogoLoading = false
          })
    }
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