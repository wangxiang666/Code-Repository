export default G6 => {
  G6.registerBehavior('show-anchor', {
    getEvents() {
      return {
        'node:mouseenter': 'showAnchor',
        'node:mouseleave': 'hideAnchor',
        'node:dragenter': 'showAnchor',
        'node:dragleave': 'hideAnchor',
        'node:dragstart': 'showAnchor',
        'node:dragout': 'hideAnchor',
        'combo:mouseenter': 'showAnchor',
        'combo:mouseleave': 'hideAnchor',
        'combo:dragenter': 'showAnchor',
        'combo:dragleave': 'hideAnchor',
        'combo:dragstart': 'showAnchor',
        'combo:dragout': 'hideAnchor'
      };
    },
    shouldBegin(e) {
      return true;
    },
    showAnchor(e) {
      if (!this.shouldBegin(e)) return;
      // 显示当前节点的锚点
      this.graph.setItemState(e.item, 'anchorShow', true); // 二值状态
    },
    hideAnchor(e) {
      if (!this.shouldBegin(e)) return;
      // 将锚点再次隐藏
      this.graph.setItemState(e.item, 'anchorShow', false)
    }
  });
};