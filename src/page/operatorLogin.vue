<!--  -->
<template>
  <div class='login-container'>
    <el-form class="login-box"
             label-position="left"
             label-width="0px">
      <h2 class="login-title">系统登录</h2>
      <el-form-item>
        <el-input type="text"
                  v-model="loginForm.username"
                  auto-complete="off"
                  placeholder="账号"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input type="password"
                  v-model="loginForm.password"
                  auto-complete="off"
                  placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item style="width: 100%;margin-top:40px">
        <ani-button @click="operatorLogin">登录</ani-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import aniButton from '@/components/aniButton'
import md5 from 'js-md5'
import { api } from '@/api.js'
export default {
  components: { aniButton },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },

    };
  },
  computed: {},
  watch: {},
  methods: {
    operatorLogin () {
      let data = {
        username: md5(this.loginForm.username),
        password: md5(this.loginForm.password)
      }
      this.$http.post(api.login, data).then((res) => {
        if (res.code === 0) {
          this.$router.push({
            path: '/point-table'
          })
          this.$store.commit('changeRole', 'operator')
          this.$store.commit('resetTimer', 1)
        } else {
          this.$message({
            showClose: true,
            message: '用户名或密码错误',
            type: 'error'
          })
        }
      })

    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/img/bgLogin.png") no-repeat;
  background-size: 100% 100%;
  .login-box {
    background: #000000;
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    border: 0.11px solid #939598;
    border-radius: 40px;
    box-shadow: 0px 0px 27px rgba(147, 216, 136, 0.5);
  }

  .login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }
}
</style>