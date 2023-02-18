/**
 * @author claude
 * @date 2020/3/15
 * @description 注册基础节点, 其他节点都在此基础上继承和扩展
 */

import itemEvents from './item-event';
import defaultStyles from '../defaultStyles';

const {
  nodeLabelStyles,
  nodeStateStyles
} = defaultStyles;

function getStyle(options, cfg) {
  return {
    ...cfg,
    // 自定义默认样式
    ...options,
    // 当前节点样式
    ...cfg.style,
    // 文本配置
    labelCfg: {
      ...nodeLabelStyles,
      ...cfg.labelCfg
    },
    ...nodeStateStyles
  };
}

/*
 * 注册基础node => 添加锚点/图标 => 绘制node => 初始化node状态 => node动画(设置交互动画)
 */
export default G6 => {
  G6.registerNode('base-node', {
    getShapeStyle(cfg) {
      const width = cfg.style.width || 40;
      const height = cfg.style.height || 40;
      return getStyle.call(this, {
        width,
        height,
        cursor: 'move',
        x: 0,
        y: 0
      }, cfg);
    },
    /* 绘制节点，包含文本 */
    draw(cfg, group) { // 元素分组
      // 合并外部样式和默认样式
      const attrs = this.getShapeStyle(cfg, group);
      //图片节点
      if (this.type === 'img-node') {
        attrs.img = cfg.nodeType

      }
      //svg path自定义节点
      if (this.type === 'path-node') {
        attrs.path = cfg.path
        attrs.stroke = '#000'
        attrs.fill = 'transparent'
        attrs.lineWidth = 1
      }
      // 添加节点
      const shape = group.addShape(this.shapeType, { // shape 属性在定义时返回
        className: `${this.shapeType}-shape`,
        draggable: true,
        name: `node-${this.shapeType}`,
        attrs,
        zIndex: cfg.zIndex
      });
      // 添加文本节点
      this.addLabel(cfg, group, attrs);
      return shape;
    },
    // afterDraw(cfg, group) {
    //   console.log('afterDraw', cfg, group)
    // },
    update(cfg, combo) {
      console.log('update', cfg, combo)

      // const rect = combo.getKeyShape()
      // rect.attr({
      //   width: cfg.size[0],
      //   height: cfg.size[1]
      // })

    },
    /* 添加文本节点 */
    addLabel(cfg, group, attrs) {
      let flag = ['custom-rect', 'custom-path', 'custom-text'].indexOf(cfg.shape) > -1

      const {
        width,
        height,
        label,
        labelCfg
      } = attrs;
      let position = flag ? {
        x: width / 2,
        y: height / 2
      } : {
        x: width / 2,
        y: height + 10
      }
      group.addShape('text', {
        attrs: {
          text: label,
          ...position,
          ...labelCfg.style
        },
        className: 'node-text',
        draggable: true,
        name: 'node-label'
      });
    },

    /* 更新节点，包含文本 */
    // update(cfg, node) {
    //   debugger
    //   const model = node.get('model');
    //   const group = node.get('group');
    //   const text = group.$getItem('node-text');

    //   // 更新文本内容
    //   text && text.attr({
    //     text: model.label,
    //     ...model.labelCfg.style
    //   });
    // },
    /* 设置节点的状态，主要是交互状态，业务状态请在 draw 方法中实现 */
    setState(name, value, item) {
      const buildInEvents = [
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
  }, 'single-node');
};