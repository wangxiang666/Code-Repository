<!--  -->
<template>
  <div>
    <el-button @click="getdata">查看当前数据</el-button>
    <div id="container"
         class="container"
         @dragenter.prevent
         @dragover.prevent>
      <div id="topo-minimap"
           class="topo-minimap"></div>
    </div>
  </div>
</template>

<script>
import Topo from '@/util/G6Topo/index.js';
import { jsonData } from '@/util/X6topo/data.js'
let topoInstance = null
export default {
  methods: {
    init () {
      topoInstance = new Topo('container')
      let dData = {
        nodes: [],
        edges: [],
        combos: []
      }
      jsonData.cells.forEach(cell => {
        let points = []
        //#region 节点动态属性（样式）赋值
        let { id, attrs, shape, size, zIndex, data, position, vertices, source, target } = cell
        //#region  一些编辑的属性取整（位置信息、宽高等）因为都是自编辑的，可能小数位很长，会导致G6渲染残影 
        let style = size ? { width: parseInt(size.width), height: parseInt(size.height) } : {}
        if (position) {
          position = {
            x: parseInt(position.x),
            y: parseInt(position.y)
          }
        }
        //#endregion 属性取整结束
        if (attrs.body) {
          style.fill = attrs.body.fill ? attrs.body.fill : 'transparent'
          style.stroke = attrs.body.stroke ? attrs.body.stroke : '#4e5051'
          style.lineDash = attrs.body.strokeDasharray ? attrs.body.strokeDasharray.split(' ') : []
        }
        let labelCfg = {
          position: 'bottom',
          style: {
            fontSize: 12,
            fill: '#000',
            textAlign: 'center',
            textBaseline: 'middle',
            cursor: 'move'
          }
        }
        if (attrs.label) {
          let { fill, fontSize } = attrs.label
          labelCfg.style.fill = fill || '#000'
          labelCfg.style.fontSize = fontSize || 12
        }
        //#endregion 
        switch (shape) {
          case 'custom-image':
            dData.nodes.push({
              id,
              zIndex,
              shape,
              style,
              labelCfg,
              position,
              comboId: cell.parent,
              label: attrs.label.text,
              type: 'img-node',
              size: [size.width, size.height],
              ...position,
              nodeType: attrs.image.xlinkHref
            })
            break;
          // case 'custom-path':
          //   dData.nodes.push({
          //     id,
          //     zIndex,
          //     shape,
          //     style,
          //     labelCfg,
          //     position,
          //     path: data.G6Path,
          //     label: attrs.label.text,
          //     size: [size.width, size.height],
          //     ...position,
          //     type: 'path-node'
          //   })
          //   break;
          case 'custom-text':
            dData.nodes.push({
              id,
              zIndex,
              shape,
              style,
              position,
              labelCfg,
              comboId: cell.parent,
              label: attrs.label.textWrap.text,
              size: [size.width, size.height],
              ...position,
              type: 'rect-node'
            })
            break;
          case 'custom-rect':
            dData.combos.push({
              id,
              zIndex,
              shape,
              style,
              position,
              labelCfg,
              size: [size.width, size.height],
              fixCollapseSize: [20, 20],
              // fixSize: [size.width, size.height],
              // x: position.x + size.width / 2,
              // y: position.y + size.height / 2,
              label: attrs.label.text,
              type: 'base-combo',
              collapsed: false
            })
            break;
          // case 'custom-rect':
          //   dData.nodes.push({
          //     id,
          //     zIndex,
          //     shape,
          //     style,
          //     labelCfg,
          //     label: attrs.label.text,
          //     type: 'rect-node',
          //     ...position
          //   })
          //   break;
          case 'edge':
            if (vertices) {
              points = vertices.map(point => {
                return {
                  x: parseInt(point.x),
                  y: parseInt(point.y)
                }
              })
            }
            dData.edges.push({
              source: source.cell,
              target: target.cell,
              sourceAnchor: source.port,
              targetAnchor: target.port,
              controlPoints: points,
              zIndex,
              style: {
                stroke: attrs.line.stroke || '#4e5051',
                lineDash: attrs.line.strokeDasharray ? attrs.line.strokeDasharray.split(' ') : [],
                lineWidth: attrs.line.strokeWidth || 2
              }
            })
            break;
        }
      })

      topoInstance.graph.read(dData)
      //#region 将节点、连线通过X6的数据中zIndex进行层级排序，要不然会导致显示层级有问题，严重影响性能，后面需要优化 
      // const edges = topoInstance.graph.getEdges()
      // const nodes = topoInstance.graph.getNodes()
      // let items = nodes.concat(edges)
      // let sortItems = items.sort((a, b) => a._cfg.keyShape.cfg.zIndex - b._cfg.keyShape.cfg.zIndex)
      // sortItems.forEach(item => {
      //   item.toFront()
      // })
      //#endregion 排序结束 
    },
    getdata () {
      console.log(topoInstance.graph.save())
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
      if (typeof window !== 'undefined')
        window.onresize = () => {
          const graph = topoInstance.graph
          let container = topoInstance.container
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        }
    })
  },
  beforeDestroy () {
    topoInstance.graph.destroy();
  }
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
.container {
  // background: #fff;
  z-index: 0;
  position: relative;
  height: 800px;
  // background: #fff;
  .topo-minimap {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
}
.g6-component-contextmenu {
  position: absolute;
  z-index: 2;
  list-style-type: none;
  background-color: #363b40;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  width: fit-content;
  transition: opacity 0.2s;
  text-align: center;
  padding: 0px 20px 0px 20px;
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.6);
  border: 0px;
}
.g6-component-contextmenu ul {
  padding-left: 0px;
  margin: 0;
}
.g6-component-contextmenu li {
  cursor: pointer;
  list-style-type: none;
  list-style: none;
  margin-left: 0;
  line-height: 38px;
}
.g6-component-contextmenu li:hover {
  color: #aaaaaa;
}
</style>