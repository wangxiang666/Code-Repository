//画布canvas拖曳过程中鼠标变化
export default G6 => {
  G6.registerBehavior('canvas-event', {
    getDefaultCfg() {
      return {};
    },
    shouldBegin(e) {
      return true;
    },
    getEvents() {
      return {
        'canvas:mousemove': 'onCanvasMouseMove',
        'canvas:mousedown': 'onCanvasMouseDown',
        'canvas:mouseup': 'onCanvasMouseUp',
        'canvas:drag': 'onCanvasMouseDown',
        'canvas:dragend': 'onCanvasDragEnd'
      };
    },
    onCanvasMouseMove(e) {
      e.target.get('el').style.cursor = 'grab';
    },
    onCanvasMouseDown(e) {
      // e.target.get('el').style.cursor = 'default';
      e.target.get('el').style.cursor = 'grabbing';
    },
    onCanvasMouseUp(e) {
      e.target.get('el').style.cursor = 'grab';
    },
    onCanvasDragEnd(e) {
      e.target.get('el').style.cursor = 'grab';
    }
  });
};