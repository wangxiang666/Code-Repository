export default G6 => {
  G6.registerCombo('base-combo', {
    draw(cfg, group) {
      let offectX = cfg.position.x + cfg.size[0] / 2 - cfg.x
      let offecty = cfg.position.y + cfg.size[1] / 2 - cfg.y
      const self = this
      const style = self.getShapeStyle(cfg);
      style.x = style.x + offectX
      style.y = style.y + offecty
      const shape = group.addShape('rect', {
        attrs: {
          ...style
        },
        draggable: true,
        name: 'combo-keyShape'
      })
      return shape
    },
    afterDraw(cfg, group) {},
    update(cfg, combo) {},
    afterUpdate(cfg, combo) {},
    /* 获取锚点（相关边的连入点） */
    getAnchorPoints(cfg) {
      return cfg.anchorPoints || [
        [0.5, 0],
        [1, 0.5],
        [0.5, 1],
        [0, 0.5]
      ];
    }
  }, 'rect')

}