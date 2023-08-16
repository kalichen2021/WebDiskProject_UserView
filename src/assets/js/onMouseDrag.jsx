/**
 * 
 * @param {object} e Event对象
 * @param {string} item DOM节点:class,id,tagName
 * @param {Function} start_Func 拖动时执行的函数
 * @param {Function} end_Func 拖动结束时执行的函数
 */

const onMouseDrag = (e, item, start_Func = () => { }, end_Func = () => { }) => {
  let dragItem = document.getElementsByClassName(item)[0]
  let dragItemPrt = dragItem.parentNode

  // 获取鼠标在元素上的位置（鼠标按下时在元素上得位置）
  let mouseX = e.clientX - dragItem.offsetLeft;
  let mouseY = e.clientY - dragItem.offsetTop;

  // 复制一模一样的DOM
  let newDragItem = dragItem.cloneNode(true)

  // 开始拖动
  const dragStart = (e) => {
    // console.log(x, y)

    // 插入新创建的DOM
    dragItemPrt.insertBefore(newDragItem, dragItemPrt.firstChild)

    // 给新创建的DOM赋予新的style
    newDragItem.style.zIndex = 100
    newDragItem.style.backdropFilter = "blur(20px)"
    newDragItem.style.backgroundColor = "rgba(255,255,255,0.2)"
    newDragItem.style.height = '40px'
    newDragItem.style.position = 'absolute'

    let x,y
    x = newDragItem.style.left = e.clientX - mouseX + "px";
    y = newDragItem.style.top = e.clientY - mouseY + "px";

    let absAxis = {x,y}
    start_Func(absAxis)
  }

  // 结束拖动
  const dragEnd = () => {
    // 判断dragItemPrt是否有子节点newDragItem
    if (dragItemPrt.contains(newDragItem)) {
      console.log('dragEnd')
      dragItemPrt.removeChild(newDragItem)
      end_Func()
    }

    // setTimeout(() => {
    //   // dragItem.classList.remove('transition');
    // }, 1000);
    document.removeEventListener('mousemove', dragStart)
    document.removeEventListener('mouseup', dragEnd)

  }

  document.addEventListener('mousemove', dragStart)
  document.addEventListener('mouseup', dragEnd)
}


export { onMouseDrag }