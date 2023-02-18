<!--  -->
<template>
  <div class='point-table'>
    <custom-btn style="float:right"
                size="mini"
                @click="upload">导入</custom-btn>
    <el-table :data="tableData"
              :height="tableHeight">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="right"
                   inline
                   class="demo-table-expand">
            <el-form-item label="attack_int_list">
              <span>{{ props.row.attack_int_list }}</span>
            </el-form-item>
            <el-form-item label="g_attack_int_list">
              <span>{{ props.row.g_attack_int_list }}</span>
            </el-form-item>
            <el-form-item label="g_restore_int_list">
              <span>{{ props.row.g_restore_int_list }}</span>
            </el-form-item>
            <el-form-item label="restore_int_list">
              <span>{{ props.row.restore_int_list }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="id"
                       prop="id">
      </el-table-column>
      <el-table-column label="名称"
                       prop="name">
      </el-table-column>

    </el-table>
    <!-- <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[100, 200, 300, 400]"
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="400">
    </el-pagination> -->
    <el-dialog title="导入文件"
               :visible.sync="dialogVisible"
               width="500px">
      <importFile :url="api.import_process_attack"
                  @success="uploadSuccess"></importFile>
    </el-dialog>
  </div>
</template>

<script>
import customBtn from '@/components/customBtn.vue'
import importFile from '@/components/importFile.vue'
import { api } from '@/api.js'
export default {
  components: { customBtn, importFile },
  data () {
    return {
      currentPage: 1,
      tableData: [],
      dialogVisible: false,
      api: api
    };
  },
  computed: {
    tableHeight () {
      return window.innerHeight - 120
    }
  },
  watch: {},
  methods: {
    upload () {
      this.dialogVisible = true
    },
    getPointTable () {
      // let data = {  }
      this.$http.get(api.process_attack).then((res) => {
        this.tableData = res.data
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    uploadSuccess () {
      this.dialogVisible = false
    }
  },
  created () {

  },
  mounted () {
    this.getPointTable()
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.demo-table-expand {
  padding: 0 60px;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
::v-deep .el-switch__label.is-active {
  color: #207c20;
}
::v-deep .el-switch__label {
  color: rgba(255, 255, 255, 0.5);
}
</style>