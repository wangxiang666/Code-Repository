// import G6 from '@antv/g6'
var App = window.App || {}
;(function (_, joint) {
  'use strict'
  App.MainView = joint.mvc.View.extend({
    className: 'app',
    events: {
      'mouseup input[type="range"]': 'removeTargetFocus',
      mousedown: 'removeFocus',
      touchstart: 'removeFocus'
    },
    removeTargetFocus: function (evt) {
      evt.target.blur()
    },
    removeFocus: function (evt) {
      // 不要将焦点分散在右键单击上
      if (evt.button === 2) return
      // 如果再次单击当前元素，请不要失去焦点
      var activeElement = document.activeElement
      var target = evt.target
      if ($.contains(activeElement, target) || activeElement === target) return
      activeElement.blur()
      window.getSelection().removeAllRanges()
    },
    init: function () {
      this.initializePaper()
      this.initializeStencil()
      this.initializeSelection()
      this.initializeToolsAndInspector()
      this.initializeNavigator()
      this.initializeToolbar()
      this.initializeKeyboardShortcuts()
      this.initializeTooltips()
    },
    // 制作一个图表，纸，然后用PaperScroller将纸包裹起来。
    initializePaper: function () {
      var graph = (this.graph = new joint.dia.Graph())
      // var viewportOverlap = 50;
      // var viewportRect = paperScroller.getVisibleArea().inflate(viewportOverlap);
      // paperScroller.el.onscroll = function() {
      //     viewportRect = paperScroller.getVisibleArea().inflate(viewportOverlap);
      // };
      graph.on(
        'add',
        function (cell, collection, opt) {
          console.log('新增一个元素：', cell)
          if (opt.stencil) this.createInspector(cell)
        },
        this
      )
      this.commandManager = new joint.dia.CommandManager({ graph: graph })
      var paper = (this.paper = new joint.dia.Paper({
        width: 1000,
        height: 1000,
        gridSize: 10,
        drawGrid: true, //选择是否绘制纸格。
        snapLinks: true, //启用后，强制拖动的链接捕捉到给定半径内最接近的元素/端口。该选项接受true在这种情况下使用默认值或可以指定半径的形式的对象
        linkPinning: false, //可以将链接固定在纸张上
        embeddingMode: true, //分组方法,纸张设置为嵌入模式
        model: graph,
        defaultLink: new joint.shapes.app.Link(),
        defaultConnectionPoint: joint.shapes.app.Link.connectionPoint,
        interactive: { linkMove: true },
        async: true, //async-当时true，论文使用异步渲染来显示图形单元格（即，用或方法添加的单元格）。graph.resetCells()graph.addCells()
        sorting: joint.dia.Paper.sorting.APPROX, //在本文中呈现视图时要使用的排序类型
        validateEmbedding: function (childView, parentView) {
          //只有固定的box才能有层级效果
          var Pool = joint.shapes.bpmn.Pool
          return parentView.model instanceof Pool && !(childView.model instanceof Pool)
        }
      }))
      paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this)
      paper.on('cell:mousewheel', this.onMousewheel, this)
      this.snaplines = new joint.ui.Snaplines({ paper: paper })
      var paperScroller = (this.paperScroller = new joint.ui.PaperScroller({
        paper: paper,
        autoResizePaper: true,
        scrollWhileDragging: true,
        cursor: 'grab'
      }))
      window.paperScroller = paperScroller
      // console.log("paperScroller", paperScroller);
      this.$('.paper-container').append(paperScroller.el)
      paperScroller.render().center()
      // this.paperScroller.transitionToPoint(410, 430);
    },
    // 创建并填充模具。
    initializeStencil: function () {
      var stencil = (this.stencil = new joint.ui.Stencil({
        paper: this.paperScroller,
        snaplines: this.snaplines,
        scaleClones: true,
        width: 240,
        groups: App.config.stencil.groups,
        dropAnimation: true,
        groupsToggleButtons: true,
        layout: {
          // columnWidth: 100,
          // columns: 1,
          // marginX: 50,
          // rowHeight: 100,
          // columnGap:100,
          rowGap: 10
        },
        label: '所有类型',
        search: {
          '*': ['type', 'attrs/text/text', 'attrs/root/dataTooltip', 'attrs/label/text'],
          'org.Member': ['attrs/.rank/text', 'attrs/root/dataTooltip', 'attrs/.name/text']
        },
        // 使用默认网格布局
        // layout: true,
        //从克隆中删除工具提示定义
        dragStartClone: function (cell) {
          return cell.clone().removeAttr('root/dataTooltip')
        }
      }))
      this.$('.stencil-container').append(stencil.el)
      stencil.render().load(App.config.stencil.shapes)
    },
    initializeKeyboardShortcuts: function () {
      this.keyboard = new joint.ui.Keyboard()
      this.keyboard.on(
        {
          'ctrl+c': function (evt) {
            console.log('---[ctrl+c]---', this.selection.collection)
            evt.preventDefault()
            // 复制所有选定图元及其关联链接。
            this.clipboard.copyElements(this.selection.collection, this.graph)
          },
          'ctrl+v': function (evt) {
            evt.preventDefault()
            var pastedCells = this.clipboard.pasteCells(this.graph, {
              translate: { dx: 20, dy: 20 },
              useLocalStorage: true
            })
            var elements = _.filter(pastedCells, function (cell) {
              return cell.isElement()
            })
            //确保立即选择粘贴的元素。这使得UX变得更好，因为，用户可以立即操作粘贴的元素。
            this.selection.collection.reset(elements)
          },
          'ctrl+x shift+delete': function () {
            // this.clipboard.cutElements(this.selection.collection, this.graph);
          },
          'delete backspace': function (evt) {
            let editingState = sessionStorage.getItem('editingState')
            if (editingState === 'false') return //判断是否编辑
            console.log('this.selection.collection', this.selection.collection.toArray())
            // console.log(this.selection.collection.toArray())
            let type = this.selection.collection.toArray()[0].attributes.type
            // if (type === "standard.Polygon") return;
            if (type === 'standard.Rectangle') return
            evt.preventDefault()
            this.graph.removeCells(this.selection.collection.toArray())
          },
          'ctrl+z': function () {
            this.commandManager.undo()
            this.selection.cancelSelection()
          },
          'ctrl+y': function () {
            this.commandManager.redo()
            this.selection.cancelSelection()
          },
          'ctrl+a': function () {
            this.selection.collection.reset(this.graph.getElements())
          },
          'ctrl+plus': function (evt) {
            evt.preventDefault()
            console.log('[---zo-om1----2]')
            this.paperScroller.zoom(0.2, { max: 5, grid: 0.2 })
          },
          'ctrl+minus': function (evt) {
            evt.preventDefault()
            console.log('[---zo-om1----3]')
            this.paperScroller.zoom(-0.2, { min: 0.2, grid: 0.2 })
          },
          'keydown:shift': function () {
            this.paperScroller.setCursor('crosshair')
          },
          'keyup:shift': function () {
            this.paperScroller.setCursor('grab')
          }
        },
        this
      )
    },
    initializeSelection: function () {
      this.clipboard = new joint.ui.Clipboard()
      this.selection = new joint.ui.Selection({
        paper: this.paper,
        handles: App.config.selection.handles,
        useModelGeometry: true
      })
      this.selection.collection.on('reset add remove', this.onSelectionChange.bind(this))
      // 当用户在按住Shift键的同时抓住纸张的空白区域时，启动选择。否则，启动纸盘。
      this.paper.on(
        {
          'blank:pointerdown': function (evt, x, y) {
            if (this.keyboard.isActive('shift', evt)) {
              this.selection.startSelecting(evt)
            } else {
              this.selection.collection.reset([])
              this.paperScroller.startPanning(evt, x, y)
              this.paper.removeTools()
            }
          },

          'element:contextmenu': function (cellView, evt, x, y) {
            console.log('[右键1]----cellView', cellView, evt, x, y)
            const type = cellView.model.attributes.type
            const editingState = sessionStorage.getItem('editingState')
            const navIndex = sessionStorage.getItem('navIndex') //当前拓扑大类型
            console.log('navIndex', navIndex)
            console.log('[右键1]----type', type)
            if (type === 'standard.Rectangle') {
              console.log('[右键1]----editingState', editingState)
            }
          },
          'element:pointerclick': function (cellView, evt) {
            // /在元素上单击指针时触发
            evt.stopPropagation()
            // this.toggleBranch(cellView.model);
          },
          // "cell:pointerclick": function(cellView) {
          //   // 突出显示单元格
          //   cellView.highlight();
          //   // this.toggleBranch(cellView.model);
          // },
          'element:pointerdblclick': function (cellView) {
            // 在元素上双击击指针时触发
            console.log('在元素上双击击指针时触发')
            const type = cellView.model.attributes.type
            const editingState = sessionStorage.getItem('editingState')
            if (editingState === 'true') return //判断是否编辑
            const noClickType = [
              'standard.Rectangle',
              'bpmn.Pool',
              'standard.Image',
              'erd.Key',
              'erd.Entity',
              'erd.Relationship',
              'erd.ISA',
              'erd.Normal'
            ]
            if (noClickType.indexOf(type) === -1) {
              window.storeInfo.commit('ASSET_INFO_DATA', cellView.model.attributes.id)
            }
          },
          'blank:pointerclick': function (cellView, evt, x, y) {
            console.log('在任何单元格外部的纸张上单击指针时触发。回调函数传递evt，x并y作为参数。')
            window.storeInfo.commit('INSPECTOR_STATE', false)
            //在任何单元格外部的纸张上单击指针时触发。回调函数传递evt，x并y作为参数。
          },
          'element:magnet:contextmenu': function (elementView, evt, magnetSVGElement, x, y) {
            console.log('[右键2]----elementView', elementView, evt, magnetSVGElement, x, y)
          },
          // "element:mouseover": function(cellView, evt) {
          //   console.log('[元素：鼠标悬停1-1]----',cellView, evt);
          // },
          // "element:mouseout": function(cellView, evt) {
          //   console.log('移除',cellView, evt)
          // },
          'element:pointerdown': function (elementView, evt) {
            // console.log("element:pointerdown ------  在元素上按下指针时触发",elementView.model.id);
            this.upStore(
              { id: elementView.model.id, type: elementView.model.attributes.type },
              'upData'
            )
            // 如果在单击元素的同时按住CTRL/Meta键，请选择该元素
            if (this.keyboard.isActive('ctrl meta', evt)) {
              if (
                this.selection.collection.find(function (cell) {
                  return cell.isLink()
                })
              ) {
                // 不允许在所选内容中混合链接和元素
                this.selection.collection.reset([elementView.model])
              } else {
                this.selection.collection.add(elementView.model)
              }
            }
          },
          'link:pointerdown': function (elementView) {
            console.log(
              'element:pointerdown ------  在链接上按下指针时触发。',
              elementView.model.id
            )
            this.upStore(
              { id: elementView.model.id, type: elementView.model.attributes.type },
              'upData'
            )
          },
          'selection-box:pointerdown': function (elementView, evt) {
            // 如果在单击选定图元的同时按住Ctrl/Meta键，请取消选择图元。
            if (this.keyboard.isActive('ctrl meta', evt)) {
              evt.preventDefault()
              this.selection.collection.remove(elementView.model)
            }
          }
        },
        this
      )
    },
    onSelectionChange: function () {
      var paper = this.paper
      var selection = this.selection
      var collection = selection.collection
      paper.removeTools()
      joint.ui.Halo.clear(paper)
      joint.ui.FreeTransform.clear(paper)
      joint.ui.Inspector.close()
      if (collection.length === 1) {
        var primaryCell = collection.first()
        var primaryCellView = paper.requireView(primaryCell)
        selection.destroySelectionBox(primaryCell)
        this.selectPrimaryCell(primaryCellView)
      } else if (collection.length === 2) {
        collection.each(function (cell) {
          selection.createSelectionBox(cell)
        })
      }
    },
    selectPrimaryCell: function (cellView) {
      var cell = cellView.model
      console.log('---[1]---')
      if (cell.isElement()) {
        this.selectPrimaryElement(cellView)
      } else {
        this.selectPrimaryLink(cellView)
      }
      this.createInspector(cell)
    },
    selectPrimaryElement: function (elementView) {
      var element = elementView.model
      new joint.ui.FreeTransform({
        cellView: elementView,
        allowRotation: false,
        preserveAspectRatio: !!element.get('preserveAspectRatio'),
        allowOrthogonalResize: element.get('allowOrthogonalResize') !== false
      }).render()
      //判断是否为盒子或者编辑模式
      const editingState = sessionStorage.getItem('editingState') //是否是编辑模式
      const navIndex = sessionStorage.getItem('navIndex') //当前拓扑大类型
      const type = elementView.model.attributes.type //当前拓扑类型
      console.log('editingState', editingState)
      console.log('navIndex', navIndex)
      console.log('type', type)
      console.log('type', typeof type)
      if (editingState != 'false') {
        // && type != "standard.Polygon"
        // && type != "standard.Rectangle"
        this.halo = new joint.ui.Halo({
          cellView: elementView,
          handles: App.config.halo.handles,
          useModelGeometry: true
          // type: 'pie'
        }).render()
        // if (type === "standard.Polygon") {
        // if (type === "standard.Rectangle") {
        //   this.halo.removeHandle("remove");
        //   this.halo.removeHandle("unlink");
        //   this.halo.removeHandle("clone");
        //   this.halo.removeHandle("fork");
        // }
        // if (type === "bpmn.Pool") {
        //   this.halo.removeHandle("remove");
        //   this.halo.removeHandle("unlink");
        //   this.halo.removeHandle("clone");
        //   this.halo.removeHandle("fork");
        //   this.halo.removeHandle("link");
        // }
        // const dicIndex = ['3', '4', '6'].includes(navIndex)
        // // if ( navIndex != 4 && type != "standard.Polygon" ) {
        // if (!dicIndex && type !== "standard.Rectangle") {
        //   this.halo.removeHandle("link");
        //   this.halo.removeHandle("fork");
        // }
      }
    },
    selectPrimaryLink: function (linkView) {
      var ns = joint.linkTools
      var toolsView = new joint.dia.ToolsView({
        name: 'link-pointerdown',
        tools: [
          new ns.Vertices(),
          new ns.SourceAnchor(),
          new ns.TargetAnchor(),
          new ns.SourceArrowhead(),
          new ns.TargetArrowhead(),
          new ns.Segments(),
          new ns.Boundary({ padding: 15 }),
          new ns.Remove({ offset: -20, distance: 40 })
        ]
      })
      linkView.addTools(toolsView)
    },
    createInspector: function (cell) {
      console.log('[创建一个Inspector]---->', cell)
      window.storeInfo.commit('INSPECTOR_STATE', true)
      function isIP(value) {
        let REG =
          /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
        function ipToInt(ip) {
          let result = REG.exec(ip)
          if (!result) return -1
          return (
            ((parseInt(result[1]) << 24) |
              (parseInt(result[2]) << 16) |
              (parseInt(result[3]) << 8) |
              parseInt(result[4])) >>>
            0
          )
        }
        let list = value.split(',')
        for (let i = 0; i < list.length; i++) {
          if (ipToInt(list[i]) === -1) {
            console.log('请填写正确格式的IP')
            return false
          }
        }
        console.log('正确')
        return true
      }
      function validateProperty(path, value) {
        if (path === 'attrs/typeData/text1') {
          if (!isIP(value)) {
            return '请输入正确IP如(127.0.0.1)'
          }
          return null
        } else {
          return null
        }
      }
      var inspector = joint.ui.Inspector.create(
        '.inspector-container',
        _.extend(
          {
            cell: cell,
            inputs: function () {
              return {
                'attrs/typeData/text1': {
                  type: 'textarea'
                  // label: "Fill Color3"
                }
              }
            },
            validateInput: function (el, path, type, inspector) {
              if (path !== 'attrs/typeData/text1') {
                return true
              }
              let inspectorList = JSON.parse(sessionStorage.getItem('inspectorList'))
              let state = true
              for (let i = 0; i < window.rappidStore.createData.length; i++) {
                if (window.rappidStore.createData[i].id === cell.id) {
                  state = false
                }
              }
              //监听修改的内容
              var $el = $(el),
                html
              let value = inspector.parse(type, inspector.getFieldValue(el, type), el)
              $el.removeClass('error').parent().find('error').remove()
              if (state) {
                html = $('<error class="error" />').text('系统自带的IP，本次修改无效')
                $el.addClass('error').before(html)
                return true
              } else {
                let error = validateProperty(path, value)
                if (!inspectorList) {
                  inspectorList = {}
                  inspectorList[cell.id] = {
                    id: cell.id,
                    type: cell.attributes.type,
                    position: cell.attributes.position,
                    ip: value
                  }
                } else {
                  inspectorList[cell.id] = {
                    id: cell.id,
                    type: cell.attributes.type,
                    position: cell.attributes.position,
                    ip: value
                  }
                }
                sessionStorage.setItem('inspectorList', JSON.stringify(inspectorList))
                if (error) {
                  html = $('<error class="error" />').text(error)
                  $el.addClass('error').before(html)
                }
                return true
              }
            }
            // getFieldValue:function(attribute, type, inspector) {
            //   // console.log('validateInput',attribute, type, inspector)
            // },
          },
          App.config.inspector[cell.get('type')]
        )
      )

      return inspector
    },
    initializeToolsAndInspector: function () {
      this.paper.on(
        {
          'cell:pointerup': function (cellView) {
            let editingState = sessionStorage.getItem('editingState')
            if (editingState === 'false') return //判断是否编辑
            var cell = cellView.model
            var collection = this.selection.collection
            if (collection.includes(cell)) return
            collection.reset([cell])
          },
          'link:mouseenter': function (linkView) {
            // Open tool only if there is none yet
            if (linkView.hasTools()) return
            var ns = joint.linkTools
            var toolsView = new joint.dia.ToolsView({
              name: 'link-hover',
              tools: [
                new ns.Vertices({ vertexAdding: false }),
                new ns.SourceArrowhead(),
                new ns.TargetArrowhead()
              ]
            })
            linkView.addTools(toolsView)
          },
          'link:mouseleave': function (linkView) {
            // Remove only the hover tool, not the pointerdown tool
            if (linkView.hasTools('link-hover')) {
              linkView.removeTools()
            }
          }
        },
        this
      )
      this.graph.on(
        {
          change: function (cell, opt) {
            // console.log('1.-----[change 事件 图形中的任何更改都会触发通用事件]-----',cell, opt)
            if (!cell.isLink() || !opt.inspector) return
            var ns = joint.linkTools
            var toolsView = new joint.dia.ToolsView({
              name: 'link-inspected',
              tools: [new ns.Boundary({ padding: 15 })]
            })
            cell.findView(this.paper).addTools(toolsView)
          },
          add: function (cell) {
            console.log('2.-----[add将新单元格添加到图形时触发]-----', cell)
            this.upStore({ id: cell.attributes.id, type: cell.attributes.type }, 'createData')
            // if ( cell.attributes.type === "app.Link" || cell.attributes.type === "standard.Polygon" || cell.attributes.type === "bpmn.Pool" ) {
            if (
              cell.attributes.type === 'app.Link' ||
              cell.attributes.type === 'standard.Rectangle' ||
              cell.attributes.type === 'bpmn.Pool'
            ) {
              return
            }
            if (!cell.attributes.attrs.hasOwnProperty('typeData')) {
              return
            }
            let inspectorList = JSON.parse(sessionStorage.getItem('inspectorList'))
            let typeDataText = cell.attributes.attrs.typeData.text1
            let typeDataType = Object.prototype.toString.call(typeDataText).slice(8, -1)
            if (!inspectorList) {
              inspectorList = {}
              inspectorList[cell.id] = {
                id: cell.id,
                type: cell.attributes.type,
                position: cell.attributes.position,
                ip: typeDataType === 'Array' ? typeDataText[0] : typeDataText
              }
            } else {
              inspectorList[cell.id] = {
                id: cell.id,
                type: cell.attributes.type,
                position: cell.attributes.position,
                ip: typeDataType === 'Array' ? typeDataText[0] : typeDataText
              }
            }
            sessionStorage.setItem('inspectorList', JSON.stringify(inspectorList))
          },
          remove: function (cell) {
            console.log('3.-----[remove从图中删除单元格时触发]-----', cell)
            this.upStore({ id: cell.attributes.id, type: cell.attributes.type }, 'deleteData')
          }
          // "change:embeds": (cell, opt) => {
          //   console.log("-----[change:embeds 事件  当其他单元格嵌入到元素中时触发-fn（element，newEmbeds，opt）]-----");
          // },
        },
        this
      )
    },
    initializeNavigator: function () {
      console.log('[---zo-om1----]')
      var navigator = (this.navigator = new joint.ui.Navigator({
        width: 240,
        height: 115,
        paperScroller: this.paperScroller,
        zoom: {
          grid: 0.2,
          min: 0.2,
          max: 5
        },
        paperOptions: {
          async: true,
          elementView: joint.shapes.app.NavigatorElementView,
          linkView: joint.shapes.app.NavigatorLinkView,
          cellViewNamespace: {
            /* no other views are accessible in the navigator */
          }
        }
      }))
      this.$('.navigator-container').append(navigator.el)
      navigator.render()
    },
    initializeToolbar: function () {
      var toolbar = (this.toolbar = new joint.ui.Toolbar({
        autoToggle: true,
        groups: App.config.toolbar.groups,
        tools: App.config.toolbar.tools,
        references: {
          paperScroller: this.paperScroller,
          commandManager: this.commandManager
        }
      }))
      toolbar.on({
        'svg:pointerclick': this.openAsSVG.bind(this),
        'png:pointerclick': this.openAsPNG.bind(this),
        'to-front:pointerclick': this.applyOnSelection.bind(this, 'toFront'),
        'to-back:pointerclick': this.applyOnSelection.bind(this, 'toBack'),
        'layout:pointerclick': this.layoutDirectedGraph.bind(this), //
        'snapline:change': this.changeSnapLines.bind(this),
        // "clear:pointerclick": this.graph.clear.bind(this.graph),
        'clear:pointerclick': this.clickClear.bind(this),
        'print:pointerclick': this.paper.print.bind(this.paper),
        'grid-size:change': this.paper.setGridSize.bind(this.paper),
        'save:pointerclick': this.saveData.bind(this),
        'searchBtn:pointerclick': this.searchClick.bind(this),
        'selectBox:option:select': this.layoutDirectedGraph.bind(this),
        'fullscreen:pointerclick': function () {
          window.storeInfo.commit('FULL_SCREEN_STATE', 'main')
        }
      })
      this.$('.toolbar-container').append(toolbar.el)
      toolbar.render()
    },
    applyOnSelection: function (method) {
      this.graph.startBatch('selection')
      this.selection.collection.models.forEach(function (model) {
        model[method]()
      })
      this.graph.stopBatch('selection')
    },
    changeSnapLines: function (checked) {
      console.log('checked', checked)
      if (checked) {
        this.snaplines.startListening()
        this.stencil.options.snaplines = this.snaplines
      } else {
        this.snaplines.stopListening()
        this.stencil.options.snaplines = null
      }
    },
    initializeTooltips: function () {
      new joint.ui.Tooltip({
        rootTarget: document.body,
        target: '[data-tooltip]',
        direction: 'auto',
        padding: 10,
        animation: true
      })
    },
    // backwards compatibility for older shapes
    exportStylesheet: '.scalable * { vector-effect: non-scaling-stroke }',
    openAsSVG: function () {
      var paper = this.paper
      paper.hideTools().toSVG(
        function (svg) {
          new joint.ui.Lightbox({
            image: 'data:image/svg+xml,' + encodeURIComponent(svg),
            downloadable: true,
            fileName: '资产拓扑'
          }).open()
          paper.showTools()
        },
        {
          preserveDimensions: true,
          convertImagesToDataUris: true,
          useComputedStyles: false,
          stylesheet: this.exportStylesheet
        }
      )
    },
    openAsPNG: function () {
      var paper = this.paper
      paper.hideTools().toPNG(
        function (dataURL) {
          new joint.ui.Lightbox({ image: dataURL, downloadable: true, fileName: '资产拓扑' }).open()
          paper.showTools()
        },
        {
          padding: 10,
          useComputedStyles: false,
          stylesheet: this.exportStylesheet
        }
      )
    },
    onMousewheel: function (cellView, evt, x, y, delta) {
      console.log('[---zo-om1----]')
      if (this.keyboard.isActive('alt', evt)) {
        evt.preventDefault()
        this.paperScroller.zoom(delta * 0.2, {
          min: 0.2,
          max: 5,
          grid: 0.2,
          ox: x,
          oy: y
        })
      }
    },
    layoutDirectedGraph: function (e) {
      console.log('layoutDirectedGraph - e', e.value)
      let rankDirs = e.value
      console.log('this.graph', this.graph)
      // console.log("[所有数据]：--", this.graph.getCells());
      // if (rankDirs !== "ForceDirected" && rankDirs !== "Default") {
      let getLinks = this.graph.getLinks()
      let arrObj = []
      getLinks.map((item) => {
        let obj = item
        obj.attributes.vertices = []
        arrObj.push(obj)
      })
      this.graph.resetCells(this.graph.toJSON().cells, arrObj)
      if (rankDirs === 'Default') {
        joint.layout.GridLayout.layout(this.graph, {
          parentRelative: true, //将元素相对于父母放置
          rowHeight: 100, //-行高
          columns: 10, //列数
          columnWidth: 130, //列宽
          marginX: 100, //设置x最左上角元素的原点默认为0
          marginY: 100, //设置y最左上角元素的原点默认为0
          deep: true //-设置为时，对元素使用深度定位true。即不仅移动元素，还移动元素的后代。默认为
          //'top' -网格中的元素与网格单元的顶部对齐
          // 'middle' -网格中的元素与网格单元的中心对齐
          // 'bottom' -网格中的元素与网格单元的底部对齐
          // verticalAlign: 'middle', //网格中的元素与网格单元的顶部对齐 如果centre禁用
          // centre: false //不推荐使用-将元素放置在网格单元的中心。默认为true。
        })
      } else if (rankDirs === 'ForceDirected') {
        let graphLayout = new joint.layout.ForceDirected({
          graph: this.graph,
          x: 0, //距离上面的距离
          y: 0,
          width: 1500, //纸张里面绘画力图的宽度
          height: 1500,
          // gravityCenter: { x: 2500, y: 2500 }, // 节点的区域的中心
          charge: 200, //离心力
          linkDistance: 100 //线条的长度
          // linkStrength: 10
        })
        console.log('graphLayout', graphLayout)
        graphLayout.start()
        graphLayout.step()

        Array.from({ length: 200 }).forEach(function () {
          graphLayout.step()
          // console.log('step')
        })

        // setInterval(() => {
        //   console.log('setInterval;500')
        //   graphLayout.step();
        // }, 65)
      } else {
        joint.layout.DirectedGraph.layout(this.graph, {
          setLinkVertices: true, // 是否给线加弯曲点
          // resizeClusters:true,//父元素拉伸以适合其所有嵌入子元素
          // ranker: 'network-simplex',  //网络-单工
          // ranker: 'tight-tree',  //紧凑的树
          ranker: 'longest-path', //最长路径
          rankDir: rankDirs,
          marginX: 50,
          marginY: 50
        })
        // let graphLayout = new joint.layout.TreeLayout({
        //   //树形
        //   graph: this.graph,
        //   parentGap: 60,
        //   siblingGap: 60,
        //   direction: rankDirs
        // });
        // graphLayout.layout();
      }

      let list = this.graph.getCells()
      let arr = []
      list.map((item) => {
        arr.push({ id: item.id, type: item.attributes.type })
      })
      window.rappidStore.newLayout = arr
      let screenWidth = document.body.clientWidth,
        screeHeight = document.body.clientHeight
      this.paperScroller.transitionToPoint((screenWidth - 400) / 2, (screeHeight - 200) / 2)
    },
    saveData: function () {
      // console.log('this.toolbar',this.toolbar)
      // console.log($('#btn-inputText').val())
      // let getCellsData = this.graph.getCells();
      let jsons = this.graph.toJSON()
      // console.log(getCellsData);
      console.log(jsons)
      console.log(JSON.stringify(jsons))
      // console.log(JSON.stringify(getCellsData));
    },
    searchClick: function (e) {
      //定位搜索的地点
      console.log('定位搜索的地点', e)
    },
    clickClear: function () {
      const num =
        new Date().getTime() +
        'xxxxxx'.replace(/[xy]/g, function () {
          return (9 * Math.random()) | 1
        })
      console.log('sss', window, num)
      window.storeInfo.commit('CLICK_CLEAR_SVG', num)
      // this.graph.fromJSON({ cells: [] });
      // this.graph.clear(this.graph)
    },
    toggleBranch: function (root) {
      // 该viewport函数还可以用于支持折叠/展开行为：async
      // console.log("root", root);
      // var shouldHide = !root.get("collapsed");
      // root.set("collapsed", shouldHide);
      // this.graph.getSuccessors(root).forEach(function(successor) {
      //   successor.set("hidden", shouldHide);
      //   successor.set("collapsed", false);
      // });
    },
    upStore: function (obj, type) {
      // let editingState = sessionStorage.getItem("editingState");
      // if(editingState === 'false') return; //判断是否编辑
      // console.log("upStore方法：", obj, type);
      // if (obj.type === "standard.Polygon" || obj.type === "bpmn.Pool") {
      if (obj.type === 'standard.Rectangle' || obj.type === 'bpmn.Pool') {
        //Polygon 和 HeaderedRectangle 不可修改
        if (type === 'createData' || type === 'deleteData') {
          return
        }
      }
      if (type === 'createData') {
        let upStyle = window.rappidStore.upStyle
        for (let i = 0; i < upStyle.length; i++) {
          if (upStyle[i].id === obj.id) {
            return
          }
        }
      }
      window.rappidStore[type].push(obj)
      // console.log(type, " <---[进来的数据]---> ", data);
      console.log(type, '进来的数据window.rappidStore ---> ', window.rappidStore)
    }
  })
  // console.log('[App.MainView]',App.MainView)
})(_, joint)
