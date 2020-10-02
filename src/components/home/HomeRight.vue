<template>
  <div>
    <el-drawer
        :size="size"
        :visible.sync="rightSide"
        :with-header="false">
      <div id="homeRight">

        <div class="avater-wraper">
          <el-avatar class="avater" :size="60" :src="circleUrl"></el-avatar>
          <div class="username">{{ username }}</div>
        </div>

        <div class="user-bar">
          <el-row :gutter="0">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <span><el-divider content-position="left"></el-divider></span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <span><el-button style="font-size: 24px" type="info" circle icon="el-icon-user"></el-button></span>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <span><el-divider content-position="center"></el-divider></span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <span><el-button style="font-size: 24px" type="success" circle icon="el-icon-plus"></el-button></span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <span><el-divider content-position="right"></el-divider></span>
              </div>
            </el-col>
          </el-row>
        </div>

        <div style="margin-top: 24px; padding: 0 15px 0 15px">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="姓名" value="1"></el-option>
              <el-option label="性别" value="2"></el-option>
              <el-option label="年份" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="data-wraper">
          <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="120">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="90">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "HomeRight",
  data() {
    return {
      size: '30%',
      rightSide: false,
      input1: '',
      input2: '',
      input3: '',
      select: '',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: '某某某命理工作室',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  },
  watch: {
    deep: true,
    immediate: true,
    '$store.state.showRightSide': function () {
      this.rightSide = this.$store.state.logoutLoading
    },
  },
  methods: {},
  computed: {},
  mounted() {
    if (document.body.clientWidth < 770) {
      this.size = '75%'
    } else {
      this.size = '33%'
    }
    window.onresize = () => {
      return (() => {
        if (document.body.clientWidth < 770) {
          this.size = '75%'
        } else {
          this.size = '33%'
        }
      })();
    };
  }
}
</script>

<style scoped>
#homeRight {
  text-align: center;
  z-index: 666;
  transform: translateZ(3002px);
  /*background-color: pink;*/
}

#homeRight .avater-wraper {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /*background-color: #ccc;*/
}

#homeRight .username {
  font-size: 15px;
  color: darkgray;
  padding-bottom: 15px;
}

#homeRight .user-bar {
  padding: 18px 0 18px 0;
  height: 39px;
  line-height: 39px;
  /*background-color: pink;*/
  font-size: 24px;
}

#homeRight .avater {
  margin: 18px 0 18px 0;
}

#homeRight .data-wraper {
  padding: 15px 9px 0 9px;
}

>>> .el-select .el-input {
  width: 120px;
}
</style>