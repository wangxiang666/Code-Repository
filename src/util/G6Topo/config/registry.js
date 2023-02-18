import registerBaseNode from './node/base-node.js';
import registerExpandNode from './node/expand-nodes.js';
import behavior from './behavior/index.js';
import registerBaseCombo from './combo/index';
import registerLayoutByPoint from './layout/index';
export default (G6) => {
  // 先注册基础节点
  registerBaseNode(G6);
  //扩展节点（继承基础节点）
  registerExpandNode(G6);
  registerBaseCombo(G6);
  behavior(G6)
  registerLayoutByPoint(G6)

};