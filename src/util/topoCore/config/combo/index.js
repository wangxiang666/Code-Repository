import itemEvents from '../node/item-event';
import anchorEvent from '../node/anchor-event';
export default G6 => {
  G6.registerCombo('base-combo', {
    draw(cfg, group) {
      cfg.padding = cfg.padding || [20, 20, 20, 20]
      const style = this.getShapeStyle(cfg);
      const shape = group.addShape('rect', {
        attrs: {
          ...style,
          x: -(style.width + cfg.padding[3] - cfg.padding[1]) / 2,
          y: -(style.height + cfg.padding[0] - cfg.padding[2]) / 2,
          width: style.width,
          height: style.height
        },
        draggable: true,
        name: 'combo-keyShape'
      })
      // 添加锚点
      this.initAnchor(cfg, group);
      this.drawAnchor(cfg, group)
      return shape
    },
    // 绘制锚点
    initAnchor(cfg, group) {
      group.anchorShapes = [];
      group.showAnchor = () => {
        group.anchorShapes.forEach(a => a.show());
      };
      group.clearAnchor = () => {
        group.anchorShapes.forEach(a => a.hide());
      };
    },
    drawAnchor(cfg, group) {
      const anchors = this.getAnchorPoints(cfg);
      // 绘制锚点坐标
      anchors && anchors.forEach((p, i) => {
        const x = (cfg.style.width + cfg.padding[3] + cfg.padding[1]) * (p[0] - 0.5);
        const y = (cfg.style.height + cfg.padding[0] + cfg.padding[2]) * (p[1] - 0.5) - (cfg.padding[0] - cfg.padding[2]) / 2;
        /**
         * 绘制三层锚点
         * 最底层: 锚点bg
         * 中间层: 锚点
         * 最顶层: 锚点group, 用于事件触发
         */
        // 视觉锚点
        const anchor = group.addShape('circle', {
          attrs: {
            x,
            y,
            r: 4,
            fill: '#fff',
            stroke: '#1890FF',
            lineWidth: 1
          },
          point: p,
          zIndex: 1,
          name: 'node-anchor-see',
          draggable: false,
          isAnchor: true,
          visible: false,
          index: i
        });

        // 锚点事件触发的元素
        const anchorGroup = group.addShape('circle', {
          attrs: {
            x,
            y,
            r: 10,
            fill: '#fff',
            opacity: 0
          },
          point: p,
          zIndex: 2,
          name: 'node-anchor-event',
          draggable: true,
          isAnchor: true,
          visible: false,
          index: i
        });

        /**
         * 添加锚点事件绑定
         */
        anchorEvent(anchorGroup, group, p);
        group.anchorShapes.push(anchor);
        group.anchorShapes.push(anchorGroup);
        // 查找所有锚点
        group.getAllAnchors = () => {
          return group.anchorShapes.filter(c => c.get('isAnchor') === true);
        };
      });
    },
    afterUpdate: function afterUpdate(cfg, combo) {
      const group = combo.get('group');
      const anchors = group.getAllAnchors()
      anchors.forEach((anchor) => {
        const x = (cfg.style.width + cfg.padding[3] + cfg.padding[1]) * (anchor.get('point')[0] - 0.5);
        const y = (cfg.style.height + cfg.padding[0] + cfg.padding[2]) * (anchor.get('point')[1] - 0.5) - (cfg.padding[0] - cfg.padding[2]) / 2;
        anchor.attr({
          x,
          y
        })
      })

    },
    /* 设置节点的状态，主要是交互状态，业务状态请在 draw 方法中实现 */
    setState(name, value, item) {
      const buildInEvents = [
        'anchorShow',
        'selected'
      ];
      const group = item.getContainer();

      if (group.get('destroyed')) return;
      if (buildInEvents.includes(name)) {
        // 内部this绑定到了当前item实例
        itemEvents[name].call(this, value, group);
      } else {
        console.warn(`warning: ${name} 事件回调未注册!`);
      }
    },
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