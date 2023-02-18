<!--  -->
<template>
  <div class='batch-import'
       v-loading="uploadLoading"
       element-loading-text="正在导入，请等待···"
       element-loading-spinner="el-icon-loading">
    <!-- <div class="download-info">
      <i class="el-icon-info iconinfo"></i>
      <span>导入的文件需要按照模板填写，点击</span>
    </div> -->
    <div class="upload">
      <span>选择导入文件</span>
      <el-upload class="upload-com"
                 drag
                 ref="dataUpload"
                 :action="url"
                 :limit="1"
                 :before-upload="beforeUpload"
                 :on-success="uploadSuccess"
                 :on-error="uploadError"
                 :file-list="fileList"
                 :show-file-list="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      uploadLoading: false,
      fileList: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    beforeUpload (file) {
      let _this = this
      let promise = new Promise(function (resolve, reject) {
        _this
          .$confirm(`确定将${file.name}导入？`, {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          .then(() => {
            _this.uploadLoading = true
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
      return promise
    },
    uploadSuccess (response) {
      this.$refs.dataUpload.clearFiles()
      this.uploadLoading = false
      if (response.code === 0) {
        this.$message.success(response.message)
        this.$emit('success')
      } else {
        this.$message.error('导入失败,请检查文件')
      }
    },
    uploadError () {
      this.$refs.dataUpload.clearFiles()
      this.uploadLoading = false
      this.$message.error('导入失败,请检查文件')
    }
  },
  created () {

  },
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.batch-import {
  display: flex;
  flex-direction: column;
  .download-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fe9a00;
    background-color: rgba(254, 154, 0, 0.1);
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    .iconinfo {
      font-size: 14px;
      margin-right: 10px;
    }
    .link {
      margin-left: 5px;
      cursor: pointer;
      color: #67b1ff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .upload {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    padding: 0 5px;
    justify-content: center;
    .upload-com {
      margin-left: 15px;
    }
  }
}
</style>
