/**
 * @author claude
 * @date 2020/3/15
 * @description 暴露所有注册方法
 */

import canvasEvent from './canvas-event'; // 画布行为
import selectNode from './select-node'; // 选中节点行为
import deleteItem from './delete-item'; // 删除节点
import activeEdge from './active-edge'; // 激活边
import showSnchor from './show-anchor'; // hover节点
import dragNode from './drag-node'; // 拖拽节点
import dropAddNode from './drop-add-node.js'; // 拖拽节点

export default G6 => {
  dropAddNode(G6);
  canvasEvent(G6);
  // selectNode(G6);
  // deleteItem(G6);
  // activeEdge(G6);
  showSnchor(G6);
  // dragNode(G6);
};