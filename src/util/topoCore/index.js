import G6 from '@antv/g6';
import {
  defaultOpt
} from './config/defaultOpt.js'
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
    this.grid = null
    this.snapLine = null
    this.graph = null
    this.minimap = null
    this.tooltip = null
    this.opt = opt
    this.init()
  }
  init() {
    // 添加G6组件
    const {
      grid,
      snapLine,
      minimap,
      tooltip,
      contextMenu,
      toolbar
    } = initTools(G6, this)
    this.grid = grid
    this.snapLine = snapLine
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
      // 画布宽高
      width: this.CANVAS_WIDTH,
      height: this.CANVAS_HEIGHT,
      plugins: [
        this.toolbar,
        // this.grid,
        this.contextMenu,
        this.snapLine,
        this.minimap,
        this.tooltip
      ],
      ...defaultOpt
    });
  }
}