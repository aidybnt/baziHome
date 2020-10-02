<template>
  <div id="index">
    <IndexBody>
      <div class="index-button">
        <el-button round plain @click="login">立即使用</el-button>
      </div>
      <div class="canvas-taiJi">
        <canvas ref="taiJi" id="myCanvas" width="150" height="150">
          your browser does not support the canvas tag
        </canvas>
      </div>
    </IndexBody>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "@/components/common/Foot";
import IndexBody from "@/components/common/IndexBody";
import {taiJi} from "@/utils/taiji";

export default {
  name: "Index",
  components: {IndexBody, Foot},
  data() {
    return {}
  },
  methods: {
    login() {
      this.$router.push('/login')
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.$store.state.dom = this.$refs.taiJi
      taiJi(100, this.$store.state.dom.getContext("2d"))
    });
  }
}
</script>

<style scoped>
.index-button {
  text-align: center;
  margin-top: 45px;
}

#myCanvas {
  /*background-color: #f90;*/
}

.canvas-taiJi {
  /*background-color: #f90;*/
  margin: 140px auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.9)
}
</style>