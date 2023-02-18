/**
 * @author claude
 * @date 2020/02/24
 * @description 锚点事件
 */



export default (anchor, group, p) => {
  // 鼠标移入事件
  anchor.on('mouseenter', () => {
    // 可以传入多个键值对
    anchor.attr({
      cursor: 'crosshair'
    });
  });
};