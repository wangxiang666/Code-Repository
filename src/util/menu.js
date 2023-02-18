import {
  Graph,
  ToolsView
} from '@antv/x6'
class ContextMenuTool extends ToolsView.ToolItem {
  constructor(option) {
    super()
    this.customOpt = option
    this.knob = null
    this.timer = null
  }

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement('div', false)
      this.knob.style.position = 'absolute'
      this.container.appendChild(this.knob)
    }
    return this
  }

  toggleContextMenu(visible) {
    document.removeEventListener('mousedown', this.onMouseDown)
    if (visible) {
      console.log(this)
      let opt = Object.assign(this.customOpt, this.options.menu)
      this.knob.appendChild(opt.menu)
      document.addEventListener('mousedown', this.onMouseDown)
    }
  }

  updatePosition(e) {
    const style = this.knob.style
    if (e) {
      const pos = this.graph.clientToGraph(e.clientX, e.clientY)
      style.left = `${pos.x}px`
      style.top = `${pos.y}px`
    } else {
      style.left = '-1000px'
      style.top = '-1000px'
    }
  }

  onMouseDown = () => {
    this.timer = window.setTimeout(() => {
      this.updatePosition()
      this.toggleContextMenu(false)
    }, 200)
  }

  onContextMenu({
    e
  }) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = 0
    }
    this.updatePosition(e)
    this.toggleContextMenu(true)
  }

  delegateEvents() {
    this.cellView.on('cell:contextmenu', this.onContextMenu, this)
    return super.delegateEvents()
  }

  onRemove() {
    this.cellView.off('cell:contextmenu', this.onContextMenu, this)
  }
}

ContextMenuTool.config({
  tagName: 'div',
  isSVGElement: false
})

Graph.registerEdgeTool('contextmenu', ContextMenuTool, true)
Graph.registerNodeTool('contextmenu', ContextMenuTool, true)