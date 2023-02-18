export default G6 => {
  G6.registerBehavior('drop-add-node', {
    getEvents() {
      return {
        'canvas:drop': 'graphDrop',
        'canvas:click': 'graphClick'
      }
    },
    shouldBegin(e) {
      return true;
    },
    graphDrop(e) {
      e.preventDefault()
      const {
        originalEvent
      } = e
      if (originalEvent.dataTransfer) {
        const transferData = originalEvent.dataTransfer.getData('dragComponent');
        if (transferData) {
          this.insertNode(transferData, e)
        }
      }
    },
    graphClick(e) {
      console.log(e, 123)
    },
    insertNode(transferData, {
      x,
      y
    }) {
      let asset = JSON.parse(transferData)
      const model = {
        id: `node--${new Date().getTime()}`,
        name: asset.name,
        nodeType: asset.assetType,
        type: 'img-node',
        label: '255.255.255.255',
        alert: 1,
        // 坐标
        x,
        y
      };
      const model2 = {
        id: `combo--${new Date().getTime()}`,
        label: '办公区一楼',
        type: 'base-combo',
        // 坐标
        x,
        y
      };
      this.graph.addItem('node', model);
      // this.graph.addItem('combo', model2);
    }
  })
}