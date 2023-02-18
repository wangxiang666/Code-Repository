<!--  -->
<template>
  <div class='control-container'>
    <div class="control-box">
      <div class="label">防护</div>
      <div class="operate">
        <div class="btn-group"
             v-for="item in btnGroup"
             :key="item.id">
          <custom-btn @click="attack(item.id,1,1)">{{item.name}}</custom-btn>
          <custom-btn @click="attack(item.id,0,1)">恢复</custom-btn>
        </div>
      </div>
    </div>
    <div class="control-box">
      <div class="label">审计</div>
      <div class="operate">
        <div class="operate">
          <div class="btn-group"
               v-for="item in btnGroup"
               :key="item.id">
            <custom-btn @click="attack(item.id,1,0)">{{item.name}}</custom-btn>
            <custom-btn @click="attack(item.id,0,0)">恢复</custom-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customBtn from '@/components/customBtn.vue'
import { api } from '@/api.js'
export default {
  components: { customBtn },
  data () {
    return {
      btnGroup: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    getOption () {
      this.$http.get(api.process_attack).then((response) => {
        this.btnGroup = response.data
      })
    },
    attack (point_id, status, type_flag) {
      //攻击1 恢复0
      let data = { point_id, status, type_flag }
      this.$http.post(api.single_process_attack, data).then((res) => {
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
      })
    },
  },
  mounted () {
    this.getOption()
  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.control-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .control-box {
    box-sizing: border-box;
    width: 30%;
    height: 80%;
    padding: 20px 40px;
    margin: 0 40px;
    background: rgba(217, 217, 217, 0.01);
    box-shadow: inset 0px 0px 20px 3px rgba(44, 171, 80, 0.2);
    border-radius: 40px;
    .label {
      text-align: center;
      color: #fff;
      font-size: 20px;
      font-weight: 800;
    }
    .operate {
      .btn-group {
        display: flex;
        margin: 20px 0;
      }
    }
  }
}
</style>