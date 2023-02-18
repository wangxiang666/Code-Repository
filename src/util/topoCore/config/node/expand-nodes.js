//自定义节点
export default (G6) => {
  G6.registerNode(
    'img-node', {
      shapeType: 'image',
      getImg(cfg) {
        return `/public${cfg.nodeType}`
      }
    },
    'base-node'
  );
}