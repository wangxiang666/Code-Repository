import G6 from '@antv/g6';
import {
  initTools
} from './config/tools.js'
import registry from './config/registry.js'
export default class Topo {
  constructor(el, opt) {
    this.containerId = el
    this.container = document.getElementById(el);
    this.CANVAS_WIDTH = this.container.scrollWidth;
    this.CANVAS_HEIGHT = (this.container.scrollHeight || 500) - 30;
    this.contextMenu = null
    this.graph = null
    this.minimap = null
    this.tooltip = null
    this.opt = opt
    this.layout = null
    this.init()
  }
  init() {
    // 添加G6组件
    const {
      minimap,
      tooltip,
      contextMenu,
      toolbar
    } = initTools(G6, this)
    this.minimap = minimap
    this.tooltip = tooltip
    this.contextMenu = contextMenu
    this.toolbar = toolbar
    registry(G6) // 注册节点、交互
    this.initInstence() // 初始化G6实例
  }
  initInstence() {
    this.graph = new G6.Graph({
      container: this.containerId,
      pixelRatio: 2,
      autoPaint: false,
      groupByTypes: false,
      enabledStack: true,
      fitCenter: true,
      fitView: true,
      // 画布宽高
      width: this.CANVAS_WIDTH,
      height: this.CANVAS_HEIGHT,
      plugins: [
        this.toolbar,
        this.contextMenu,
        this.minimap,
        this.tooltip
      ],
      // layout: {
      //   type: 'comboCombined',
      //   comboPadding: 0,
      //   innerLayout: new G6.Layout['layoutByPoint']({
      //     type: 'inner'
      //   }),
      //   outerLayout: new G6.Layout['layoutByPoint']({
      //     type: 'out'
      //   }),
      //   onLayoutEnd: (a) => { // 可选
      //     // a.map(item => {
      //     //   item.x = item.position.x
      //     //   item.y = item.position.y
      //     // })
      //     // console.log(a)
      //   }
      // },
      defaultCombo: {
        type: 'base-combo',
        padding: [0, 0, 0, 0],
        style: {
          cursor: 'move',
          lineWidth: 1,
          lineDash: [5, 8],
          stroke: '#000',
          fill: '#fff'
        },
        labelCfg: {
          position: 'center',
          style: {
            fontSize: 12,
            fill: '#fff'
          }
        }
      },
      defaultEdge: {
        type: 'polyline',
        style: {
          // radius: 10,
          // offset: 0,
          // endArrow: true,
          stroke: '#A2B1C3'
        }
      },
      //画布支持的事件（缩放、拖拽等）
      modes: {
        default: [
          //拖曳节点
          // {
          //   type: "drag-node",
          //   onlyChangeComboSize: true
          // },
          //拖曳combo
          {
            type: "drag-combo"
            // onlyChangeComboSize: true
          },
          {
            type: 'drag-canvas'
            // enableOptimize: true
          },
          //滚轮缩放画布
          {
            type: 'zoom-canvas',
            // enableOptimize: true,
            optimizeZoom: 0.9
          },
          // 'brush-select', //按下shift多选元素
          'click-select', //点击选中节点
          //自定义behavior
          'canvas-event' //画布canvas拖曳过程鼠标变化

        ]
        // default: ['drag-canvas', 'drag-shadow-node', 'canvas-event', 'delete-item', 'select-node', 'hover-node', 'active-edge']

      }
    });
  }
}