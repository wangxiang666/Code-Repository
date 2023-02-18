export default (Graph) => {
  const attrs = {
    circle: {
      r: 6,
      magnet: true,
      stroke: '#5F95FF',
      strokeWidth: 1,
      fill: '#fff',
      style: {
        visibility: 'hidden'
      }
    }
  }
  const ports = {
    groups: {
      top: {
        position: 'top',
        attrs
      },
      right: {
        position: 'right',
        attrs
      },
      bottom: {
        position: 'bottom',
        attrs
      },
      left: {
        position: 'left',
        attrs
      }
    },
    items: [{
        group: 'top',
        id: '0'
      },
      {
        group: 'right',
        id: '1'
      },
      {
        group: 'bottom',
        id: '2'
      },
      {
        group: 'left',
        id: '3'
      }
    ]
  }
  Graph.registerNode(
    'custom-image', {
      inherit: 'image',
      width: 40,
      height: 40,
      markup: [{
          tagName: 'image',
          selector: 'body'
        },
        {
          tagName: 'text',
          selector: 'label'
        }
      ],
      zIndex: 8,
      attrs: {
        body: {
          width: 40,
          height: 40,
          fill: 'rgba(255,255,255,1)'
        },
        label: {
          refX: '50%',
          refY: '100%',
          refY2: 4,
          textAnchor: 'middle',
          textVerticalAnchor: 'top',
          fontSize: 12,
          fill: "#000"
        }
      },
      ports
    },
    true
  )
  Graph.registerNode(
    'custom-circle', {
      inherit: 'ellipse',
      width: 45,
      height: 45,
      data: {
        nodeType: 'shape'
      },
      markup: [{
        tagName: 'ellipse',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }],
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#4e5051',
          fill: 'rgba(255,255,255,0)'
        },
        label: {
          text: '圆形',
          fontSize: 12,
          fill: '#262626'
        }
      },
      ports
    },
    true
  )
  Graph.registerNode(
    'custom-rect', {
      inherit: 'rect',
      width: 66,
      height: 36,
      data: {
        nodeType: 'shape'
      },
      markup: [{
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }],
      zIndex: 1,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#4e5051',
          fill: 'rgba(255,255,255,0)'
        },
        label: {
          text: '矩形',
          fontSize: 12,
          fill: '#262626'
        }
      },
      ports
    },
    true
  )
  Graph.registerNode(
    'custom-text', {
      inherit: 'rect',
      width: 66,
      height: 32,
      data: {
        nodeType: 'textWrap'
      },
      markup: [{
        tagName: 'rect',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }],
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: 'rgba(255,255,255,0)',
          fill: 'rgba(255,255,255,0)'
        },
        label: {
          text: '文字',
          textWrap: {
            text: '文字',
            width: -10, // 宽度减少 10px
            height: '100%', // 高度为参照元素高度的一半
            ellipsis: true, // 文本超出显示范围时，自动添加省略号
            breakWord: true // 是否截断单词
          },
          fontSize: 12,
          fill: '#262626'
        }
      }
    },
    true
  )
  Graph.registerNode(
    'custom-path', {
      inherit: 'path',
      width: 120,
      height: 55,
      data: {
        nodeType: 'shape'
      },
      markup: [{
        tagName: 'path',
        selector: 'body'
      }, {
        tagName: 'text',
        selector: 'label'
      }],
      attrs: {
        body: {
          refD: 'M480.39,174.41a135,135,0,0,0-35.91-36.62,140.22,140.22,0,0,0-10.87-45.61,147.21,147.21,0,0,0-33.08-47.25,149.9,149.9,0,0,0-49.14-33.79A151.25,151.25,0,0,0,294,.51a148.18,148.18,0,0,0-83.64,25,152.21,152.21,0,0,0-36.15,33.79,96.46,96.46,0,0,0-23.63-2.83A91.26,91.26,0,0,0,58.64,157.63a120.26,120.26,0,0,0-31.19,26.94A114.34,114.34,0,0,0,.52,260.41,114.82,114.82,0,0,0,36.43,345,119.54,119.54,0,0,0,122,378.55H365.8A137.51,137.51,0,0,0,490.32,296.8a131.16,131.16,0,0,0,10.16-51.27A127.51,127.51,0,0,0,480.39,174.41Z',
          strokeWidth: 1,
          stroke: '#4e5051',
          fill: 'rgba(255,255,255,0)'
        },
        label: {
          text: 'Internet',
          fontSize: 12,
          fill: '#262626'
        }
      },
      ports
    },
    true
  )




  //泳道图节点连线

  Graph.registerNode(
    'lane', {
      inherit: 'rect',
      markup: [{
          tagName: 'rect',
          selector: 'body'
        },
        {
          tagName: 'rect',
          selector: 'name-rect'
        },
        {
          tagName: 'text',
          selector: 'name-text'
        }
      ],
      attrs: {
        body: {
          fill: '#FFF',
          stroke: '#5F95FF',
          strokeWidth: 1
        },
        'name-rect': {
          width: 200,
          height: 30,
          fill: '#5F95FF',
          stroke: '#fff',
          strokeWidth: 1,
          x: -1
        },
        'name-text': {
          ref: 'name-rect',
          refY: 0.5,
          refX: 0.5,
          textAnchor: 'middle',
          fontWeight: 'bold',
          fill: '#fff',
          fontSize: 12
        }
      }
    },
    true
  )

  Graph.registerNode(
    'lane-rect', {
      inherit: 'rect',
      width: 100,
      height: 60,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF'
        },
        text: {
          fontSize: 12,
          fill: '#262626'
        }
      }
    },
    true
  )

  Graph.registerNode(
    'lane-polygon', {
      inherit: 'polygon',
      width: 80,
      height: 80,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#5F95FF',
          fill: '#EFF4FF',
          refPoints: '0,10 10,0 20,10 10,20'
        },
        text: {
          fontSize: 12,
          fill: '#262626'
        }
      }
    },
    true
  )

  Graph.registerEdge(
    'lane-edge', {
      inherit: 'edge',
      attrs: {
        line: {
          stroke: '#A2B1C3',
          strokeWidth: 2
        }
      },
      label: {
        attrs: {
          label: {
            fill: '#A2B1C3',
            fontSize: 12
          }
        }
      }
    },
    true
  )
}