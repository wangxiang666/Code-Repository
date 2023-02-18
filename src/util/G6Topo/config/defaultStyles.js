/**
 * @author claude
 * @description 所有元素的默认样式
 */

export default {
  // node 交互样式
  nodeStateStyles: {
    'nodeState:default': {
      opacity: 1,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 0
    },
    // 鼠标点击节点，即 selected 状态为 true 时的样式
    'nodeState:selected': {
      opacity: 0.8,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowColor: 'blue',
      shadowBlur: 5
    }
  }
};