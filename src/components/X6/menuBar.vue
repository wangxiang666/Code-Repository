<template>
  <el-card class="box-card"
           :style="{'left':x+'px','top':y+'px'}"
           @click.stop=""
           style="padding: 0;">
    <div class="menu-item"
         v-for="menu in menuItem.node"
         :key="menu.key"
         @click.stop="callBack(menu.key)">
      {{menu.name}}
    </div>
  </el-card>
</template>

<script>


export default {
  name: "MenuBar",
  data () {
    return {
      x: '',
      y: '',
      cell: {},
      menuItem: {
        edge: [
          // {
          //   name: '编辑属性',
          //   key: 'editAttr'
          // }
        ],
        node: [
          // {
          //   name: '编辑属性',
          //   key: 'editAttr'
          // },
          {
            name: '查看资产详情',
            key: 'viewAssetDetail'
          },
          {
            name: '查看通连关系',
            key: 'viewLink'
          },
          {
            name: '查看监控详情',
            key: 'viewMonitorDetail'
          },
          {
            name: '关联资产设备',
            key: 'associate'
          }
        ]
      }
    };
  },
  // computed: {
  //   getMenu () {
  //     let type = this.cell.shape === 'edge' ? 'edge' : 'node'
  //     return this.menuItem[type]
  //   }
  // },
  methods: {
    initFn (x, y, node) {
      this.x = parseInt(x)
      this.y = parseInt(y)
      if (node) {
        this.cell = node
      } else {
        this.cell = null
      }

    },
    callBack (fnKey) {
      this.$emit('callBack', fnKey, this.cell)
    }
  }
};
</script>
<style scoped>
.box-card {
  position: absolute;
  z-index: 112;
}

.box-card ::v-deep .el-card__body {
  padding: 0;
}

.menu-item {
  padding: 8px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.menu-item:hover {
  color: #ffffff;
  background-color: #409eff;
}
</style>
