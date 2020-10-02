<template>
  <div style="width: 100%;">
    <el-container style="height: 90vh;">
      <el-header style="text-align: right; font-size: 12px">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table
            height="81%"
            :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "ProfileShowList",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(90).fill(item)
    }
  }
}
</script>

<style scoped>
@import "~@/assets/css/profile.css";
</style>