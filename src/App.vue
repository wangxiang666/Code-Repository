<template>
  <div id="app">
    <div class="top-menu"
         v-if="currentPath!=='/login'">
      <el-menu :default-active="currentPath"
               mode="horizontal"
               background-color="transparent"
               text-color="#000"
               router
               active-text-color="#207C20">
        <el-menu-item v-for="menu in menuList"
                      :key="menu.path"
                      :index="menu.path">{{menu.title}}</el-menu-item>
      </el-menu>
      <el-tooltip class="item"
                  effect="dark"
                  content="登出"
                  placement="bottom">
        <i class="logout el-icon-switch-button"
           v-if="currentPath!=='/login'&&this.$store.state.role === 'operator'"
           @click="logOut"></i>
      </el-tooltip>
    </div>
    <router-view class="view-container"></router-view>
  </div>
</template>

<script>
import {
  userRoutes,
  operatorRoutes
} from './router/index'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    currentPath () {
      return this.$route.path
    },
    menuList () {
      if (this.$store.state.role === 'operator') {
        return operatorRoutes
      } else {
        return userRoutes
      }
    }
  },
  watch: {
    $route (to) {
      let routes = userRoutes.map(item => item.path)
      if (routes.indexOf(to.path) > -1) {
        this.$store.commit('changeRole', 'user')
      } else {
        this.$store.commit('changeRole', 'operator')
      }
    }

  },
  methods: {
    logOut () {
      this.$store.commit('resetTimer', 0)
      this.$router.push({
        path: '/login'
      })
    }
  },
  mounted () {
    if (this.$store.state.role === 'operator' && localStorage.getItem('p-alive') === '1') {
      this.$store.commit('resetTimer', 1)
    } else {
      this.$store.commit('resetTimer', 0)
    }
  }
}
</script>

<style lang='scss' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  // background: url("./assets/img/bgContainer.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
.top-menu {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logout {
    cursor: pointer;
    font-size: 24px;
    color: #207c20;
    margin-right: 20px;
    &:hover {
      opacity: 0.8;
    }
  }
}
::v-deep .el-menu.el-menu--horizontal {
  border: none;
}
::v-deep .el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-menu-item {
  border: none;
  &:hover {
    background: transparent !important;
    opacity: 0.8;
  }
}
.view-container {
  overflow: auto;
  box-sizing: border-box;
  flex: 1;
  padding: 10px 20px 0 20px;
}
</style>
