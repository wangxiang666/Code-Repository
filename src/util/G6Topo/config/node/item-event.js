/**
 * @author claude
 * @date 2018/3/24
 * @description 通通来自于 behavior 里注册的事件
 */

function setStyle(item, nodeStyle, text, textStyle) {
  item.attr(nodeStyle);
  if (text) {
    text.attr(textStyle);
  }
}

function getItemStyle(type, group, state = 'hover') {
  const item = group.get('item');
  const attrs = group.getFirst().attr();
  const originStyle = type === 'node' ? item.get('originStyle') : item.get('originStyle')['edge-shape'];
  const activeStyle = attrs[`${type}State:${state}`];
  const defaultStyle = attrs[`${type}State:default`];

  if (type === 'edge' && defaultStyle && defaultStyle.lineWidth == null) {
    defaultStyle.lineWidth = 1;
  }

  return {
    activeStyle,
    defaultStyle,
    originStyle
  };
}
const events = {
  /**
   * @description 节点selected事件
   */
  selected(value, group) {
    const node = group.getChildByIndex(0);
    const text = group.getChildByIndex(1);
    const {
      activeStyle,
      defaultStyle
    } = getItemStyle.call(this, 'node', group, 'selected');

    if (!activeStyle) return;
    if (value) {
      const textStyle = activeStyle.labelCfg && activeStyle.labelCfg.style ? activeStyle.labelCfg.style : {};
      setStyle(node, activeStyle, text, textStyle);
    } else {
      const textStyle = defaultStyle.labelCfg && defaultStyle.labelCfg.style ? defaultStyle.labelCfg.style : {};
      setStyle(node, defaultStyle, text, textStyle);
    }
    // this.graph.emit('on-node-select', value);
  }
};

export default events;