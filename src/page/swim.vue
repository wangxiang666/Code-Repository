<!--  -->
<template>
  <div class="topo-container"
       @click.stop="hideFn">
    <drawerSetAttr :currentCell="currentCell"
                   :isNode="currentCellIsNode"
                   :drawerStatus="drawerStatus"></drawerSetAttr>
    <MenuBar v-if="showContextMenu"
             ref="menuBar"
             @callBack="contextMenuFn" />
    <div id="stencil"
         class="graph-stencil"></div>

    <div class="container">
      <el-button-group class="menu-btn-group">
        <el-button size="mini"
                   :disabled="!canUndo"
                   icon="el-icon-refresh-left"
                   @click="graphUndo">回退</el-button>
        <el-button size="mini"
                   :disabled="!canRedo"
                   icon="el-icon-refresh-right"
                   @click="graphRedo">前进</el-button>
        <el-button size="mini"
                   :disabled="!hasSelectionCell"
                   icon="el-icon-delete"
                   @click="deleteCells">删除</el-button>
        <el-button size="mini"
                   icon="el-icon-zoom-out"
                   @click="graphScale(false)"></el-button>
        <el-button size="mini"
                   disabled>{{currentScale}}</el-button>
        <el-button size="mini"
                   icon="el-icon-zoom-in"
                   @click="graphScale(true)"></el-button>
        <el-button size="mini"
                   @click="getjson">获取数据</el-button>
      </el-button-group>
      <div id="graph-container"
           class="container">

      </div>

      <div id="minimap"
           class="topo-minimap-X6"></div>
    </div>
  </div>
</template>

