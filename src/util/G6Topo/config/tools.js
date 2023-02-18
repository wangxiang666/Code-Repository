export const initTools = function (G6, _this) {
  return {
    minimap: new G6.Minimap({ //小地图
      container: document.getElementById('topo-minimap'),
      size: [300, 300],
      // type: 'default',
      type: 'delegate',
      delegateStyle: {
        fill: '#000',
        fillOpacity: 0.2
      }
    }),
    toolbar: new G6.ToolBar({
      position: {
        x: 10,
        y: 0
      }
    }),
    //节点悬浮窗
    tooltip: new G6.Tooltip({
      offsetX: 0,
      offsetY: -100,
      // 允许出现 tooltip 的 item 类型
      itemTypes: ['node', 'edge'],
      // 自定义 tooltip 内容
      getContent: (e) => {
        const outDiv = document.createElement('div');
        outDiv.style.width = 'fit-content';
        outDiv.style.padding = '0px 0px 20px 0px';
        outDiv.innerHTML = `
          <h4>Custom Content</h4>
          <ul>
            <li>IP: ${e.item.getModel().label}</li>
          </ul>
          <ul>
            <li>Label: ${e.item.getModel().name || e.item.getModel().id}</li>
          </ul>`;
        return outDiv;
      },
      shouldBegin: (e) => {
        let res = true;
        switch (e.item.getModel().id) {
          case '1':
            res = false;
            break;
          default:
            res = true;
            break;
        }
        return res;
      }
    }),
    //右键菜单
    contextMenu: new G6.Menu({
      shouldBegin(evt) {
        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) return true;
        if (evt.item) return true;
        return false;
      },
      getContent(evt) {
        const {
          item
        } = evt;

        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
          return `<ul>
                    <li id='deleteNode'>点击的是画布</li>
                  </ul>`;
        } else if (!item) return;
        const itemType = item.getType();
        const model = item.getModel();
        console.log(evt, itemType, model, 'itemType')
        if (itemType && model) {
          if (itemType === 'node') {
            return `<ul>
                        <li id='collapse'>查看告警事件</li>
                        <li id='deleteNode'>删除节点</li>
                      </ul>`;
          } else if (itemType === 'combo') {
            return `<ul>
                      <li id='deleteNode'>删除区域</li>
                    </ul>`;
          } else if (itemType === 'edge') {
            return `<ul>
                      <li id='deleteNode'>删除连线</li>
                    </ul>`;
          } else {
            return `<ul>
                      <li id='hide'>Hide the Edge</li>
                    </ul>`;
          }
        }
      },
      handleMenuClick: (target, item) => {
        const liIdStrs = target.id
        switch (liIdStrs) {
          case 'collapse':
            break
          case 'deleteNode':
            _this.graph.removeItem(item);
            break
          default:
            break;
        }
      },
      offsetX: 0,
      offsetY: -100,
      // 在哪些类型的元素上响应
      itemTypes: ['node', 'edge', 'canvas', 'combo']
    })
  }
}