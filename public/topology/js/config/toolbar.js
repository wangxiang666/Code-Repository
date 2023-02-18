

var App = App || {};
App.config = App.config || {};

(function () {
  "use strict";
  App.config.toolbar = {
    groups: {
      "undo-redo": { index: 1 },
      clear: { index: 2 },
      export: { index: 3 },
      print: { index: 4 },
      fullscreen: { index: 5 },
      order: { index: 6 },
      // layout: { index: 7 },
      zoom: { index: 8 },
      grid: { index: 9 },
      snapline: { index: 10 },
      // save: { index: 18 },
      // inputText: { index: 12 },
      searchBtn: { index: 13 },
      selectBox: { index: 14 },
    },
    tools: [
      {
        type: "undo",
        name: "undo",
        group: "undo-redo",
        attrs: {
          button: {
            "data-tooltip": "上一步",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "redo",
        name: "redo",
        group: "undo-redo",
        attrs: {
          button: {
            "data-tooltip": "下一步",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "button",
        name: "clear",
        group: "clear",
        attrs: {
          button: {
            id: "btn-clear",
            "data-tooltip": "清空当前拓扑",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      // {
      //   type: "button",
      //   name: "svg",
      //   group: "export",
      //   text: "SVG",
      //   attrs: {
      //     button: {
      //       id: "btn-svg",
      //       "data-tooltip": "在弹出窗口中以SVG格式打开",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },
      // {
      //   type: "button",
      //   name: "png",
      //   group: "export",
      //   text: "PNG",
      //   attrs: {
      //     button: {
      //       id: "btn-png",
      //       "data-tooltip": "在弹出窗口中以PNG格式打开",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },

      {
        type: "button",
        name: "print",
        group: "print",
        attrs: {
          button: {
            id: "btn-print",
            "data-tooltip": "打印为PDF",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "button",
        name: "to-front",
        group: "order",
        text: "上移",
        attrs: {
          button: {
            id: "btn-to-front",
            "data-tooltip": "将对象放在最前面",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "button",
        name: "to-back",
        group: "order",
        text: "下移",
        attrs: {
          button: {
            id: "btn-to-back",
            "data-tooltip": "将对象放在最后面",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      // {
      //   type: "button",
      //   group: "layout",
      //   name: "layout",
      //   attrs: {
      //     button: {
      //       id: "btn-layout",
      //       "data-tooltip": "自动布局图表",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },
      // {
      //   type: "button",
      //   name: "layout",
      //   group: "layout",
      //   text: "排序",
      //   // width: 80,
      //   attrs: {
      //     button: {
      //       id: "btn-layout",
      //       "data-tooltip": "自动布局图表",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },

      {
        type: "SelectBox",
        group: "selectBox",
        name: "selectBox",
        width: 100,
        value: true,
        id: "btn-selectBox",
        label: "对齐",
        options: [
          // { value: "Default", content: "默认" },
          { value: "TB", content: "上下", selected: true },
          { value: "BT", content: "下上" },
          { value: "LR", content: "左右" },
          { value: "RL", content: "右左" },
          // { value: "TL", content: "左上" },
          // { value: "TR", content: "右上" },
          // { value: "BL", content: "左下"},
          // { value: "BR", content: "右下" },
          // { value: "L", content: "左右" },
          // { value: "R", content: "右左" },
          // { value: "T", content: "上下" },
          // { value: "B", content: "下上" },
          // { value: "ForceDirected", content: "力导向" },
        ]
        // attrs: {
        //   select: {
        //     id: "btn-selectDat",
        //   },
        //   '.select-button-group-button': {
        //     id: "btn-selectData",
        //     "data-tooltip": "Auto-layout Graph",
        //     "data-tooltip-position": "top",
        //     "data-tooltip-position-selector": ".toolbar-container",
        //   },
        // },
      },
      {
        type: "zoom-to-fit",
        name: "zoom-to-fit",
        group: "zoom",
        attrs: {
          button: {
            "data-tooltip": "缩放至适合",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "zoom-out",
        name: "zoom-out",
        group: "zoom",
        attrs: {
          button: {
            "data-tooltip": "缩小",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },
      {
        type: "label",
        name: "zoom-slider-label",
        group: "zoom",
        text: "缩放:"
      },
      {
        type: "zoom-slider",
        name: "zoom-slider",
        group: "zoom"
      },
      {
        type: "zoom-in",
        name: "zoom-in",
        group: "zoom",
        attrs: {
          button: {
            "data-tooltip": "放大",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },

      // {
      //   type: "label",
      //   name: "grid-size-label",
      //   group: "grid",
      //   text: "Grid size:",
      //   attrs: {
      //     label: {
      //       "data-tooltip": "Change Grid Size",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container",
      //     },
      //   },
      // },
      // {
      //   type: "range",
      //   name: "grid-size",
      //   group: "grid",
      //   text: "Grid size:",
      //   min: 1,
      //   max: 50,
      //   step: 1,
      //   value: 10,
      // },

      {
        type: "checkbox",
        name: "snapline",
        group: "snapline",
        label: "对齐线:",
        value: true,
        attrs: {
          input: {
            id: "snapline-switch"
          },
          label: {
            "data-tooltip": "启用/禁用对齐线",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },

      {
        // type: "fullscreen",
        type: "button",
        name: "fullscreen",
        group: "fullscreen",
        // text: "全屏",
        attrs: {
          button: {
            id: "btn-fullscreen",
            "data-tooltip": "切换全屏模式",
            "data-tooltip-position": "top",
            "data-tooltip-position-selector": ".toolbar-container"
          }
        }
      },



      // {
      //   type: "inputText",
      //   name: "inputText",
      //   group: "inputText",
      //   // text: "搜索框",
      //   attrs: {
      //     input: {
      //       id: "btn-inputText",
      //       "data-tooltip": "搜索框",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },
      // {
      //   type: "button",
      //   name: "searchBtn",
      //   group: "searchBtn",
      //   text: "搜索",
      //   attrs: {
      //     button: {
      //       // id: "btn-searchBtn",
      //       "data-tooltip": "搜索按钮",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },
      // { type: 'button', name: 'ok', text: '搜索' },
      // { type: 'button', name: 'ok', text: '搜索' },
      // {
      //   type: "button",
      //   name: "save",
      //   group: "save",
      //   text: "保存",
      //   // width: 80,
      //   attrs: {
      //     button: {
      //       id: "btn-save",
      //       "data-tooltip": "提示保存信息",
      //       "data-tooltip-position": "top",
      //       "data-tooltip-position-selector": ".toolbar-container"
      //     }
      //   }
      // },
      {
        type: "separator",
        group: "grid"
      },
      // {
      //   type: "separator",
      //   group: "snapline",
      // },
      // {
      //   type: "separator",
      //   group: "inputText"
      // },
      // {
      //   type: "separator",
      //   group: "save"
      // },
      {
        type: "separator",
        group: "searchBtn",
        id: "btn-separator",
      }
    ]
  };
  // console.log('[toolbar]',App.config)
})();
