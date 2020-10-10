<template>
  <div style="width: 100%;">
    <el-container style="height: 75vh;">
      <el-header style="height: auto !important; margin-top: 24px">

        <el-row>
          <el-col :xs="24" :sm="14" :md="14" :lg="12" :xl="8">
            <div class="grid-content bg-purple">

              <el-input placeholder="请输入查询内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="生辰" value="1"></el-option>
                  <el-option label="姓名" value="2"></el-option>
                  <el-option label="称呼" value="3"></el-option>
                  <el-option label="出生地" value="4"></el-option>
                  <el-option label="常住区域" value="5"></el-option>
                  <el-option label="本命特征" value="6"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>

            </div>
          </el-col>
        </el-row>

      </el-header>

      <el-main>
        <el-table
            height="81%"
            :data="tableData">
          <el-table-column prop="number" label="序号" width="50"></el-table-column>
          <el-table-column prop="addTime" label="添加日期" width="100"></el-table-column>
          <el-table-column prop="name" label="姓名" width="100"></el-table-column>
          <el-table-column prop="call" label="称呼" width="100"></el-table-column>
          <el-table-column prop="sex" label="性别" width="60"></el-table-column>
          <el-table-column prop="baZiTime" label="出生时间" width="200">
            <el-tag style="font-size: 15px">{{ baZiTime }}</el-tag>
          </el-table-column>
          <el-table-column prop="born" label="出生地" width="150"></el-table-column>
          <el-table-column prop="area" label="常住区域" width="150"></el-table-column>
          <el-table-column prop="type" label="本命特征" min-width="240"></el-table-column>
          <el-table-column prop="desc" label="备注" min-width="240"></el-table-column>
          <el-table-column prop="control" label="操作" min-width="150" fixed="right"></el-table-column>
        </el-table>
        <div style="height: 30px"></div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="500"
            :pager-count="5">
        </el-pagination>

      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "ProfileShowList",
  data() {
    const item = {
      number: 1,
      addTime: '2015-05-12',
      name: '王小虎',
      call: '王先生',
      sex: '男',
      baZiTime: '2015-05-12',
      born: '乌鲁木齐',
      area: '罗马尼亚',
      type: ['五行流通', '日主受克'],
      desc: '啊手动阀手动阀手动阀手动阀手动阀',
      control: ['修改', '删除']
    };
    return {
      tableData: Array(30).fill(item),
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      select: '',
      baZiTime: '2015-05-12 15:03:00'
    }
  }
}
</script>

<style scoped>
>>> .el-table thead th {
  background-color: #8cc5ff;
  color: white;
}

>>> .el-select .el-input {
  width: 105px;
  color: #595757;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

>>> .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

@import "~@/assets/css/profile.css";
</style>