<template>
  <div style="width: 100%;">
    <el-container style="height: 75vh;">
      <!--查询------------------------------------------------------------------------------------------->
      <el-header style="height: auto !important; margin-top: 24px">
        <el-row>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <div class="grid-content bg-purple">
              <el-input @input="changeInput" :placeholder="placeholder" v-model="queryInput" clearable class="input-with-select">
                <el-select @change="changeSelect" v-model="select" clearable slot="prepend" placeholder="可选">
                  <el-option label="年" value="year"></el-option>
                  <el-option label="月" value="month"></el-option>
                  <el-option label="日" value="day"></el-option>
                  <el-option label="姓名" value="name"></el-option>
                  <el-option label="称呼" value="call"></el-option>
                  <el-option label="地点" value="born"></el-option>
                  <el-option label="区域" value="area"></el-option>
                </el-select>
                <el-button
                    @click="getData"
                    style="background-color: #67C23A; color: white;"
                    :style="buttonBgc"
                    slot="append"
                    :icon="icon">
                  {{ searchButton }}
                </el-button>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!--数据列表---------------------------------------------------------------------------------------->
      <el-main>
        <el-table
            :height="tableHeight"
            :data="tableData"
            v-loading="loading"
            element-loading-text="拼命加载中"
            row-class-name="tableRow"
            @row-click.self="handleCurrentChange">
          <el-table-column type="index" label="序号" width="50">
            <template scope="scope">
              <span v-text="getIndex(scope.$index)"></span>
            </template>
          </el-table-column>
          <el-table-column prop="call" label="称呼" width="90"></el-table-column>
          <el-table-column prop="sex" label="性别" width="50"></el-table-column>
          <el-table-column prop="name" v-if="isClose" label="姓名" width="90"></el-table-column>
          <el-table-column prop="bak1" label="出生时间" width="150"></el-table-column>
          <el-table-column prop="born" v-if="isClose" label="出生地" width="90"></el-table-column>
          <el-table-column prop="area" v-if="isClose" label="常住区域" width="90"></el-table-column>
          <el-table-column prop="type" v-if="isClose" label="本命特征" min-width="240">
            <template slot-scope="scope">
              <div class="typeClass" v-for="(item, index) in types(tableData[scope.$index].type)" :key="index">
                {{ item }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="desc" v-if="isClose" label="备注"></el-table-column>
          <el-table-column prop="created_at" v-if="isClose" label="添加日期" width="160" :formatter="rTime"></el-table-column>
          <el-table-column label="操作" fixed="right" :width="controlWidth">
            <template slot-scope="scope">
              <el-button style="margin-right: 3px" type="primary" size="small" @click.stop="edit(scope.$index)">修改</el-button>
              <el-button type="danger" size="small" @click.stop="delOpen(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="height: 24px"></div>
        <!--        分页-->
        <el-pagination
            background
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="totalPages"
            @current-change="currChange"
            @prev-click="preClick"
            @next-click="nextClick"
            :pager-count="5"
            ref="pagination">
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {post} from "@/utils/request";

export default {
  name: "ProfileShowList",
  data() {
    const item = {
      number: '',
      created_at: '',
      name: '',
      call: '',
      sex: '',
      bak1: '', //八字完整时间
      born: '',
      area: '',
      type: [],
      desc: '',
    };
    return {
      icon: 'el-icon-refresh-left',
      searchButton: '刷新',
      buttonBgc: {
        backgroundColor: '#409EFF'
      },
      totalPages: 0,
      pageSize: 15,
      currentPage: '',
      screenWidth: '',
      width: '273',
      isClose: 'true',
      controlWidth: '273',
      tableHeight: '600px',
      loading: false,
      tableData: [],
      select: '',
      queryInput: '',
      placeholder: '默认查询全部数据',
    }
  },
  created() {
    this.tableData = JSON.parse(localStorage.getItem('tableData'))
    if (this.$store.state.totalPages) {
      this.totalPages = this.$store.state.totalPages
    } else {
      this.totalPages = parseInt(localStorage.getItem('totalPages'))
    }
  },
  methods: {
    //刷新和查询切换
    searchAndRefresh(v) {
      if (v) {
        this.searchButton = '查询'
        this.buttonBgc.backgroundColor = '#67C23A'
        this.icon = 'el-icon-search'
      } else {
        this.searchButton = '刷新'
        this.buttonBgc.backgroundColor = '#409EFF'
        this.icon = 'el-icon-refresh-left'
      }
    },
    changeInput(v) {
      this.searchAndRefresh(v)
    },
    //转换格式
    types(v) {
      localStorage.setItem('typeData', JSON.stringify(v))
      return eval(v)
    },
    //转换时间格式
    rTime(row, column, cellValue) {
      let json_date = new Date(cellValue).toJSON();
      return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
    //点击当前行跳转到HOME
    handleCurrentChange(row) {
      sessionStorage.setItem('HomeData', JSON.stringify(row))
      //显示Home按钮
      if (!this.$store.state.homeLinkButton) {
        this.$store.commit('homeLinkButtonMutations', 1)
      }
      this.$router.push('Home')
    },
    //列表的序号
    getIndex($index) {
      this.currentPage = Number(localStorage.getItem('page'))
      if (this.currentPage) {
        return (this.currentPage - 1) * this.pageSize + $index + 1
      } else {
        return $index + 1
      }
    },
    //分页 点击当前页
    currChange(v) {
      localStorage.setItem('page', v)
      this.getData(v)
      this.currentPage = v
    },
    //前一页
    preClick(v) {
      localStorage.setItem('page', v)
      this.getData(v)
      this.currentPage = v
    },
    //后一页
    nextClick(v) {
      localStorage.setItem('page', v)
      this.getData(v)
      this.currentPage = v
    },
    //删除
    delOpen(index) {
      this.$confirm(
          '该操作为永久删除, 是否继续?',
          '友情提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            customClass: 'profileBox',
            type: 'warning',
            center: true
          })
          .then(() => {
            this.loading = true
            post('mingpan/del',
                {id: this.tableData[index].id},
                {headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}})
                .then(response => {
                  if (response.status === 200) {
                    this.tableData.splice(index, 1)
                    //剔除删除掉的行
                    let tableDta = JSON.parse(localStorage.getItem('tableData'))
                    tableDta.splice(index, 1)
                    localStorage.setItem('tableData', JSON.stringify(tableDta))
                  }
                  this.loading = false
                })
                .catch(error => {
                  this.loading = false
                })
          })
          .catch(() => {
            this.$message({type: 'info', message: '已取消删除'});
          });
    },
    //编辑
    edit(index) {
      localStorage.setItem('editData', JSON.stringify(this.tableData[index]))
      localStorage.setItem('tableIndex', index)
      this.$store.commit('editLinkMutations', true)
      this.$router.push('profileAdd')
    },
    //select
    changeSelect(v) {
      this.searchAndRefresh(v)
      if (v === 'year') {
        v = '出生年份'
      }
      if (v === 'month') {
        v = '出生月份'
      }
      if (v === 'day') {
        v = '出生日'
      }
      if (v === 'name') {
        v = '姓名'
      }
      if (v === 'call') {
        v = '称呼'
      }
      if (v === 'born') {
        v = '出生地'
      }
      if (v === 'area') {
        v = '常住区域'
      }
      this.placeholder = '请输入' + v
      if (!v) {
        this.placeholder = '默认查询全部数据'
      }
    },
    //请求数据 查询数据
    getData(pages) {
      if (Number(localStorage.getItem('page'))) {
        pages = Number(localStorage.getItem('page'))
      } else {
        pages = 1
      }
      if (this.select && !this.queryInput) {
        this.$message({message: '请输入查询数据', type: 'error'})
        return false
      }
      this.loading = true
      post('mingpan/show', {page: pages, select: this.select, input: this.queryInput},
          {headers: {'Authorization': 'Bearer ' + localStorage.access_token, 'Content-Type': 'application/json', 'Accept': 'application/json'}})
          .then(response => {
            if (response.status === 200) {
              // this.goods[type].list.push(...res.data)
              localStorage.setItem('tableData', JSON.stringify(response.data.data.data))
              this.tableData = JSON.parse(localStorage.getItem('tableData'))
              localStorage.setItem('totalPages', response.data.data.total)
              this.$store.commit('totalPagesMutations', response.data.data.total)
              this.totalPages = this.$store.state.totalPages
            }
            this.loading = false
          })
          .catch(error => {
            this.loading = false
          })
    }
  },
  mounted() {
    this.$nextTick(() => {
      //表格固定列的宽度
      this.screenWidth = document.body.clientWidth;
      if (this.screenWidth < 768) {
        this.controlWidth = 147
        this.isClose = false
        this.tableHeight = '300px'
      } else {
        this.controlWidth = 273
        this.tableHeight = '600px'
      }

      if (Number(localStorage.getItem('page'))) {
        this.$refs.pagination.internalCurrentPage = Number(localStorage.getItem('page'))
      } else {
        this.$refs.pagination.internalCurrentPage = 1
        localStorage.setItem('page', '1')
      }
    })
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      //登陆的时候设置请求状态，仅仅在第一次进入的时候加载数据列表
      if (localStorage.requestState) {
        vm.getData()
        localStorage.requestState = ''
      }
    })
  },
}
</script>

<style scoped>
.typeClass {
  background-color: #ecf5ff;
  display: inline-block;
  height: 32px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  margin-right: 6px;
}

>>> .el-table thead th {
  background-color: #8cc5ff;
  color: white;
}

>>> .el-select .el-input {
  width: 90px;
  color: #595757;
}

>>> .el-select .el-input input::-webkit-input-placeholder {
  color: #53a8ff;
}

>>> .el-input__inner::-webkit-input-placeholder {
  color: #6db5ff;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

/*表格样式*/
>>> .cell { /** 超出宽度，省略号**/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

>>> .el-table tbody tr:hover > td {
  background-color: #d9ecff !important
}

>>> .tableRow {
  cursor: pointer;
}

@import "~@/assets/css/profile.css";
</style>