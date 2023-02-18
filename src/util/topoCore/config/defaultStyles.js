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
  },
  // node 文本默认样式
  nodeLabelStyles: {
    style: {
      fontSize: 12,
      fill: '#000',
      textAlign: 'center',
      textBaseline: 'middle',
      cursor: 'move'
    }
  },
  // edge默认样式
  edgeStyles: {
    stroke: '#aab7c3',
    lineAppendWidth: 10,
    startArrow: {
      path: 'M 0,0 L 8,4 L 7,0 L 8,-4 Z',
      fill: '#aab7c3'
    },
    endArrow: {
      path: 'M 0,0 L 8,4 L 7,0 L 8,-4 Z',
      fill: '#aab7c3'
    }
  },
  // edge交互样式
  edgeStateStyles: {
    // 鼠标点击边，即 selected 状态为 true 时的样式
    selected: {
      stroke: '#aab7c3'
    },
    hover: {
      stroke: '#aab7c3'
    }
  },
  anchorPointStyles: {
    r: 4,
    fill: '#fff',
    stroke: '#1890FF',
    lineWidth: 1
  }
};