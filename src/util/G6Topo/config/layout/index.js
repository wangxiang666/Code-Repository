export default G6 => {
  G6.registerLayout('layoutByPoint', {
    /**
     * 定义自定义行为的默认参数，会与用户传入的参数进行合并
     */
    getDefaultCfg(cfg) {
      return {};
    },
    /**
     * 初始化
     * @param {Object} data 数据
     */
    init(data) {
      this.nodes = data.nodes;
    },
    /**
     * 执行布局
     */
    execute() {
      // TODO
      let {
        nodes
      } = this
      if (this.type === 'inner') {
        nodes.map((node) => {
          let x = node.position.x
          let y = node.position.y
          node.x = x
          node.y = y
          console.log(node, 'node节点')
        })
      } else {
        nodes.map((node) => {
          node.size = node.fixSize
          let x = node.x
          let y = node.y
          node.x = x + node.style.width / 2
          node.y = y + node.style.height / 2
          console.log(node, 'combo节点')
        })
        console.log(nodes)
      }
    },
    /**
     * 根据传入的数据进行布局
     * @param {Object} data 数据
     */
    layout(data) {
      this.init(data);
      this.execute();
    },
    /**
     * 销毁
     */
    destroy() {
      this.positions = null;
      this.nodes = null;
      this.edges = null;
      this.destroyed = true;
    }
  })
}