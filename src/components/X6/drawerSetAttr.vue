<!--  -->
<template>
  <div class="drawer-set-attr"
       :class="{'show':drawerStatus}">
    <div class="edit-title">{{isNode?'节点':'连线'}}属性编辑</div>
    <div class="edit-content">
      <el-tabs type="border-card"
               v-model="nodeActive"
               v-if="isNode">
        <el-tab-pane label="样式信息"
                     name="attribute">
          <!-- 如果是文字节点，可以动态拉伸以多行显示 -->
          <div class="block"
               v-if="nodeType==='textWrap'">
            <span class="demonstration">文本内容：</span>
            <el-input v-model="nodeAttr.textWrap"
                      @change="changeAttr('label/textWrap/text',nodeAttr.textWrap)"></el-input>
          </div>
          <!-- 如果是普通节点，label不可换行，就一行显示 -->
          <div class="block"
               v-else>
            <span class="demonstration">文本内容：</span>
            <el-input v-model="nodeAttr.text"
                      @change="changeAttr('label/text',nodeAttr.text)"></el-input>
          </div>
          <div class="block">
            <span class="demonstration">字体大小：</span>
            <el-slider :min="5"
                       :max="32"
                       v-model="nodeAttr.fontSize"
                       @change="changeAttr('label/fontSize',nodeAttr.fontSize)"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">字体颜色：</span>
            <el-color-picker show-alpha
                             v-model="nodeAttr.labelFill"
                             @change="changeAttr('label/fill',nodeAttr.labelFill)"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">填充颜色：</span>
            <el-color-picker show-alpha
                             v-model="nodeAttr.bodyFill"
                             @change="changeAttr('body/fill',nodeAttr.bodyFill)"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">边框类型：</span>
            <el-select v-model="nodeAttr.strokeDasharray"
                       placeholder="请选择"
                       @change="changeAttr('body/strokeDasharray',nodeAttr.strokeDasharray)">
              <el-option v-for="item in lineTypeOpt"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>

          </div>
          <div class="block">
            <span class="demonstration">边框颜色：</span>
            <el-color-picker show-alpha
                             v-model="nodeAttr.bodyStroke"
                             @change="changeAttr('body/stroke',nodeAttr.bodyStroke)"></el-color-picker>
          </div>
        </el-tab-pane>
        <el-tab-pane label="资产信息"
                     v-if="nodeType==='asset'"
                     name="asset">资产信息</el-tab-pane>

      </el-tabs>
      <el-tabs type="border-card"
               v-model="edgeActive"
               v-else>
        <el-tab-pane label="样式信息"
                     name="attributes">
          <div class="block">
            <span class="demonstration">连线粗细：</span>
            <el-slider :min="1"
                       :max="8"
                       v-model="edgeAttr.strokeWidth"
                       @change="changeAttr('line/strokeWidth',edgeAttr.strokeWidth)"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">连线类型：</span>
            <el-select v-model="edgeAttr.strokeDasharray"
                       placeholder="请选择"
                       @change="changeAttr('line/strokeDasharray',edgeAttr.strokeDasharray)">
              <el-option v-for="item in lineTypeOpt"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>

          </div>
          <div class="block">
            <span class="demonstration">连线颜色：</span>
            <el-color-picker show-alpha
                             v-model="edgeAttr.lineStroke"
                             @change="changeAttr('line/stroke',edgeAttr.lineStroke)"></el-color-picker>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Cell } from '@antv/x6'
export default {
  props: {
    drawerStatus: {
      type: Boolean,
      default: false
    },
    //节点还是连线
    isNode: {
      type: Boolean,
      default: false
    },
    currentCell: {
      type: Cell,
      default: () => {
        return null
      }
    }
  },
  computed: {
    nodeType () {
      let nodeData = null
      if (this.isNode) {
        nodeData = this.currentCell.getData()
      }
      return nodeData ? nodeData.nodeType : ''
    }
  },
  data () {
    return {
      nodeActive: 'attribute',
      edgeActive: 'attributes',
      nodeAttr: {
        text: '',
        textWrap: '',
        fontSize: 12,
        labelFill: '#000',
        bodyFill: 'rgba(255,255,255,0)',
        bodyStroke: 'rgba(255,255,255,0)',
        strokeDasharray: '0'
      },
      edgeAttr: {
        lineStroke: '#000',
        strokeWidth: 2,
        strokeDasharray: '0'
      },
      lineTypeOpt: [{
        value: '0',
        label: '实线'
      }, {
        value: '2 2',
        label: '点线'
      }, {
        value: '8 4',
        label: '虚线'
      }]
    };
  },
  watch: {
    currentCell: {
      handler: function (val) {
        if (this.isNode) {
          this.nodeActive = 'attribute'
          let nodeLabel = val.attrs.label
          let nodebody = val.attrs.body
          this.nodeAttr.text = nodeLabel.text
          this.nodeAttr.textWrap = nodeLabel.textWrap ? nodeLabel.textWrap.text : ''
          this.nodeAttr.fontSize = nodeLabel.fontSize
          this.nodeAttr.labelFill = nodeLabel.fill
          this.nodeAttr.bodyFill = nodebody.fill
          this.nodeAttr.bodyStroke = nodebody.stroke
          this.nodeAttr.strokeDasharray = nodebody.strokeDasharray || '0'
        } else {
          this.edgeAttr.lineStroke = val.attrs.line.stroke
          this.edgeAttr.strokeWidth = val.attrs.line.strokeWidth
          this.edgeAttr.strokeDasharray = val.attrs.line.strokeDasharray || '0'
        }
      }
      // immediate:true
    }
  },
  methods: {
    changeAttr (attr, val) {
      this.currentCell.setAttrByPath(attr, val)
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
.drawer-set-attr {
  box-sizing: border-box;
  width: 300px;
  height: 500px;
  position: absolute;
  right: -300px;
  top: 0;
  background: #fff;
  border: 1px solid #dfe3e8;
  z-index: 999;
  transition: transform 0.3s linear;
  .edit-title {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 16px;
    // border-bottom: 1px solid #dfe3e8;
  }
  /deep/.el-tabs--border-card {
    border-left: none;
    box-shadow: none;
  }
  .block {
    display: flex;
    flex-direction: column;
  }
}
.show {
  transform: translateX(-100%);
}
</style>

