var App = App || {};
App.config = App.config || {};

(function () {
  "use strict";
  App.config.stencil = {};
  App.config.stencil.groups = {
    standard: { index: 1, label: "工控设备", closed: true },
    fsa: { index: 2, label: "网络设备", closed: true },
    pn: { index: 3, label: "安防设备", closed: true },
    erd: { index: 4, label: "终端设备", closed: true },
    uml: { index: 5, label: "服务器设备", closed: true },
    org: { index: 6, label: "监控设备", closed: true },
    tools: { label: "工具", index: 7, closed: false }
  };

  App.config.stencil.shapes = {};

  App.config.stencil.shapes.standard = [
    //   {
    //     type: 'standard.Rectangle',
    //     size: { width: 5, height: 3 },
    //     attrs: {
    //         root: {
    //             dataTooltip: 'Rectangle',
    //             dataTooltipPosition: 'left',
    //             dataTooltipPositionSelector: '.joint-stencil'
    //         },
    //         body: {
    //             rx: 2,
    //             ry: 2,
    //             width: 50,
    //             height: 30,
    //             fill: 'transparent',
    //             stroke: '#31d0c6',
    //             strokeWidth: 2,
    //             strokeDasharray: '0'
    //         },
    //         label: {
    //             text: 'rect',
    //             fill: '#c6c7e2',
    //             fontFamily: 'Roboto Condensed',
    //             fontWeight: 'Normal',
    //             fontSize: 11,
    //             strokeWidth: 0
    //         }
    //     }
    // },
    //   {
    //     type: 'erd.Entity',
    //     attrs: {
    //         root: {
    //             dataTooltip: 'Entity',
    //             dataTooltipPosition: 'left',
    //             dataTooltipPositionSelector: '.joint-stencil'
    //         },
    //         '.outer': {
    //             rx: 3,
    //             ry: 3,
    //             fill: '#31d0c6',
    //             'stroke-width': 2,
    //             stroke: 'transparent',
    //             'stroke-dasharray': '0'
    //         },
    //         text: {
    //             text: 'Entity',
    //             'font-size': 11,
    //             'font-family': 'Roboto Condensed',
    //             'font-weight': 'Normal',
    //             fill: '#333333',
    //             'stroke-width': 0
    //         }
    //     }
    // },
    // {
    //   type: "bpmn.Pool",
    //   attrs: {
    //     ".": { magnet: false },
    //     // '.header': { fill: '#5799DA' }
    //     ".header": { fill: "#31d0c6" }
    //   },
    //   lanes: { label: "层级" }
    // },
    // {
    //   type: "standard.Polygon",
    //   size: { width: 5, height: 3 },
    //   attrs: {
    //     ".": { magnet: false },
    //     root: {
    //       dataTooltip: "Rhombus",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     body: {
    //       refPoints: "50,0 100,50 50,100 0,50",
    //       fill: "transparent",
    //       stroke: "#31d0c6",
    //       strokeWidth: 2,
    //       strokeDasharray: "0"
    //     },
    //     label: {
    //       text: "rhombus",
    //       fill: "#c6c7e2",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     }
    //   }
    // },

    // {
    //   type: "standard.EmbeddedImage",
    //   size: { width: 5, height: 3 },
    //   attrs: {
    //     root: {
    //       dataTooltip: '自定义图片1',
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     body: {
    //       fill: "transparent",
    //       stroke: "#31d0c6",
    //       strokeWidth: 2,
    //       strokeDasharray: "0"
    //     },
    //     image: {
    //       xlinkHref: "/topology/assets/image-icon1.svg"
    //     },
    //     label: {
    //       text: "card",
    //       fill: "#c6c7e2",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     }
    //   }
    // },
    // {
    //   type: "standard.EmbeddedImage",
    //   size: { width: 1, height: 1 },
    //   attrs: {
    //     root: {
    //       dataTooltip: '自定义图片2',
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     body: {
    //       fill: "transparent",
    //       stroke: "#31d0c6",
    //       strokeWidth: 2,
    //       strokeDasharray: "0"
    //     },
    //     image: {
    //       xlinkHref: "/topology/assets/image-icon1.svg"
    //     },
    //     label: {
    //       text: "card",
    //       fill: "#c6c7e2",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     }
    //   }
    // },

    {
      type: "standard.factory_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "其他工控设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/factory_unkown_device.png" },
        // image2: { xlinkHref: "/topology/assets/guardIs.png" },
        // image3: { xlinkHref: "/topology/assets/guardIs.png" },
        label: {
          text: "其他工控设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.plc",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "可编程逻辑控制器(PLC)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/plc.png" },
        label: {
          text: "可编程逻辑控制器(PLC)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.rtu",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "远程终端控制系统(RTU)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/rtu.png" },
        label: {
          text: "远程终端控制系统(RTU)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.dcs",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "集散控制系统(DCS)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/dcs.png" },
        label: {
          text: "集散控制系统(DCS)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.dcm",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "数据采集模块(DCM)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/dcm.png" },
        label: {
          text: "数据采集模块(DCM)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.prpsp",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "继电保护装置(PRPSP)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/prpsp.png" },
        label: {
          text: "继电保护装置(PRPSP)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.dtu",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "无线传输模块(DTU)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/dtu.png" },
        label: {
          text: "无线传输模块(DTU)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.vfd",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "变频器(VFD)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/vfd.png" },
        label: {
          text: "变频器(VFD)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.opc_server",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "OPC服务器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/opc_server.png" },
        label: {
          text: "OPC服务器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.opc_client",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "OPC客户端",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/opc_client.png" },
        label: {
          text: "OPC客户端",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.engineer_station",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "工程师站",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/engineer_station.png" },
        label: {
          text: "工程师站",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.operator_station",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "操作员站",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/operator_station.png" },
        label: {
          text: "操作员站",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.mes",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "生产信息化管理系统(MES)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/mes.png" },
        label: {
          text: "生产信息化管理系统(MES)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.qas",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "质量保证系统(QAS)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/qas.png" },
        label: {
          text: "质量保证系统(QAS)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.qcs",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "质量控制系统(QCS)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/qcs.png" },
        label: {
          text: "质量控制系统(QCS)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.mis",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "辅助决策系统(MIS)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/mis.png" },
        label: {
          text: "辅助决策系统(MIS)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.hmi",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "人机交互系统(HMI)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#5A99E7", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/hmi.png" },
        label: {
          text: "人机交互系统(HMI)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }

    // {
    //   type: "standard.HeaderedRectangle",
    //   size: { width: 5, height: 3 },
    //   attrs: {
    //     ".": { magnet: false },
    //     root: {
    //       dataTooltip: "Rectangle with header",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     body: {
    //       fill: "transparent",
    //       stroke: "#31d0c6",
    //       strokeDasharray: "0"
    //       // strokeWidth: 2,
    //     },
    //     header: {
    //       stroke: "#31d0c6",
    //       fill: "#31d0c6",
    //       strokeDasharray: "0"
    //       // strokeWidth: 2,
    //       // height: 20
    //     },
    //     headerText: {
    //       fontSize: 20,
    //       fill: "#f6f6f6",
    //       text: "header",
    //       fontFamily: "Alegreya Sans",
    //       fontWeight: "Bold"
    //       //     strokeWidth: 0,
    //       //     refY: 12
    //     }

    //     // bodyText: {
    //     //     textWrap: {
    //     //         // text: '爱是一种享受，是一种奉献。Curabitur molestie。',
    //     //         text: '爱是一种享受，是一种奉献。Curabitur molestie。',
    //     //         width: -10,
    //     //         height: -20,
    //     //         ellipsis: true
    //     //     },
    //     //     fill: '#c6c7e2',
    //     //     fontFamily: 'Roboto Condensed',
    //     //     fontWeight: 'Normal',
    //     //     fontSize: 11,
    //     //     strokeWidth: 0,
    //     //     refY2: 12,
    //     // },
    //   }
    // }
  ];

  App.config.stencil.shapes.fsa = [
    {
      type: "standard.network_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "其他网络设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#6CBEC5", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/network_unkown_device.png" },
        label: {
          text: "其他网络设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.router",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "路由器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#6CBEC5", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/router.png" },
        label: {
          text: "路由器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.switch",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "交换机",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#6CBEC5", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/switch.png" },
        label: {
          text: "交换机",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.inswitch",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "工业交换机",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#6CBEC5", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/inswitch.png" },
        label: {
          text: "工业交换机",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.gateway",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "网关",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#6CBEC5", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/gateway.png" },
        label: {
          text: "网关",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }
    // {
    //   type: "fsa.State",
    //   preserveAspectRatio: true,
    //   attrs: {
    //     root: {
    //       dataTooltip: "State",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     circle: {
    //       fill: "#6a6c8a",
    //       stroke: "#61549c",
    //       "stroke-width": 2,
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "state",
    //       fill: "#c6c7e2",
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       "font-size": 11,
    //       "stroke-width": 0
    //     }
    //   }
    // }
  ];

  App.config.stencil.shapes.pn = [
    {
      type: "standard.security_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "其他安全设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/security_unkown_device.png" },
        label: {
          text: "其他安全设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.fw",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "防火墙",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/fw.png" },
        label: {
          text: "防火墙",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.factory_fw",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "工业防火墙",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/factory_fw.png" },
        label: {
          text: "工业防火墙",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.net_probe",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "神探探针",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/net_probe.png" },
        label: {
          text: "神探探针",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.ips",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "入侵防御系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/ips.png" },
        label: {
          text: "入侵防御系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.ids",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "入侵检测系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/ids.png" },
        label: {
          text: "入侵检测系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.scan",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "漏洞扫描系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/scan.png" },
        label: {
          text: "漏洞扫描系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.mining",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "漏洞挖掘系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/mining.png" },
        label: {
          text: "漏洞挖掘系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.management_platform",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "监管平台系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/management_platform.png" },
        label: {
          text: "监管平台系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.gap",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "网闸",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/gap.png" },
        label: {
          text: "网闸",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.access_gateway",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "堡垒机",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/access_gateway.png" },
        label: {
          text: "堡垒机",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.log_audit",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "日志审计系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/log_audit.png" },
        label: {
          text: "日志审计系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.situation_awareness",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "态势感知系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/situation_awareness.png" },
        label: {
          text: "态势感知系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.ai_sec",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "未知威胁检查系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/ai_sec.png" },
        label: {
          text: "未知威胁检查系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.eae",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "加密认证设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/eae.png" },
        label: {
          text: "加密认证设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.factory_audit",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "工业审计系统",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/factory_audit.png" },
        label: {
          text: "工业审计系统",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }
    // {
    //   type: "standard.fgap",
    //   size: { width: 100, height: 100 },
    //   attrs: {
    //     root: {
    //       dataTooltip: "光闸",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
    //     background: { fill: "transparent" },
    //     image: { xlinkHref: "/topology/assets/fgap.png" },
    //     label: {
    //       text: "光闸",
    //       fill: "#888888",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     },
    //     typeData: { text1: "" }
    //   }
    // },
    // {
    //   type: "standard.utm",
    //   size: { width: 100, height: 100 },
    //   attrs: {
    //     root: {
    //       dataTooltip: "防病毒网关",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //      //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
    //     background: { fill: "transparent" },
    //     image: { xlinkHref: "/topology/assets/utm.png" },
    //     label: {
    //       text: "防病毒网关",
    //       fill: "#888888",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     },
    //     typeData: { text1: "" }
    //   }
    // },
    // {
    //   type: "standard.resist_denial_service",
    //   size: { width: 100, height: 100 },
    //   attrs: {
    //     root: {
    //       dataTooltip: "抗拒绝服务攻击系统",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //      //border: { stroke: "#606266", strokeWidth: 2, strokeDasharray: "0" },
    //     background: { fill: "transparent" },
    //     image: { xlinkHref: "/topology/assets/resist_denial_service.png" },
    //     label: {
    //       text: "抗拒绝服务攻击系统",
    //       fill: "#888888",
    //       fontFamily: "Roboto Condensed",
    //       fontWeight: "Normal",
    //       fontSize: 11,
    //       strokeWidth: 0
    //     },
    //     typeData: { text1: "" }
    //   }
    // }
  ];

  App.config.stencil.shapes.erd = [
    {
      type: "standard.terminal_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "终端设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#1296db", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/terminal_unkown_device.png" },
        label: {
          text: "终端设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }
    // {
    //   type: "erd.Entity",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Entity",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       rx: 3,
    //       ry: 3,
    //       fill: "#31d0c6",
    //       "stroke-width": 2,
    //       stroke: "transparent",
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Entity",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.WeakEntity",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Weak Entity",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "transparent",
    //       stroke: "#feb663",
    //       "stroke-width": 2,
    //       points: "100,0 100,60 0,60 0,0",
    //       "stroke-dasharray": "0"
    //     },
    //     ".inner": {
    //       fill: "#feb663",
    //       stroke: "transparent",
    //       points: "97,5 97,55 3,55 3,5",
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Weak entity",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.Relationship",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Relationship",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "#61549c",
    //       stroke: "transparent",
    //       "stroke-width": 2,
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Relation",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.IdentifyingRelationship",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Identifying Relationship",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "transparent",
    //       stroke: "#6a6c8a",
    //       "stroke-dasharray": "0"
    //     },
    //     ".inner": {
    //       fill: "#6a6c8a",
    //       stroke: "transparent",
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Relation",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.ISA",
    //   attrs: {
    //     root: {
    //       dataTooltip: "ISA",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     text: {
    //       text: "ISA",
    //       fill: "#f6f6f6",
    //       "letter-spacing": 0,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       "font-size": 11
    //     },
    //     polygon: {
    //       fill: "#feb663",
    //       stroke: "transparent",
    //       "stroke-dasharray": "0"
    //     }
    //   }
    // },

    // {
    //   type: "erd.Normal",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Normal",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "#feb663",
    //       stroke: "transparent",
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Normal",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.Multivalued",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Mutltivalued",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "transparent",
    //       stroke: "#fe854f",
    //       "stroke-dasharray": "0"
    //     },
    //     ".inner": {
    //       fill: "#fe854f",
    //       stroke: "transparent",
    //       rx: 43,
    //       ry: 21,
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "MultiValued",
    //       "font-size": 11,
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       fill: "#f6f6f6",
    //       "stroke-width": 0
    //     }
    //   }
    // },
    // {
    //   type: "erd.Derived",
    //   attrs: {
    //     root: {
    //       dataTooltip: "Derived",
    //       dataTooltipPosition: "left",
    //       dataTooltipPositionSelector: ".joint-stencil"
    //     },
    //     ".outer": {
    //       fill: "transparent",
    //       stroke: "#fe854f",
    //       "stroke-dasharray": "0"
    //     },
    //     ".inner": {
    //       fill: "#feb663",
    //       stroke: "transparent",
    //       display: "block",
    //       "stroke-dasharray": "0"
    //     },
    //     text: {
    //       text: "Derived",
    //       fill: "#f6f6f6",
    //       "font-family": "Roboto Condensed",
    //       "font-weight": "Normal",
    //       "font-size": 11,
    //       "stroke-width": 0
    //     }
    //   }
    // }
  ];

  App.config.stencil.shapes.uml = [
    {
      type: "standard.server_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "其他服务器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#7B78FF", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/server_unkown_device.png" },
        label: {
          text: "其他服务器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.mail_server",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "邮件服务器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#7B78FF", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/mail_server.png" },
        label: {
          text: "邮件服务器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.web_server",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "web服务器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#7B78FF", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/web_server.png" },
        label: {
          text: "web服务器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.app_server",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "应用服务器",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#7B78FF", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/app_server.png" },
        label: {
          text: "应用服务器",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }
  ];

  App.config.stencil.shapes.org = [
    {
      type: "standard.monitor_unkown_device",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "其他监控设备",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#71bb93", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/monitor_unkown_device.png" },
        label: {
          text: "其他监控设备",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.ip_camera",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "网络摄像机(IP Camera)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#71bb93", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/ip_camera.png" },
        label: {
          text: "网络摄像机(IP Camera)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.nvr",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "网络视频录像机(NVR)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#71bb93", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/nvr.png" },
        label: {
          text: "网络视频录像机(NVR)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.dvr",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "数字录像机(DVR)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#71bb93", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/dvr.png" },
        label: {
          text: "数字录像机(DVR)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    },
    {
      type: "standard.vms",
      size: { width: 100, height: 100 },
      attrs: {
        root: {
          dataTooltip: "视频管理服务器(VMS)",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        //border: { stroke: "#71bb93", strokeWidth: 2, strokeDasharray: "0" },
        border: { stroke: "transparent", strokeWidth: 2, strokeDasharray: "0" },
        background: { fill: "transparent" },
        image: { xlinkHref: "/topology/assets/vms.png" },
        label: {
          text: "视频管理服务器(VMS)",
          fill: "#888888",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 11,
          strokeWidth: 0
        },
        typeData: { text1: "" }
      }
    }
  ];

  App.config.stencil.shapes.tools = [

    {
      type: "standard.Image",
      size: { width: 50, height: 40 },
      attrs: {
        root: {
          dataTooltip: "图",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        image: {
          xlinkHref: "/topology/assets/tools/neiwang.svg"
        },
        body: {
          fill: "transparent",
          stroke: "#61549c",
          strokeWidth: 2,
          strokeDasharray: "0"
        },
        label: {
          text: "image",
          fontFamily: "Roboto Condensed",
          fontWeight: "Normal",
          fontSize: 14,
          fill: "#61549c"
        }
      }
    },

    // {
    //   "type": "app.Link",
    //   size: { width: 100, height: 80 },
    //   "router": { "name": "orthogonal" },
    //   "connector": { "name": "normal" },
    //   "labels": [],
    //   "parent": "",
    //   "vertices": [{ "x": 400, "y": 111 }],
    //   "attrs": {
    //     "line": { "stroke": "red", "strokeWidth": 40 }
    //   }
    // },



    {
      type: "erd.Key",
      size: { width: 100, height: 8 },
      attrs: {
        root: {
          dataTooltip: "线",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        // text: {
        // text: "线",
        // "font-size": 11,
        // "font-family": "Roboto Condensed",
        // "font-weight": "Normal",
        // fill: "#61549c",
        // "stroke-width": 0
        // },
        path: {
          // d: 'M0 0 l100 0',
          // fill: '#222138',
          // refY: '50%',
          stroke: "#61549c", //Stroke属性定义一条线，文本或元素轮廓颜色：
          "stroke-width": 8
        }
      }
    },
    {
      type: "erd.Entity",
      attrs: {
        root: {
          dataTooltip: "长方形",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        ".outer": {
          rx: 3,
          ry: 3,
          fill: "#61549c",
          "stroke-width": 2,
          stroke: "transparent",
          "stroke-dasharray": "0"
        },
        text: {
          text: "长方形",
          "font-size": 11,
          "font-family": "Roboto Condensed",
          "font-weight": "Normal",
          fill: "#f6f6f6",
          "stroke-width": 0
        }
      }
    },

    {
      type: "erd.Relationship",
      attrs: {
        root: {
          dataTooltip: "菱形",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        ".outer": {
          fill: "#61549c",
          stroke: "transparent",
          "stroke-width": 2,
          "stroke-dasharray": "0"
        },
        text: {
          text: "菱形",
          "font-size": 11,
          "font-family": "Roboto Condensed",
          "font-weight": "Normal",
          fill: "#f6f6f6",
          "stroke-width": 0
        }
      }
    },

    {
      type: "erd.ISA",
      attrs: {
        root: {
          dataTooltip: "三角",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        text: {
          text: "三角",
          fill: "#f6f6f6",
          "letter-spacing": 0,
          "font-family": "Roboto Condensed",
          "font-weight": "Normal",
          "font-size": 11
        },
        polygon: {
          fill: "#61549c",
          stroke: "transparent",
          "stroke-dasharray": "0"
        }
      }
    },
    {
      type: "erd.Normal",
      // preserveAspectRatio: true,
      attrs: {
        root: {
          dataTooltip: "圆形",
          dataTooltipPosition: "left",
          dataTooltipPositionSelector: ".joint-stencil"
        },
        ".outer": {
          fill: "#61549c",
          stroke: "transparent",
          "stroke-dasharray": "0"
        },
        text: {
          text: "圆形",
          "font-size": 11,
          "font-family": "Roboto Condensed",
          "font-weight": "Normal",
          fill: "#f6f6f6",
          "stroke-width": 0
        }
      }
    }
  ];
})();
