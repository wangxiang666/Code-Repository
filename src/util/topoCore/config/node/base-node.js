/**
 * @author claude
 * @date 2020/3/15
 * @description 注册基础节点, 其他节点都在此基础上继承和扩展
 */

import itemEvents from './item-event';
import defaultStyles from '../defaultStyles';
import anchorEvent from '../node/anchor-event';

const {
  anchorPointStyles,
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
    // 锚点样式
    anchorPointStyles: {
      ...anchorPointStyles,
      ...cfg.anchorPointStyles
    },
    ...nodeStateStyles,
    ...cfg.nodeStateStyles,
    // 锚点高亮样式
    anchorHotsoptStyles: cfg.anchorHotsoptStyles
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
        radius: 5,
        cursor: 'move',
        // 将图形中心坐标移动到图形中心, 用于方便鼠标位置计算
        x: -width / 2,
        y: -height / 2
      }, cfg);
    },
    /* 绘制节点，包含文本 */
    draw(cfg, group) { // 元素分组
      // 合并外部样式和默认样式
      const attrs = this.getShapeStyle(cfg, group);
      if (this.type === 'img-node') {
        attrs.img = cfg.nodeType
      }
      // 添加节点
      const shape = group.addShape(this.shapeType, { // shape 属性在定义时返回
        className: `${this.shapeType}-shape`,
        xShapeNode: true, // 自定义节点标识
        draggable: true,
        name: `node-${this.shapeType}`,
        attrs
      });

      // 给 group 添加自定义方法 按className查找元素
      group.$getItem = className => {
        return group.get('children').find(item => item.get('className') === className);
      };
      // 添加文本节点
      this.addLabel(cfg, group, attrs);
      // 添加锚点
      this.initAnchor(cfg, group);
      this.drawAnchor(cfg, group)

      return shape;
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
      const {
        anchorPointStyles
      } = group.getFirst().attr();
      const item = group.get('children')[0];
      const bBox = item.getBBox();
      const anchors = this.getAnchorPoints(cfg);

      // 绘制锚点坐标
      anchors && anchors.forEach((p, i) => {
        const x = bBox.width * (p[0] - 0.5);
        const y = bBox.height * (p[1] - 0.5);

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
            ...anchorPointStyles
          },
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
            r: 8,
            fill: '#fff',
            opacity: 0
          },
          zIndex: 2,
          name: 'node-anchor-event',
          draggable: true,
          visible: false,
          isAnchor: true,
          index: i
        });

        /**
         * 添加锚点事件绑定
         */
        anchorEvent(anchorGroup, group, p);

        group.anchorShapes.push(anchor);
        group.anchorShapes.push(anchorGroup);
      });

      // 查找所有锚点
      group.getAllAnchors = () => {
        return group.anchorShapes.filter(c => c.get('isAnchor') === true);
      };
    },
    /* 添加文本节点 */
    addLabel(cfg, group, attrs) {
      const {
        label,
        labelCfg,
        labels
      } = attrs;
      // 字体小于12时 svg会报错
      // 多行文本
      if (labels) {
        labels.forEach(item => {
          const {
            label,
            labelCfg: {
              maxlength
            },
            className
          } = item;

          let text = maxlength ? label.substr(0, maxlength) : label || '';

          if (label.length > maxlength) {
            text = `${text}...`;
          }

          group.addShape('text', {
            attrs: {
              text,
              ...item,
              ...item.labelCfg,
              ...item.labelCfg.style
            },
            className: `node-text ${className}`,
            draggable: false
          });
        });
      } else if (label) {
        group.addShape('text', {
          attrs: {
            text: label,
            x: 0,
            y: 0,
            ...labelCfg,
            ...labelCfg.style
          },
          className: 'node-text',
          draggable: true,
          name: 'node-label'
        });
      }
    },

    /* 更新节点，包含文本 */
    update(cfg, node) {
      const model = node.get('model');
      const group = node.get('group');
      const text = group.$getItem('node-text');

      // 更新文本内容
      text && text.attr({
        text: model.label,
        ...model.labelCfg.style
      });
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
  }, 'single-node');
};