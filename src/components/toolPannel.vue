<!--  -->
<template>
  <div class='tool-pannel'>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="tool in toolDic"
                        :key="tool.key"
                        :title="tool.title"
                        :name="tool.name">
        <div class="tool-item-container">
          <div v-for="asset in assetsDic[tool.key]"
               class="asset-item"
               :key="asset.assetType">
            <img class="asset-node"
                 draggable="true"
                 :alt="asset.name"
                 :src="`/img/topology/${asset.assetType}.png`"
                 @dragstart="addNode($event,asset)" />
            <div class="asset-label">{{asset.name}}</div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="内置工具"
                        name="7">
        <div class="tool-item-container">
          <div class="asset-item">
            <div class="asset-node combo"
                 draggable="true"
                 @dragstart="addNode($event)" />
            <div class="asset-label">分组</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
import { assetsDic } from '@/util/topoCore/config/material.js'
export default {
  data () {
    return {
      assetsDic,
      activeNames: '1',
      toolDic: [
        {
          title: '工控设备',
          name: '1',
          key: 'industryControl'
        },
        {
          title: '网络设备',
          name: '2',
          key: 'net'
        },
        {
          title: '安防设备',
          name: '3',
          key: 'security'
        },
        {
          title: '终端设备',
          name: '4',
          key: 'terminal'
        },
        {
          title: '服务器设备',
          name: '5',
          key: 'server'
        },
        {
          title: '监控设备',
          name: '6',
          key: 'monitor'
        }
      ]
    };
  },
  methods: {
    addNode (e, asset) {
      e.stopPropagation()
      if (asset) {
        /* 设置拖拽传输数据 */
        e.dataTransfer.setData('dragComponent',
          JSON.stringify(asset)
        );
      }
    }
  },
  mounted () {
    // 阻止默认动作
    document.addEventListener('drop', e => {
      e.preventDefault();
    }, false);

  }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.tool-pannel {
  position: absolute;
  top: 0;
  left: 0;
  width: 170px;
  height: 100%;
  z-index: 10;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  background: #fff;
  overflow: auto;
  transition: transform 0.3s ease-in-out;
  &.hidden {
    transform: translate(-100%, 0);
  }
  /deep/.el-collapse-item__content {
    padding-bottom: 0;
  }
  .tool-item-container {
    background: #f5f5f5;
    display: flex;
    flex-wrap: wrap;
    .asset-item {
      width: 80px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      .asset-node {
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
      .combo {
        border: 1px dashed #000;
      }
      .asset-label {
        width: 75px;
        margin-top: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
  }
}
</style>