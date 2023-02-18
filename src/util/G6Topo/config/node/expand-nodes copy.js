//自定义节点
export default (G6) => {
  //（卡片式）
  G6.registerNode(
    'card-node', {
      draw: (cfg, group) => {
        const color = cfg.alert > 0 ? '#F4664A' : '#268bd0';
        const r = 2;
        const shape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 140,
            height: 64,
            stroke: color,
            radius: r
          },
          name: 'main-box',
          draggable: true
        });

        group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: 140,
            height: 20,
            fill: color,
            radius: [r, r, 0, 0]
          },
          name: 'title-box',
          draggable: true
        });
        group.addShape('rect', {
          attrs: {
            x: 34,
            y: 41,
            width: 80,
            height: 16,
            fill: color,
            radius: [8, 8, 8, 8]
          },
          name: 'title-box2',
          draggable: true
        });
        // left icon
        group.addShape('image', {
          attrs: {
            x: 4,
            y: 28,
            height: 24,
            width: 24,
            cursor: 'pointer',
            img: require(`/public/img/topology/${cfg.nodeType}.png`)
          },
          linkPoints: {
            top: true,
            bottom: true,
            left: true,
            right: true,
            size: 5,
            fill: '#fff'
          },
          name: 'node-icon',
          draggable: true
        });

        // title text
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 24,
            x: 34,
            lineHeight: 20,
            text: cfg.ip,
            fill: '#fff'
          },

          name: 'ip',
          draggable: true
        })
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 4,
            x: 4,
            fontWeight: 800,
            lineHeight: 20,
            text: cfg.name,
            fill: '#fff'
          },
          name: 'name',
          draggable: true
        })
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 43,
            x: 42,
            fontWeight: 800,
            lineHeight: 20,
            text: cfg.alert ? `${cfg.alert}  ALERT` : 'NO ALERT',
            fill: '#fff'
          },
          name: 'alert',
          draggable: true
        })
        return shape;
      }
    },
    'single-node'
  );
  G6.registerNode(
    'img-node', {
      shapeType: 'image',
      getImg(cfg) {
        return require(`/public/img/topology/${cfg.nodeType}.png`)
      }
    },
    'base-node'
  );
}