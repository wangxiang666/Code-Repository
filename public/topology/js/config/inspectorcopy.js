var App = App || {};
App.config = App.config || {};
(function () {
  "use strict";
  var options = {
    fontColor: [
      { content: "#f6f6f6" },
      { content: "#dcd7d7" },
      { content: "#8f8f8f" },
      { content: "#c6c7e2" },
      { content: "#feb663" },
      { content: "#fe854f" },
      { content: "#b75d32" },
      { content: "#31d0c6" },

      { content: "#61549c" },
      { content: "#6a6c8a" },
      { content: "#4b4a67" },
      { content: "#3c4260" },
      { content: "#33334e" },
      { content: "red" },
      { content: "#222138" },
      { content: "#1296db" },
      { content: "#5A99E7" },
      { content: "#6CBEC5" },
      { content: "#606266" },
      { content: "#71bb93" },
      { content: "#7B78FF" },
      // ***** UI-2
      { content: "#888888" },
      { content: "#333333" }
    ],
    colorPalette: [
      { content: "transparent", icon: "/topology/assets/transparent-icon.svg" },
      { content: "#f6f6f6" },
      { content: "#dcd7d7" },
      { content: "#8f8f8f" },
      { content: "#c6c7e2" },
      { content: "#feb663" },
      { content: "#fe854f" },
      { content: "#b75d32" },
      { content: "#31d0c6" },

      { content: "#61549c" },
      { content: "#6a6c8a" },
      { content: "#4b4a67" },
      { content: "#3c4260" },
      { content: "#33334e" },
      { content: "red" },
      { content: "#222138" },
      { content: "#1296db" },
      { content: "#5A99E7" },
      { content: "#6CBEC5" },
      { content: "#606266" },
      { content: "#71bb93" },
      { content: "#7B78FF" },
      // ***** UI-2
      { content: "#888888" },
      { content: "#333333" }
    ],
    colorPaletteReset: [
      { content: "transparent", icon: "/topology/assets/no-color-icon.svg" },
      { content: "#f6f6f6" },
      { content: "#dcd7d7" },
      { content: "#8f8f8f" },
      { content: "#c6c7e2" },
      { content: "#feb663" },
      { content: "#fe854f" },
      { content: "#b75d32" },
      { content: "#31d0c6" },

      { content: "#61549c" },
      { content: "#6a6c8a" },
      { content: "#4b4a67" },
      { content: "#3c4260" },
      { content: "#33334e" },
      { content: "red" },
      { content: "#222138" },
      { content: "#1296db" },
      { content: "#5A99E7" },
      { content: "#6CBEC5" },
      { content: "#606266" },
      { content: "#71bb93" },
      { content: "#7B78FF" },
      // ***** UI-2
      { content: "#888888" },
      { content: "#333333" }
    ],

    fontWeight: [
      { value: "300", content: '<span style="font-weight: 300">Light</span>' },
      {
        value: "Normal",
        content: '<span style="font-weight: Normal">Normal</span>'
      },
      {
        value: "Bold",
        content: '<span style="font-weight: Bolder">Bold</span>'
      }
    ],

    fontFamily: [
      {
        value: "Alegreya Sans",
        content: '<span style="font-family: Alegreya Sans">Alegreya Sans</span>'
      },
      {
        value: "Averia Libre",
        content: '<span style="font-family: Averia Libre">Averia Libre</span>'
      },
      {
        value: "Roboto Condensed",
        content:
          '<span style="font-family: Roboto Condensed">Roboto Condensed</span>'
      }
    ],

    strokeStyle: [
      { value: "0", content: "Solid" },
      { value: "2,5", content: "Dotted" },
      { value: "10,5", content: "Dashed" }
    ],
    strokeLine: [
      { value: "animationLine1", content: "animationLine1" },
      { value: "animationLine2", content: "animationLine2" },
      { value: "animationLine3", content: "animationLine3" }
    ],

    side: [
      { value: "top", content: "Top Side" },
      { value: "right", content: "Right Side" },
      { value: "bottom", content: "Bottom Side" },
      { value: "left", content: "Left Side" }
    ],

    portLabelPositionRectangle: [
      { value: { name: "top", args: { y: -12 } }, content: "Above" },
      { value: { name: "right", args: { y: 0 } }, content: "On Right" },
      { value: { name: "bottom", args: { y: 12 } }, content: "Below" },
      { value: { name: "left", args: { y: 0 } }, content: "On Left" }
    ],

    portLabelPositionEllipse: [
      { value: "radial", content: "Horizontal" },
      { value: "radialOriented", content: "Angled" }
    ],

    imageIcons: [
      // {
      //   value: "/topology/assets/image-icon1.svg",
      //   content:
      //     '<img height="40px" src="/topology/assets/image-icon1.svg"/><div>image-icon1.svg</div>'
      // },
      // {
      //   value: "/topology/assets/unknown.png",
      //   content:
      //     '<img height="40px" src="/topology/assets/unknown.png"/><div>未知设备</div>'
      // },
      {
        value: "/topology/assets/factory_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/factory_unkown_device.png"/><div>其他工控设备</div>'
      },
      {
        value: "/topology/assets/plc.png",
        content:
          '<img height="40px" src="/topology/assets/plc.png"/><div>可编程逻辑控制器(PLC)</div>'
      },
      {
        value: "/topology/assets/rtu.png",
        content:
          '<img height="40px" src="/topology/assets/rtu.png"/><div>远程终端控制系统(RTU)</div>'
      },
      {
        value: "/topology/assets/dcs.png",
        content:
          '<img height="40px" src="/topology/assets/dcs.png"/><div>集散控制系统(DCS)</div>'
      },
      {
        value: "/topology/assets/dcm.png",
        content:
          '<img height="40px" src="/topology/assets/dcm.png"/><div>数据采集模块(DCM)</div>'
      },
      {
        value: "/topology/assets/prpsp.png",
        content:
          '<img height="40px" src="/topology/assets/prpsp.png"/><div>继电保护装置(PRPSP)</div>'
      },
      {
        value: "/topology/assets/dtu.png",
        content:
          '<img height="40px" src="/topology/assets/dtu.png"/><div>无线传输模块(DTU)</div>'
      },
      {
        value: "/topology/assets/vfd.png",
        content:
          '<img height="40px" src="/topology/assets/vfd.png"/><div>变频器(VFD)</div>'
      },
      {
        value: "/topology/assets/opc_server.png",
        content:
          '<img height="40px" src="/topology/assets/opc_server.png"/><div>OPC服务器</div>'
      },
      {
        value: "/topology/assets/opc_client.png",
        content:
          '<img height="40px" src="/topology/assets/opc_client.png"/><div>OPC客户端</div>'
      },
      {
        value: "/topology/assets/engineer_station.png",
        content:
          '<img height="40px" src="/topology/assets/engineer_station.png"/><div>工程师站</div>'
      },
      {
        value: "/topology/assets/operator_station.png",
        content:
          '<img height="40px" src="/topology/assets/operator_station.png"/><div>操作员站</div>'
      },
      {
        value: "/topology/assets/mes.png",
        content:
          '<img height="40px" src="/topology/assets/mes.png"/><div>生产信息化管理系统(MES)</div>'
      },
      {
        value: "/topology/assets/qas.png",
        content:
          '<img height="40px" src="/topology/assets/qas.png"/><div>质量保证系统(QAS)</div>'
      },
      {
        value: "/topology/assets/qcs.png",
        content:
          '<img height="40px" src="/topology/assets/qcs.png"/><div>质量控制系统(QCS)</div>'
      },
      {
        value: "/topology/assets/mis.png",
        content:
          '<img height="40px" src="/topology/assets/mis.png"/><div>辅助决策系统(MIS)</div>'
      },
      {
        value: "/topology/assets/hmi.png",
        content:
          '<img height="40px" src="/topology/assets/hmi.png"/><div>人机交互系统(HMI)</div>'
      }
    ],
    imageIcons2: [
      {
        value: "/topology/assets/network_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/network_unkown_device.png"/><div>其他网络设备</div>'
      },
      {
        value: "/topology/assets/router.png",
        content:
          '<img height="40px" src="/topology/assets/router.png"/><div>路由器</div>'
      },
      {
        value: "/topology/assets/switch.png",
        content:
          '<img height="40px" src="/topology/assets/switch.png"/><div>交换机</div>'
      },
      {
        value: "/topology/assets/inswitch.png",
        content:
          '<img height="40px" src="/topology/assets/inswitch.png"/><div>工业交换机</div>'
      },
      {
        value: "/topology/assets/gateway.png",
        content:
          '<img height="40px" src="/topology/assets/gateway.png"/><div>网关</div>'
      }
    ],
    imageIcons3: [
      {
        value: "/topology/assets/security_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/security_unkown_device.png"/><div>其他安全设备</div>'
      },
      {
        value: "/topology/assets/fw.png",
        content:
          '<img height="40px" src="/topology/assets/fw.png"/><div>防火墙</div>'
      },
      {
        value: "/topology/assets/factory_fw.png",
        content:
          '<img height="40px" src="/topology/assets/factory_fw.png"/><div>工业防火墙</div>'
      },
      {
        value: "/topology/assets/ips.png",
        content:
          '<img height="40px" src="/topology/assets/ips.png"/><div>入侵防御系统</div>'
      },
      {
        value: "/topology/assets/ids.png",
        content:
          '<img height="40px" src="/topology/assets/ids.png"/><div>入侵检测系统</div>'
      },
      {
        value: "/topology/assets/scan.png",
        content:
          '<img height="40px" src="/topology/assets/scan.png"/><div>漏洞扫描系统</div>'
      },
      {
        value: "/topology/assets/mining.png",
        content:
          '<img height="40px" src="/topology/assets/mining.png"/><div>漏洞挖掘系统</div>'
      },
      {
        value: "/topology/assets/management_platform.png",
        content:
          '<img height="40px" src="/topology/assets/management_platform.png"/><div>监管平台系统</div>'
      },
      {
        value: "/topology/assets/gap.png",
        content:
          '<img height="40px" src="/topology/assets/gap.png"/><div>网闸</div>'
      },
      {
        value: "/topology/assets/access_gateway.png",
        content:
          '<img height="40px" src="/topology/assets/access_gateway.png"/><div>堡垒机</div>'
      },
      {
        value: "/topology/assets/log_audit.png",
        content:
          '<img height="40px" src="/topology/assets/log_audit.png"/><div>日志审计系统</div>'
      },
      {
        value: "/topology/assets/situation_awareness.png",
        content:
          '<img height="40px" src="/topology/assets/situation_awareness.png"/><div>态势感知系统</div>'
      },
      {
        value: "/topology/assets/ai_sec.png",
        content:
          '<img height="40px" src="/topology/assets/ai_sec.png"/><div>未知威胁检查系统</div>'
      },
      {
        value: "/topology/assets/eae.png",
        content:
          '<img height="40px" src="/topology/assets/eae.png"/><div>加密认证设备</div>'
      },
      {
        value: "/topology/assets/factory_audit.png",
        content:
          '<img height="40px" src="/topology/assets/factory_audit.png"/><div>工业审计系统</div>'
      },
      {
        value: "/topology/assets/fgap.png",
        content:
          '<img height="40px" src="/topology/assets/fgap.png"/><div>光闸</div>'
      },
      {
        value: "/topology/assets/utm.png",
        content:
          '<img height="40px" src="/topology/assets/utm.png"/><div>防病毒网关</div>'
      },
      {
        value: "/topology/assets/resist_denial_service.png",
        content:
          '<img height="40px" src="/topology/assets/resist_denial_service.png"/><div>抗拒绝服务攻击系统</div>'
      }
    ],
    imageIcons4: [
      {
        value: "/topology/assets/terminal_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/terminal_unkown_device.png"/><div>终端设备</div>'
      }
    ],
    imageIcons5: [
      {
        value: "/topology/assets/server_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/server_unkown_device.png"/><div>其他服务器设备</div>'
      },
      {
        value: "/topology/assets/mail_server.png",
        content:
          '<img height="40px" src="/topology/assets/mail_server.png"/><div>邮件服务器</div>'
      },
      {
        value: "/topology/assets/web_server.png",
        content:
          '<img height="40px" src="/topology/assets/web_server.png"/><div>web服务器</div>'
      },
      {
        value: "/topology/assets/app_server.png",
        content:
          '<img height="40px" src="/topology/assets/app_server.png"/><div>应用服务器</div>'
      }
    ],
    imageIcons6: [
      {
        value: "/topology/assets/monitor_unkown_device.png",
        content:
          '<img height="40px" src="/topology/assets/monitor_unkown_device.png"/><div>其他监控设备</div>'
      },
      {
        value: "/topology/assets/ip_camera.png",
        content:
          '<img height="40px" src="/topology/assets/ip_camera.png"/><div>网络摄像机(IP Camera)</div>'
      },
      {
        value: "/topology/assets/nvr.png",
        content:
          '<img height="40px" src="/topology/assets/nvr.png"/><div>网络视频录像机(NVR)</div>'
      },
      {
        value: "/topology/assets/dvr.png",
        content:
          '<img height="40px" src="/topology/assets/dvr.png"/><div>数字录像机(DVR)</div>'
      },
      {
        value: "/topology/assets/vms.png",
        content:
          '<img height="40px" src="/topology/assets/vms.png"/><div>视频管理服务器(VMS)</div>'
      }
    ],
    imageGender: [
      {
        value: "/topology/assets/member-male.png",
        content:
          '<img height="50px" src="/topology/assets/member-male.png" style="margin: 5px 0 0 2px;"/>'
      },
      {
        value: "/topology/assets/member-female.png",
        content:
          '<img height="50px" src="/topology/assets/member-female.png" style="margin: 5px 0 0 2px;"/>'
      }
    ],

    arrowheadSize: [
      { value: "M 0 0 0 0", content: "不显示" },
      { value: "M 0 -3 -6 0 0 3 z", content: "小" },
      { value: "M 0 -5 -10 0 0 5 z", content: "中" },
      { value: "M 0 -10 -15 0 0 10 z", content: "大" }
    ],

    strokeWidth: [
      {
        value: 1,
        content:
          '<div style="background:#fff;width:2px;height:30px;margin:0 14px;border-radius: 2px;"/>'
      },
      {
        value: 2,
        content:
          '<div style="background:#fff;width:4px;height:30px;margin:0 13px;border-radius: 2px;"/>'
      },
      {
        value: 4,
        content:
          '<div style="background:#fff;width:8px;height:30px;margin:0 11px;border-radius: 2px;"/>'
      },
      {
        value: 8,
        content:
          '<div style="background:#fff;width:16px;height:30px;margin:0 8px;border-radius: 2px;"/>'
      }
    ],

    router: [
      {
        value: "normal",
        content:
          '<p style="background:#fff;width:2px;height:30px;margin:0 14px;border-radius: 2px;"/>'
      },
      {
        value: "orthogonal",
        content:
          '<p style="width:20px;height:30px;margin:0 5px;border-bottom: 2px solid #fff;border-left: 2px solid #fff;"/>'
      },
      {
        value: "oneSide",
        content:
          '<p style="width:20px;height:30px;margin:0 5px;border: 2px solid #fff;border-top: none;"/>'
      }
    ],

    connector: [
      {
        value: "normal",
        content:
          '<p style="width:20px;height:20px;margin:5px;border-top:2px solid #fff;border-left:2px solid #fff;"/>'
      },
      {
        value: "rounded",
        content:
          '<p style="width:20px;height:20px;margin:5px;border-top-left-radius:30%;border-top:2px solid #fff;border-left:2px solid #fff;"/>'
      },
      {
        value: "smooth",
        content:
          '<p style="width:20px;height:20px;margin:5px;border-top-left-radius:100%;border-top:2px solid #fff;border-left:2px solid #fff;"/>'
      }
    ],

    labelPosition: [
      { value: 30, content: "源头" }, //接近源头 Close to source
      { value: 0.5, content: "中间" }, //在中间  In the middle
      { value: -30, content: "目标" } //接近目标  Close to target
    ],

    portMarkup: [
      {
        value: [
          {
            tagName: "rect",
            selector: "portBody",
            attributes: {
              width: 20,
              height: 20,
              x: -10,
              y: -10
            }
          }
        ],
        content: "Rectangle"
      },
      {
        value: [
          {
            tagName: "circle",
            selector: "portBody",
            attributes: {
              r: 10
            }
          }
        ],
        content: "Circle"
      },
      {
        value: [
          {
            tagName: "path",
            selector: "portBody",
            attributes: {
              d: "M -10 -10 10 -10 0 10 z"
            }
          }
        ],
        content: "Triangle"
      }
    ]
  };

  // console.log('[inspector]-options',options)

  App.config.inspector = {
    "standard.Rectangle": {
      inputs: {
        attrs: {
          label: {
            // text: {
            //     type: 'content-editable',
            //     label: '文本',
            //     group: 'text',
            //     index: 1,
            //     contenteditable: false,
            //     attrs:{
            //         body:{
            //             'disabled':true,
            //             'contenteditable': false
            //         }
            //     }
            // },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 2,
              attrs: {
                body: {
                  disabled: true,
                  contenteditable: false
                }
              }
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "Fill",
              group: "字体颜色",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            }
          },
          body: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/body/stroke": "transparent" } },
              index: 3
            },
            strokeDasharray: {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/body/stroke": "transparent" } },
                  { ne: { "attrs/body/strokeWidth": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },

    "app.Link": {
      inputs: {
        attrs: {
          line: {
            strokeWidth: {
              type: "select-button-group",
              options: options.strokeWidth,
              group: "connection",
              label: "链接厚度",
              when: { ne: { "attrs/line/stroke": "transparent" } },
              index: 4
            },
            strokeDasharray: {
              type: "select-box",
              options: options.strokeStyle,
              group: "connection",
              label: "链接样式",
              when: { ne: { "attrs/line/stroke": "transparent" } },
              index: 5
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              group: "connection",
              label: "颜色",
              index: 6
            },
            sourceMarker: {
              d: {
                type: "select-box",
                options: options.arrowheadSize,
                group: "marker-source",
                label: "源箭头",
                index: 1
              },
              fill: {
                type: "color-palette",
                options: options.colorPaletteReset,
                group: "marker-source",
                label: "颜色",
                when: { ne: { "attrs/line/sourceMarker/d": "M 0 0 0 0" } },
                index: 2
              }
            },
            targetMarker: {
              d: {
                type: "select-box",
                options: options.arrowheadSize,
                group: "marker-target",
                label: "目标箭头",
                index: 1
              },
              fill: {
                type: "color-palette",
                options: options.colorPaletteReset,
                group: "marker-target",
                label: "颜色",
                when: { ne: { "attrs/line/targetMarker/d": "M 0 0 0 0" } },
                index: 2
              }
            },
            // class: {
            //   type: "select-box",
            //   options: options.strokeLine,
            //   label: "线条动画效果",
            //   group: "presentation",
            //   when: {
            //     and: [
            //       { ne: { "attrs/body/stroke": "transparent" } },
            //       { ne: { "attrs/body/strokeWidth": 0 } }
            //     ]
            //   },
            //   index: 1
            // }
          }
        },
        router: {
          name: {
            type: "select-button-group",
            options: options.router,
            group: "connection",
            label: "链接类型",
            index: 1
          },
          args: {
            side: {
              type: "select-box",
              options: options.side,
              placeholder: "Pick a side",
              group: "connection",
              label: "锚边",
              when: {
                eq: { "router/name": "oneSide" },
                otherwise: { unset: true }
              },
              index: 2
            }
          }
        },
        connector: {
          name: {
            type: "select-button-group",
            options: options.connector,
            group: "connection",
            label: "链接方式",
            index: 3
          }
        },
        labels: {
          type: "list",
          group: "labels",
          label: "标签",
          attrs: {
            label: {
              "data-tooltip": "Set (possibly multiple) labels for the link",
              "data-tooltip-position": "right",
              "data-tooltip-position-selector": ".joint-inspector"
            }
          },
          item: {
            type: "object",
            properties: {
              attrs: {
                text: {
                  text: {
                    type: "content-editable",
                    label: "文本",
                    defaultValue: "label",
                    index: 1,
                    attrs: {
                      label: {
                        "data-tooltip": "Set text of the label",
                        "data-tooltip-position": "right",
                        "data-tooltip-position-selector": ".joint-inspector"
                      }
                    }
                  },
                  fill: {
                    type: "color-palette",
                    options: options.colorPaletteReset,
                    label: "文本颜色",
                    index: 5
                  }
                },
                rect: {
                  fill: {
                    type: "color-palette",
                    options: options.colorPaletteReset,
                    label: "背景",
                    index: 3
                  },
                  stroke: {
                    type: "color-palette",
                    options: options.colorPaletteReset,
                    label: "边框",
                    index: 4
                  }
                }
              },
              position: {
                type: "select-box",
                options: options.labelPosition || [],
                defaultValue: 0.5,
                label: "位置",
                placeholder: "Custom",
                index: 2,
                attrs: {
                  label: {
                    "data-tooltip": "相对于链接源定位标签",
                    "data-tooltip-position": "right",
                    "data-tooltip-position-selector": ".joint-inspector"
                  }
                }
              }
            }
          }
        }
      },
      groups: {
        connection: {
          label: "关系",
          index: 1
        },
        "marker-source": {
          label: "源标记",
          index: 2
        },
        "marker-target": {
          label: "源目标标记",
          index: 3
        },
        labels: {
          label: "标签",
          index: 4
        }
        //新家
        // presentation: {
        //     label: 'Presentation',
        //     index: 1
        // },
        // text: {
        //     label: 'Text',
        //     index: 2
        // }
      }
    },
    "bpmn.Pool": {
      lanes: {
        type: "object",
        group: "general",
        index: 1,
        attrs: {
          label: {
            style: "display:none;"
          }
        },
        properties: {
          label: {
            type: "text",
            label: "Label"
          },
          sublanes: {
            type: "list",
            label: "Add lanes",
            item: {
              type: "object",
              properties: {
                label: {
                  type: "text",
                  label: "Label",
                  attrs: {
                    label: {
                      style: "display:none;"
                    }
                  }
                },
                sublanes: {
                  type: "list",
                  label: "Add sublanes",
                  item: {
                    type: "object",
                    properties: {
                      label: {
                        type: "text",
                        label: "Label",
                        attrs: {
                          label: {
                            style: "display:none;"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      attrs: {
        ".body/fill": {
          type: "color",
          label: "Body Color",
          group: "appearance",
          index: 1
        },
        ".header/fill": {
          type: "color",
          label: "Header Color",
          group: "appearance",
          index: 2
        },
        ".lane-body/fill": {
          type: "color",
          label: "Lane Body Color",
          group: "appearance",
          index: 3
        },
        ".lane-header/fill": {
          type: "color",
          label: "Lane Header Color",
          group: "appearance",
          index: 4
        }
      }
    },

    "standard.Polygon": {
      inputs: {
        attrs: {
          label: {
            // text: {
            //   type: "content-editable",
            //   label: "文本",
            //   group: "text",
            //   index: 1,
            // },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 2
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            }
          },
          body: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/body/stroke": "transparent" } },
              index: 3
            },
            strokeDasharray: {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/body/stroke": "transparent" } },
                  { ne: { "attrs/body/strokeWidth": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },

    "standard.Image": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },

    "standard.EmbeddedImage": {
      inputs: {
        attrs: {
          label: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          body: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/body/stroke": "transparent" } },
              index: 3
            },
            strokeDasharray: {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/body/stroke": "transparent" } },
                  { ne: { "attrs/body/strokeWidth": 0 } }
                ]
              },
              index: 4
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "image",
              index: 1
            }
          }
        }
      },
      groups: {
        image: {
          label: "选择图片",
          index: 1
        },
        presentation: {
          label: "样式信息",
          index: 2
        },
        text: {
          label: "文本",
          index: 3
        }
      }
    },
    "standard.HeaderedRectangle": {
      inputs: {
        attrs: {
          // bodyText: {
          //   textWrap: {
          //     text: {
          //       type: "content-editable",
          //       label: "Wrapped text",
          //       group: "text",
          //       index: 1,
          //     },
          //   },
          //   fontSize: {
          //     type: "range",
          //     min: 5,
          //     max: 80,
          //     unit: "px",
          //     label: "字体大小",
          //     group: "text",
          //     when: { ne: { "attrs/bodyText/text": "" } },
          //     index: 2,
          //   },
          //   fontFamily: {
          //     type: "select-box",
          //     options: options.fontFamily,
          //     label: "字体类型",
          //     group: "text",
          //     when: { ne: { "attrs/bodyText/text": "" } },
          //     index: 3,
          //   },
          //   fontWeight: {
          //     type: "select-box",
          //     options: options.fontWeight,
          //     label: "字体粗细",
          //     group: "text",
          //     when: { ne: { "attrs/bodyText/text": "" } },
          //     index: 4,
          //   },
          //   fill: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "背景",
          //     group: "text",
          //     when: { ne: { "attrs/boduText/text": "" } },
          //     index: 5,
          //   },
          // },
          // headerText: {
          //   text: {
          //     type: "content-editable",
          //     label: "文本",
          //     group: "headerText",
          //     index: 1,
          //   },
          //   fontSize: {
          //     type: "range",
          //     min: 5,
          //     max: 80,
          //     unit: "px",
          //     label: "字体大小",
          //     group: "headerText",
          //     when: { ne: { "attrs/headerText/text": "" } },
          //     index: 2,
          //   },
          //   fontFamily: {
          //     type: "select-box",
          //     options: options.fontFamily,
          //     label: "字体类型",
          //     group: "headerText",
          //     when: { ne: { "attrs/headerText/text": "" } },
          //     index: 3,
          //   },
          //   fontWeight: {
          //     type: "select-box",
          //     options: options.fontWeight,
          //     label: "字体粗细",
          //     group: "headerText",
          //     when: { ne: { "attrs/headerText/text": "" } },
          //     index: 4,
          //   },
          //   fill: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "背景",
          //     group: "headerText",
          //     when: { ne: { "attrs/headerText/text": "" } },
          //     index: 5,
          //   },
          // },
          // body: {
          //   fill: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "背景",
          //     group: "presentation",
          //     index: 1,
          //   },
          //   stroke: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "边框",
          //     group: "presentation",
          //     index: 2,
          //   },
          //   strokeWidth: {
          //     type: "range",
          //     min: 0,
          //     max: 30,
          //     step: 1,
          //     defaultValue: 1,
          //     unit: "px",
          //     label: "边框宽度",
          //     group: "presentation",
          //     when: { ne: { "attrs/body/stroke": "transparent" } },
          //     index: 3,
          //   },
          //   strokeDasharray: {
          //     type: "select-box",
          //     options: options.strokeStyle,
          //     label: "边框样式",
          //     group: "presentation",
          //     when: {
          //       and: [
          //         { ne: { "attrs/body/stroke": "transparent" } },
          //         { ne: { "attrs/body/strokeWidth": 0 } },
          //       ],
          //     },
          //     index: 4,
          //   },
          // },
          // header: {
          //   fill: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "背景",
          //     group: "header",
          //     index: 1,
          //   },
          //   stroke: {
          //     type: "color-palette",
          //     options: options.colorPalette,
          //     label: "边框",
          //     group: "header",
          //     index: 2,
          //   },
          //   strokeWidth: {
          //     type: "range",
          //     min: 0,
          //     max: 30,
          //     step: 1,
          //     defaultValue: 1,
          //     unit: "px",
          //     label: "边框宽度",
          //     group: "header",
          //     when: { ne: { "attrs/header/stroke": "transparent" } },
          //     index: 3,
          //   },
          //   strokeDasharray: {
          //     type: "select-box",
          //     options: options.strokeStyle,
          //     label: "边框样式",
          //     group: "header",
          //     when: {
          //       and: [
          //         { ne: { "attrs/header/stroke": "transparent" } },
          //         { ne: { "attrs/header/strokeWidth": 0 } },
          //       ],
          //     },
          //     index: 4,
          //   },
          // },
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        },
        header: {
          label: "Header",
          index: 3
        },
        headerText: {
          label: "Header Text",
          index: 4
        }
      }
    },

    // "fsa.State": {
    //   inputs: {
    //     attrs: {
    //       text: {
    //         text: {
    //           type: "content-editable",
    //           label: "资产名称",
    //           group: "text",
    //           index: 1
    //         },
    //         "font-size": {
    //           type: "range",
    //           min: 5,
    //           max: 80,
    //           unit: "px",
    //           label: "字体大小",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 2
    //         },
    //         "font-family": {
    //           type: "select-box",
    //           options: options.fontFamily,
    //           label: "字体类型",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 3
    //         },
    //         "font-weight": {
    //           type: "select-box",
    //           options: options.fontWeight,
    //           label: "字体粗细",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 4
    //         },
    //         fill: {
    //           type: "color-palette",
    //           options: options.fontColor,
    //           label: "字体颜色",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 5
    //         }
    //       },
    //       circle: {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "presentation",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "presentation",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "presentation",
    //           when: { ne: { "attrs/circle/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "presentation",
    //           when: {
    //             and: [
    //               { ne: { "attrs/circle/stroke": "transparent" } },
    //               { ne: { "attrs/circle/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       }
    //     }
    //   },
    //   groups: {
    //     presentation: {
    //       label: "样式信息",
    //       index: 1
    //     },
    //     text: {
    //       label: "文本",
    //       index: 2
    //     }
    //   }
    // },

    "erd.Entity": {
      inputs: {
        attrs: {
          text: {
            text: {
              type: "content-editable",
              label: "名称",
              group: "text",
              index: 1
            },
            "font-size": {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 2
            },
            "font-family": {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 3
            },
            "font-weight": {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 5
            }
          },
          ".outer": {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            "stroke-width": {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/.outer/stroke": "transparent" } },
              index: 3
            },
            "stroke-dasharray": {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/.outer/stroke": "transparent" } },
                  { ne: { "attrs/.outer/stroke-width": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },
    // "erd.WeakEntity": {
    //   inputs: {
    //     attrs: {
    //       text: {
    //         text: {
    //           type: "content-editable",
    //           label: "资产名称",
    //           group: "text",
    //           index: 1
    //         },
    //         "font-size": {
    //           type: "range",
    //           min: 5,
    //           max: 80,
    //           unit: "px",
    //           label: "字体大小",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 2
    //         },
    //         "font-family": {
    //           type: "select-box",
    //           options: options.fontFamily,
    //           label: "字体类型",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 3
    //         },
    //         "font-weight": {
    //           type: "select-box",
    //           options: options.fontWeight,
    //           label: "字体粗细",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 4
    //         },
    //         fill: {
    //           type: "color-palette",
    //           options: options.fontColor,
    //           label: "字体颜色",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 5
    //         }
    //       },
    //       ".outer": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "outer",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "outer",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "outer",
    //           when: { ne: { "attrs/.outer/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "outer",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.outer/stroke": "transparent" } },
    //               { ne: { "attrs/.outer/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       },
    //       ".inner": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "inner",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "inner",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "inner",
    //           when: { ne: { "attrs/.inner/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "inner",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.inner/stroke": "transparent" } },
    //               { ne: { "attrs/.inner/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       }
    //     }
    //   },
    //   groups: {
    //     text: {
    //       label: "文本",
    //       index: 1
    //     },
    //     outer: {
    //       label: "Outer rectangle",
    //       index: 2
    //     },
    //     inner: {
    //       label: "Inner rectangle",
    //       index: 3
    //     }
    //   }
    // },
    "erd.Relationship": {
      inputs: {
        attrs: {
          text: {
            text: {
              type: "content-editable",
              label: "名称",
              group: "text",
              index: 1
            },
            "font-size": {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 2
            },
            "font-family": {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 3
            },
            "font-weight": {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 5
            }
          },
          ".outer": {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            "stroke-width": {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/.outer/stroke": "transparent" } },
              index: 3
            },
            "stroke-dasharray": {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/.outer/stroke": "transparent" } },
                  { ne: { "attrs/.outer/stroke-width": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },
    // "erd.IdentifyingRelationship": {
    //   inputs: {
    //     attrs: {
    //       text: {
    //         text: {
    //           type: "content-editable",
    //           label: "资产名称",
    //           group: "text",
    //           index: 1
    //         },
    //         "font-size": {
    //           type: "range",
    //           min: 5,
    //           max: 80,
    //           unit: "px",
    //           label: "字体大小",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 2
    //         },
    //         "font-family": {
    //           type: "select-box",
    //           options: options.fontFamily,
    //           label: "字体类型",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 3
    //         },
    //         "font-weight": {
    //           type: "select-box",
    //           options: options.fontWeight,
    //           label: "字体粗细",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 4
    //         },
    //         fill: {
    //           type: "color-palette",
    //           options: options.fontColor,
    //           label: "字体颜色",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 5
    //         }
    //       },
    //       ".outer": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "outer",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "outer",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "outer",
    //           when: { ne: { "attrs/.outer/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "outer",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.outer/stroke": "transparent" } },
    //               { ne: { "attrs/.outer/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       },
    //       ".inner": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "inner",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "inner",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "inner",
    //           when: { ne: { "attrs/.inner/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "inner",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.inner/stroke": "transparent" } },
    //               { ne: { "attrs/.inner/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       }
    //     }
    //   },
    //   groups: {
    //     text: {
    //       label: "文本",
    //       index: 1
    //     },
    //     outer: {
    //       label: "Outer polygon",
    //       index: 2
    //     },
    //     inner: {
    //       label: "Inner polygon",
    //       index: 3
    //     }
    //   }
    // },
    "erd.Key": {
      inputs: {
        attrs: {
          // text: {
          //   text: {
          //     type: "content-editable",
          //     label: "资产名称",
          //     group: "text",
          //     index: 1
          //   },
          //   "font-size": {
          //     type: "range",
          //     min: 5,
          //     max: 80,
          //     unit: "px",
          //     label: "字体大小",
          //     group: "text",
          //     when: { ne: { "attrs/text/text": "" } },
          //     index: 2
          //   },
          //   "font-family": {
          //     type: "select-box",
          //     options: options.fontFamily,
          //     label: "字体类型",
          //     group: "text",
          //     when: { ne: { "attrs/text/text": "" } },
          //     index: 3
          //   },
          //   "font-weight": {
          //     type: "select-box",
          //     options: options.fontWeight,
          //     label: "字体粗细",
          //     group: "text",
          //     when: { ne: { "attrs/text/text": "" } },
          //     index: 4
          //   },
          //   fill: {
          //     type: "color-palette",
          //     options: options.fontColor,
          //     label: "字体颜色",
          //     group: "text",
          //     when: { ne: { "attrs/text/text": "" } },
          //     index: 5
          //   }
          // },
          path: {
            // fill: {
            //   type: 'color-palette',
            //   options: options.colorPalette,
            //   label: 'Fill',
            //   group: 'presentation',
            //   index: 1
            // },
            stroke: {
              type: 'color-palette',
              options: options.colorPalette,
              label: '线条颜色',
              group: 'presentation',
              index: 2
            },
            'stroke-width': {
              type: 'range',
              min: 2,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: 'px',
              label: '线条宽度',
              group: 'presentation',
              when: { ne: { 'attrs/polygon/stroke': 'transparent' } },
              index: 3
            },
            'stroke-dasharray': {
              type: 'select-box',
              options: options.strokeStyle,
              label: '线条类型',
              group: 'presentation',
              when: {
                and: [
                  { ne: { 'attrs/polygon/stroke': 'transparent' } },
                  { ne: { 'attrs/polygon/stroke-width': 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        text: {
          label: "文本",
          index: 1
        },
        outer: {
          label: "Outer ellipse",
          index: 2
        },
        inner: {
          label: "Inner ellipse",
          index: 3
        }
      }
    },
    "erd.Normal": {
      inputs: {
        attrs: {
          text: {
            text: {
              type: "content-editable",
              label: "名称",
              group: "text",
              index: 1
            },
            "font-size": {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 2
            },
            "font-family": {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              index: 3
            },
            "font-weight": {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 5
            }
          },
          ".outer": {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            "stroke-width": {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/.outer/stroke": "transparent" } },
              index: 3
            },
            "stroke-dasharray": {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/.outer/stroke": "transparent" } },
                  { ne: { "attrs/.outer/stroke-width": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },
    // "erd.Multivalued": {
    //   inputs: {
    //     attrs: {
    //       text: {
    //         text: {
    //           type: "content-editable",
    //           label: "资产名称",
    //           group: "text",
    //           index: 1
    //         },
    //         "font-size": {
    //           type: "range",
    //           min: 5,
    //           max: 80,
    //           unit: "px",
    //           label: "字体大小",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 2
    //         },
    //         "font-family": {
    //           type: "select-box",
    //           options: options.fontFamily,
    //           label: "字体类型",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 3
    //         },
    //         "font-weight": {
    //           type: "select-box",
    //           options: options.fontWeight,
    //           label: "字体粗细",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 4
    //         },
    //         fill: {
    //           type: "color-palette",
    //           options: options.fontColor,
    //           label: "字体颜色",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 5
    //         }
    //       },
    //       ".outer": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "outer",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "outer",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "outer",
    //           when: { ne: { "attrs/.outer/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "outer",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.outer/stroke": "transparent" } },
    //               { ne: { "attrs/.outer/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       },
    //       ".inner": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "inner",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "inner",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "inner",
    //           when: { ne: { "attrs/.inner/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "inner",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.inner/stroke": "transparent" } },
    //               { ne: { "attrs/.inner/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       }
    //     }
    //   },
    //   groups: {
    //     text: {
    //       label: "文本",
    //       index: 1
    //     },
    //     outer: {
    //       label: "Outer ellipse",
    //       index: 2
    //     },
    //     inner: {
    //       label: "Inner ellipse",
    //       index: 3
    //     }
    //   }
    // },
    // "erd.Derived": {
    //   inputs: {
    //     attrs: {
    //       text: {
    //         text: {
    //           type: "content-editable",
    //           label: "资产名称",
    //           group: "text",
    //           index: 1
    //         },
    //         "font-size": {
    //           type: "range",
    //           min: 5,
    //           max: 80,
    //           unit: "px",
    //           label: "字体大小",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 2
    //         },
    //         "font-family": {
    //           type: "select-box",
    //           options: options.fontFamily,
    //           label: "字体类型",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 3
    //         },
    //         "font-weight": {
    //           type: "select-box",
    //           options: options.fontWeight,
    //           label: "字体粗细",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 4
    //         },
    //         fill: {
    //           type: "color-palette",
    //           options: options.fontColor,
    //           label: "字体颜色",
    //           group: "text",
    //           when: { ne: { "attrs/text/text": "" } },
    //           index: 5
    //         }
    //       },
    //       ".outer": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "outer",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "outer",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "outer",
    //           when: { ne: { "attrs/.outer/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "outer",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.outer/stroke": "transparent" } },
    //               { ne: { "attrs/.outer/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       },
    //       ".inner": {
    //         fill: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "背景",
    //           group: "inner",
    //           index: 1
    //         },
    //         stroke: {
    //           type: "color-palette",
    //           options: options.colorPalette,
    //           label: "边框",
    //           group: "inner",
    //           index: 2
    //         },
    //         "stroke-width": {
    //           type: "range",
    //           min: 0,
    //           max: 30,
    //           step: 1,
    //           defaultValue: 1,
    //           unit: "px",
    //           label: "边框宽度",
    //           group: "inner",
    //           when: { ne: { "attrs/.inner/stroke": "transparent" } },
    //           index: 3
    //         },
    //         "stroke-dasharray": {
    //           type: "select-box",
    //           options: options.strokeStyle,
    //           label: "边框样式",
    //           group: "inner",
    //           when: {
    //             and: [
    //               { ne: { "attrs/.inner/stroke": "transparent" } },
    //               { ne: { "attrs/.inner/stroke-width": 0 } }
    //             ]
    //           },
    //           index: 4
    //         }
    //       }
    //     }
    //   },
    //   groups: {
    //     text: {
    //       label: "文本",
    //       index: 1
    //     },
    //     outer: {
    //       label: "Outer ellipse",
    //       index: 2
    //     },
    //     inner: {
    //       label: "Inner ellipse",
    //       index: 3
    //     }
    //   }
    // },
    "erd.ISA": {
      inputs: {
        attrs: {
          text: {
            text: {
              type: "content-editable",
              label: "名称",
              group: "text",
              index: 1
            },
            "font-size": {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 2
            },
            "font-family": {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 3
            },
            "font-weight": {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 4
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/text/text": "" } },
              index: 5
            }
          },
          polygon: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 1
            },
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 2
            },
            "stroke-width": {
              type: "range",
              min: 0,
              max: 30,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/polygon/stroke": "transparent" } },
              index: 3
            },
            "stroke-dasharray": {
              type: "select-box",
              options: options.strokeStyle,
              label: "边框样式",
              group: "presentation",
              when: {
                and: [
                  { ne: { "attrs/polygon/stroke": "transparent" } },
                  { ne: { "attrs/polygon/stroke-width": 0 } }
                ]
              },
              index: 4
            }
          }
        }
      },
      groups: {
        presentation: {
          label: "样式信息",
          index: 1
        },
        text: {
          label: "文本",
          index: 2
        }
      }
    },


    "standard.factory_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.plc": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.rtu": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.dcs": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.dcm": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.prpsp": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.dtu": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.vfd": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.opc_server": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.opc_client": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.engineer_station": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.operator_station": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.mes": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.qas": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.qcs": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.mis": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.hmi": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

    // 网络设备

    "standard.network_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons2,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.router": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons2,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.switch": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons2,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.inswitch": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons2,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.gateway": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons2,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

    //安全设备其他设备
    "standard.security_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.fw": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.factory_fw": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.ips": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.ids": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.scan": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.mining": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.management_platform": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.gap": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.access_gateway": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.log_audit": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.situation_awareness": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.ai_sec": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.eae": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.factory_audit": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.fgap": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.utm": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.resist_denial_service": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons3,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

    // 终端设备
    "standard.terminal_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons4,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

    // 服务器未知设备
    "standard.server_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons5,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.mail_server": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons5,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.web_server": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons5,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.app_server": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons5,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

    // 监控设备
    "standard.monitor_unkown_device": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons6,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.ip_camera": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons6,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.nvr": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons6,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.dvr": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons6,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },
    "standard.vms": {
      inputs: {
        attrs: {
          label: {
            text: {
              type: "content-editable",
              label: "资产名称",
              group: "text",
              index: 1
            },
            fontSize: {
              type: "range",
              min: 5,
              max: 80,
              unit: "px",
              label: "字体大小",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 3
            },
            fontFamily: {
              type: "select-box",
              options: options.fontFamily,
              label: "字体类型",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 4
            },
            fontWeight: {
              type: "select-box",
              options: options.fontWeight,
              label: "字体粗细",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 5
            },
            fill: {
              type: "color-palette",
              options: options.fontColor,
              label: "字体颜色",
              group: "text",
              when: { ne: { "attrs/label/text": "" } },
              index: 6
            }
          },
          image: {
            xlinkHref: {
              type: "select-box",
              options: options.imageIcons6,
              label: "选择图片",
              group: "presentation",
              index: 1
            }
          },
          background: {
            fill: {
              type: "color-palette",
              options: options.colorPalette,
              label: "背景",
              group: "presentation",
              index: 2
            }
          },
          border: {
            stroke: {
              type: "color-palette",
              options: options.colorPalette,
              label: "边框",
              group: "presentation",
              index: 3
            },
            strokeWidth: {
              type: "range",
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 1,
              unit: "px",
              label: "边框宽度",
              group: "presentation",
              when: { ne: { "attrs/border/stroke": "transparent" } },
              index: 4
            }
          },
          typeData: {
            text1: {
              type: "textarea",
              label: "资产IP",
              group: "text",
              index: 2
            }
          }
        }
      },
      groups: {
        presentation: { label: "样式信息", index: 1 },
        text: { label: "资产信息", index: 2 },
        typeData: { label: "设备详情", index: 3 }
      }
    },

  };
  // console.log('[inspector]',App.config)
})();
