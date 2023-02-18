//自定义节点
export default (G6) => {
  G6.registerNode(
    'img-node', {
      shapeType: 'image'
    },
    'base-node'
  );
  G6.registerNode(
    'path-node', {
      shapeType: 'path'
    },
    'base-node'
  );
  G6.registerNode(
    'rect-node', {
      shapeType: 'rect'
    },
    'base-node'
  );
}