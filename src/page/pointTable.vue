<!--  -->
<template>
  <div class='point-table'>
    <custom-btn style="float:right"
                size="mini"
                @click="upload">导入</custom-btn>
    <el-table :data="tableData"
              :height="tableHeight">
      <el-table-column label="名称"
                       prop="name">
      </el-table-column>
      <el-table-column label="硬点地址"
                       prop="hard_point_addr">
      </el-table-column>
      <el-table-column label="软点数据区"
                       prop="area">
      </el-table-column>
      <el-table-column label="软点地址"
                       prop="addr">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-switch style="display: block"
                     v-model="scope.row.value"
                     :active-value="0"
                     :inactive-value="1"
                     active-color="#333333"
                     inactive-color="#207c20"
                     active-text="关闭"
                     inactive-text="开启"
                     @change="changeStatus(scope.row.id,scope.row.value)">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="导入文件"
               :visible.sync="dialogVisible"
               width="500px">
      <importFile :url="api.import_point_table"
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
      this.$http.get(api.point_table).then((res) => {
        this.tableData = res.data
      })
    },
    changeStatus (point_id, status) {
      let data = {
        point_id,
        status
      }
      this.$http.post(api.single_point_attack, data).then((res) => {
        if (res.data.code === 0) {
          this.$message({
            showClose: true,
            message: '操作成功',
            type: 'success'
          })
        } else {
          this.$message({
            showClose: true,
            message: '操作失败',
            type: 'error'
          })
        }
        this.getPointTable()
      }).catch(() => {
        this.getPointTable()
      })
    },
    uploadSuccess () {
      this.dialogVisible = false
    }
  },
  mounted () {
    this.getPointTable()
  }
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