<script>
import { Graph, Shape } from '@antv/x6'
import { Stencil } from '@antv/x6-plugin-stencil'
import { Transform } from '@antv/x6-plugin-transform'
import { Selection } from '@antv/x6-plugin-selection'
import { Snapline } from '@antv/x6-plugin-snapline'
import { History } from '@antv/x6-plugin-history'
import { MiniMap } from "@antv/x6-plugin-minimap";
import { Clipboard } from '@antv/x6-plugin-clipboard'
import { Keyboard } from '@antv/x6-plugin-keyboard'
import { assetsDic } from '@/util/topoCore/config/material.js'
import insertCss from 'insert-css'
import MenuBar from '../components/X6/menuBar'
import drawerSetAttr from '../components/X6/drawerSetAttr'
import registryNode from '@/util/X6topo/registryNode.js'
import { jsonData } from '@/util/X6topo/swim.js'
// require('../util/menu.js')
let graph = null
export default {
  components: { MenuBar, drawerSetAttr },
  data () {
    return {
      currentScale: '100%',
      hasSelectionCell: false,
      canUndo: false,
      canRedo: false,
      drawerStatus: false,
      currentCell: {},
      currentCellIsNode: false,
      showContextMenu: false,
      toolDic: [
        {
          title: '工控设备',
          name: 'industryControl'
        },
        {
          title: '网络设备',
          name: 'net'
        },
        {
          title: '安防设备',
          name: 'security'
        },
        {
          title: '终端设备',
          name: 'terminal'
        },
        {
          title: '服务器设备',
          name: 'server'
        },
        {
          title: '监控设备',
          name: 'monitor'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    graphScale (flag) {
      let factor = flag ? 0.5 : -0.5
      graph.zoom(factor, {
        minScale: 0.5,
        maxScale: 3
      })
    },
    //回退操作
    graphUndo () {
      graph.undo()
    },
    //前进操作
    graphRedo () {
      graph.redo()
    },
    //隐藏右键功能菜单
    hideFn () {
      this.showContextMenu = false
    },
    //获取json数据
    getjson () {
      console.log(graph.toJSON())
    },
    //初始化画布
    initGraph () {
      //  初始化画布
      graph = new Graph({
        container: document.getElementById('graph-container'),
        grid: 5,
        virtual: false,
        panning: true,
        autoResize: true,
        mousewheel: {
          enabled: true,
          zoomAtMousePosition: true,
          modifiers: 'ctrl',
          minScale: 0.5,
          maxScale: 3
        },
        connecting: {
          router: {
            name: 'normal',
            args: {
              padding: 1
            }
          },
          connector: {
            name: 'rounded',
            args: {
              radius: 8
            }
          },
          anchor: 'center',
          connectionPoint: 'anchor',
          allowBlank: false,
          allowNode: false,
          allowEdge: true,
          allowMulti: false,
          highlight: true,
          snap: {
            radius: 20
          },
          createEdge () {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  strokeWidth: 2,
                  // targetMarker: {
                  //   name: 'classic',
                  //   width: 12,
                  //   height: 8
                  // },
                  targetMarker: null
                }
              },
              zIndex: 9
            })
          },
          validateConnection ({ targetMagnet }) {
            return !!targetMagnet
          }
        },
        embedding: {
          enabled: true,
          frontOnly: false,
          validate: ({ child, parent, childView, parentView }) => {
            // console.log(child, parent, childView, parentView)
            return parent.shape !== 'custom-image'
          }
        },
        highlighting: {
          embedding: {
            name: 'stroke',
            args: {
              attrs: {
                stroke: '#31d0c6'
              }
            }
          },
          // 连接桩可以被连接时在连接桩外围围渲染一个包围框
          magnetAvailable: {
            name: 'stroke',
            args: {
              attrs: {
                fill: '#fff',
                stroke: '#31d0c6'
              }
            }
          },
          magnetAdsorbed: {
            name: 'stroke',
            args: {
              attrs: {
                fill: '#5F95FF',
                stroke: '#5F95FF'
              }
            }
          }
        },
        translating: {
          restrict (cellView) {
            const cell = cellView.cell
            const parentId = cell.prop('parent')
            if (parentId) {
              const parentNode = graph.getCellById(parentId)
              if (parentNode) {
                return parentNode.getBBox().moveAndExpand({
                  x: 0,
                  y: 30,
                  width: 0,
                  height: -30
                })
              }
            }
            return cell.getBBox()
          }
        }
      })
      insertCss(`
      .x6-widget-transform-resize {
        border-radius: 0;
      }
      `)
      registryNode(Graph)
      this.usePlugins()
      this.initStencil()
      this.initShortCut()
      this.initGraphEvent()
      this.getData()
    },
    //添加X6插件
    usePlugins () {
      graph
        .use(new Transform({
          resizing: {
            enabled: true
          },
          rotating: true
        }))
        .use(
          new Clipboard({
            enabled: true
          })
        ).use(
          new Keyboard({
            enabled: true,
            global: true
          })
        )
        .use(new Selection({
          enabled: true,
          rubberband: true,
          multiple: true,
          showNodeSelectionBox: true,
          multipleSelectionModifiers: ['shift'],
          modifiers: ['shift'],
          pointerEvents: 'none'
        }))
        .use(new Snapline({
          enabled: true
        }))
        .use(new History({
          enabled: true,
          beforeAddCommand: (event, args) => {
            return ['tools', 'zIndex'].indexOf(args.key) === -1
          }
        }))
        .use(
          new MiniMap({
            container: document.getElementById("minimap"),
            width: 300,
            height: 260,
            padding: 10
          })
        )
    },
    //根据html字符串生成dom节点
    // createDom (htmlStr) {
    //   var div = document.createElement("div");
    //   div.innerHTML = htmlStr;
    //   return div.childNodes[0];
    // },
    //初始化左侧拖曳生成节点工具栏
    initStencil () {
      const stencil = new Stencil({
        title: '节点组件',
        target: graph,
        search (cell, keyword) {
          return cell.attrs.label.text.indexOf(keyword) !== -1
        },
        placeholder: '通过名称搜索',
        notFoundText: '没有找到相应组件',
        stencilGraphWidth: 280,
        stencilGraphHeight: 0,
        stencilGraphPadding: 20,
        collapsable: true,
        groups: [...this.toolDic, {
          title: '常用工具',
          name: 'customTools'
        }],
        layoutOptions: {
          columns: 2,
          columnWidth: 135
        }
      })
      document.getElementById('stencil').appendChild(stencil.container)
      const stencilNode = graph.createNode({
        shape: 'custom-image',
        data: {
          nodeType: 'asset'
        }
      })
      this.toolDic.forEach(tool => {
        const nodeList = assetsDic[tool.name].map(item => {
          const node = stencilNode.clone()
          return node.setAttrs({
            label: {
              text: item.name
            },
            image: {
              xlinkHref: `/img/topology/${item.assetType}.png`
            }
          }, { silent: true })
        })
        stencil.load(nodeList, tool.name)
      })
      this.addDIYTools(stencil)
    },
    //左侧添加除资产节点外公共的自定义工具节点
    addDIYTools (stencil) {
      const rect = graph.createNode({
        shape: 'custom-rect'
      })
      const circle = graph.createNode({
        shape: 'custom-circle'
      })
      const path = graph.createNode({
        shape: 'custom-path'
      })
      const build = graph.createNode({
        shape: 'custom-image',
        data: {
          nodeType: 'build'
        },
        attrs: {
          label: {
            text: '建筑物'
          },
          image: {
            xlinkHref: `/img/topology/build.png`
          }
        }
      })
      const database = graph.createNode({
        shape: 'custom-image',
        data: {
          nodeType: 'database'
        },
        attrs: {
          label: {
            text: '数据库'
          },
          image: {
            xlinkHref: `/img/topology/database.png`
          }
        }
      })
      const text = graph.createNode({
        shape: 'custom-text'
      })
      stencil.load([rect, circle, path, build, database, text], 'customTools')
    },
    //绑定快捷键
    initShortCut () {
      graph.bindKey(['ctrl+c', 'command+c'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.copy(cells)
        }
        return false
      })

      graph.bindKey(['ctrl+v', 'command+v'], () => {
        if (!graph.isClipboardEmpty()) {
          const cells = graph.paste({ offset: 32 })
          graph.cleanSelection()
          graph.select(cells)
        }
        return false
      })
      graph.bindKey(['delete', 'backspace'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          this.deleteCells()
        }
        return false
      })
    },
    //添加监听事件
    initGraphEvent () {
      graph.on('cell:mousedown', ({ cell }) => {
        this.currentCell = cell
        this.currentCellIsNode = graph.isNode(cell)
        this.drawerStatus = true
      })
      this.addNodeEvent()
      this.addEdgeEvent()
      this.addGraphEvent()
    },
    //监听node事件
    addNodeEvent () {
      const showPorts = (ports, show) => {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
          ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
      }
      graph.on('node:mouseenter', ({ node }) => {
        /** 如果是可嵌套节点，那么需要将最外层节点放到最最底层，然后一级一级慢慢提升，
         防止掩盖资产节点,这段逻辑比较重要，但是比较繁琐，有思路可以优化 start */
        // if (node.getData().nodeType === 'shape') {
        //   let parent = node.getParent()
        //   if (parent) {
        //     if (node.getZIndex() - parent.getZIndex() !== 1) {
        //       node.setZIndex(parent.getZIndex() + 1)
        //     }
        //   } else {
        //     node.setZIndex(-9999)
        //   }

        // }
        /** 如果是可嵌套节点，那么需要将最外层节点放到最最底层，然后一级一级慢慢提升，防止掩盖资产节点 end */
        const container = document.getElementById('graph-container')
        const ports = container.querySelectorAll('.x6-port-body')
        showPorts(ports, true)
      })
      graph.on('node:mouseleave', ({ cell }) => {
        const container = document.getElementById('graph-container')
        const ports = container.querySelectorAll(
          '.x6-port-body'
        )
        showPorts(ports, false)
      })
      graph.on('node:contextmenu', ({ x, y, node }) => {
        this.showContextMenu = true
        const p = graph.localToPage(x, y)
        this.$nextTick(() => {
          this.$refs.menuBar.initFn(p.x, p.y - 60, node)
        })
      })
      // 由于G6无法自动根据svg path包围框自动改变path，所以这里通过X6实时获取path信息以保存（主要作用于云朵等形状）
      graph.on('node:resized', ({ node, view }) => {
        if (node.shape === 'custom-path') {
          node.setData({ G6Path: view.findOne('path').getAttribute('d') })
        }
      })
      graph.on('node:added', ({ node }) => {
        if (node.shape === 'custom-path') {
          let view = graph.findView(node)
          setTimeout(() => {
            node.setData({ G6Path: view.findOne('path').getAttribute('d') })
          }, 500)
        }
      })
      graph.on('node:embedded', ({ node, currentParent }) => {
        console.log(graph.isSelected(node), 1231231)
        if (graph.isSelected(node)) {
          graph.unselect(node)
          let nodes = graph.getSelectedCells()
          let preChildren = currentParent.getChildren()
          currentParent.setChildren(nodes.concat(preChildren), { silent: true })
          graph.cleanSelection()
        }
      })
    },
    //监听edge事件
    addEdgeEvent () {
      graph.on('edge:mouseenter', ({ cell }) => {
        cell.addTools([{
          name: 'vertices',
          args: {
            stopPropagation: false
          }
        }, {
          name: 'button-remove',
          args: { distance: 20 }
        }], 'onhover')
      })
      graph.on('edge:mouseleave', ({ cell }) => {
        if (cell.hasTools('onhover')) {
          cell.removeTools()
        }
      })
    },
    //监听graph事件
    addGraphEvent () {
      graph.on("blank:click", () => {
        this.drawerStatus = false
      })
      graph.on('history:change', () => {
        this.canRedo = graph.canRedo()
        this.canUndo = graph.canUndo()
      })
      graph.on("selection:changed", ({ selected }) => {
        this.hasSelectionCell = !!selected.length
      })
      graph.on("translate", () => {
        graph.cleanSelection()
      })
      graph.on("scale", ({ sx }) => {
        this.currentScale = Math.floor(sx * 100) + '%'
      });
    },
    //右键菜单功能清单
    contextMenuFn (key, cell) {
      this.showContextMenu = false
      switch (key) {
        case 'delCell':
          break
      }
    },
    //删除节点或连线
    deleteCells () {
      //判断是否框选节点进行批量删除
      if (!graph.isSelectionEmpty()) {
        this.$confirm("确定要删除所选节点?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          closeOnClickModal: !1
        }).then(() => {
          graph.removeCells(graph.getSelectedCells())
        }).catch(() => { })
      }
    },
    //获取拓扑
    getData () {
      const cells = []
      jsonData.forEach((item) => {
        if (item.shape === 'lane-edge') {
          cells.push(graph.createEdge(item))
        } else {
          cells.push(graph.createNode(item))
        }
      })
      graph.resetCells(cells)
      graph.zoomToFit({ padding: 10, maxScale: 1 })
    }
  },
  mounted () {
    this.initGraph()
  },
  beforeDestroy () {
    //销毁画布
    graph.dispose()
  } //生命周期 - 销毁之前
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.topo-container {
  position: relative;
  width: 100%;
  overflow: hidden !important;
}
.container {
  z-index: 0;
  position: relative;
  width: calc(100% - 280px);
  float: left;
  .menu-btn-group {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
}
.topo-minimap-X6 {
  position: absolute;
  bottom: 0;
  right: 0;
  border: 1px solid #dfe3e8;
}
.graph-stencil {
  width: 280px;
  height: 100%;
  position: relative;
  float: left;
}
.x6-widget-transform-resize {
  border-radius: 0;
}
</style>