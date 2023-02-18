<!--  -->
<template>
  <div>
    <!-- <el-button @click="getdata">查看当前数据</el-button> -->
    <div id="container"
         class="container"
         @dragenter.prevent
         @dragover.prevent>
      <toolPannel></toolPannel>
      <div id="topo-minimap"
           class="topo-minimap"></div>
    </div>
  </div>
</template>

<script>
import topo from '@/util/topoCore/index.js';
import toolPannel from '@/components/toolPannel.vue'
import { jsonData } from '@/util/X6topo/data.js'
let topoInstance = null
export default {
  components: { toolPannel },
  methods: {
    init () {
      topoInstance = new topo('container')
      let dData = {
        nodes: [],
        edges: [],
        combos: []
      }
      jsonData.cells.forEach(cell => {
        if (cell.shape === 'custom-image') {
          dData.nodes.push({
            id: cell.id,
            label: cell.attrs.label.text,
            type: 'img-node',
            nodeType: cell.attrs.image.xlinkHref,
            ...cell.position
          })
        } else if (cell.shape === 'edge') {
          let points = []
          if (cell.vertices) {
            points = cell.vertices.map(point => {
              return {
                x: point.x - 20,
                y: point.y - 20
              }
            })
          }
          dData.edges.push({
            source: cell.source.cell,
            target: cell.target.cell,
            sourceAnchor: cell.source.port.split('-')[0],
            targetAnchor: cell.target.port.split('-')[0],
            controlPoints: points
          })
        }
      })
      topoInstance.graph.read(dData)
      this.initGraphEventWithVue()
      // fetch('https://gw.alipayobjects.com/os/basement_prod/da5a1b47-37d6-44d7-8d10-f3e046dabf82.json')
      //   .then((res) => res.json())
      //   .then((data) => {
      //     data.nodes.forEach((node) => {
      //       node.label = node.olabel;
      //       node.nodeType = 'terminal_unkown_device'
      //       node.type = 'img-node'
      //     });
      //     dData = Object.freeze(data)
      //     topoInstance.graph.read(dData)
      //     this.initGraphEventWithVue()
      //   });
    },
    getdata () {
      console.log(topoInstance.graph.save())
    },
    initGraphEventWithVue () {
      const graph = topoInstance.graph
      graph.on('on-node-select', value => {
        console.log(value)
      })
      graph.on('afteradditem', e => {
        let sourceAnchorIdx = graph.get('sourceAnchorIdx')
        if (e.item && e.item.getType() === 'edge' && typeof sourceAnchorIdx !== 'undefined') {
          graph.updateItem(e.item, {
            sourceAnchor: sourceAnchorIdx
          }, false);
          //这里不可入操作栈，否则撤销前进会报错且撤销需要两次
        }
      })
      graph.on('aftercreateedge', e => {
        let targetAnchorIdx = graph.get('targetAnchorIdx')
        if (typeof targetAnchorIdx !== 'undefined') {
          graph.updateItem(e.edge, {
            sourceAnchor: graph.get('sourceAnchorIdx'),
            targetAnchor: targetAnchorIdx
          }, false)
          //这里不可入操作栈，否则撤销前进会报错且撤销需要两次
        }
      })
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
    border: 1px solid rgba(255, 255, 255, 0.6);
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