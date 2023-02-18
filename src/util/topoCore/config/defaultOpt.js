export const defaultOpt = {
  groupByTypes: false,
  enabledStack: true,
  fitCenter: true,
  // linkCenter: true, //edge全部连接到节点几何中心
  // defaultEdge: {
  //   type: 'polyline', // 扩展了内置边, 有边的事件
  //   style: {
  //     radius: 10,
  //     offset: 10
  //   }
  // },
  defaultCombo: {
    type: 'base-combo',
    /* The minimum size of the combo. combo 最小大小 */
    padding: [80, 30, 30, 30],
    size: [80, 80],
    style: {
      cursor: 'move',
      lineWidth: 1,
      lineDash: [5, 8],
      stroke: '#fff',
      fill: '#fff',
      fillOpacity: 0
    },
    labelCfg: {
      position: 'top',
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
      stroke: '#F6BD16'
    }
  },
  //画布支持的事件（缩放、拖拽等）
  modes: {
    default: [
      //拖曳节点
      {
        type: 'drag-node',
        // enableDelegate: true,
        // enableDebounce: true,
        // enableOptimize: true,
        // delegateStyle: {
        //   opacity: 0.5
        // },
        shouldBegin: e => {
          if (e.target.get('name') === 'node-anchor-event') return false;
          return true;
        }
      },
      //创建边
      {
        type: 'create-edge',
        trigger: 'drag',
        shouldBegin: (e, self) => {
          if (e.target && e.target.get('name') !== 'node-anchor-event') return false;
          self.graph.set('sourceAnchorIdx', e.target.get('index'));
          return true;
        },
        shouldEnd: (e, self) => {
          if (e.target && e.target.get('name') !== 'node-anchor-event') return false;
          if (e.target) {
            self.graph.set('targetAnchorIdx', e.target.get('index'));
            return true;
          }
          self.graph.set('targetAnchorIdx', undefined);
          return true;
        }
      },
      //拖曳combo
      {
        type: 'drag-combo',
        shouldUpdate: e => {
          if (e.target.get('name') === 'node-anchor-event') return false;
          return true;
        }
      },
      {
        type: 'drag-canvas',
        enableOptimize: true
      },
      //滚轮缩放画布
      {
        type: 'zoom-canvas',
        enableOptimize: true,
        optimizeZoom: 0.9
      },
      'brush-select', //按下shift多选元素
      'click-select', //点击选中节点
      //自定义behavior
      'canvas-event', //画布canvas拖曳过程鼠标变化
      'show-anchor', //锚点显隐逻辑控制
      'drop-add-node'

    ]
    // default: ['drag-canvas', 'drag-shadow-node', 'canvas-event', 'delete-item', 'select-node', 'hover-node', 'active-edge']

  }
}