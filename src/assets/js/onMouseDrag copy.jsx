import $ from 'jquery'
import { createVNode, render } from 'vue'
import { domToVNode } from './domToVNode'


const onMouseDrag = (e, item) => {
  let dragItem = document.getElementsByClassName(item)[0]
  let dragItemPrt = dragItem.parentNode

  // 获取鼠标在元素上的位置（鼠标按下时在元素上得位置）
  let x = e.clientX - dragItem.offsetLeft;
  let y = e.clientY - dragItem.offsetTop;
  let initialStyle = dragItem.style
  // let
  //   initialStylePosition = dragItem.style.position,
  //   initialStyleHeight = dragItem.style.height,
  //   initialStyleLeft = dragItem.style.left,
  //   initialStyleTop = dragItem.style.top

  // const vNode = domToVNode(dragItem)
  // const container = dragItem
  // render(vNode, dragItemPrt)
  // for (value in container) {
  //   // console.log(`key:${key}`)
  //   console.log(`value:${value}`)
  // }
  let newDragItem = dragItem.cloneNode(true)
  dragItemPrt.insertBefore(newDragItem, dragItemPrt.firstChild)
  
  const dragStart = (e) => {
    // console.log(x, y)

    dragItem.style.position = 'absolute'
    dragItem.style.height = '40px'
    dragItem.style.left = e.clientX - x + "px";
    dragItem.style.top = e.clientY - y + "px";
  }
  const dragEnd = () => {
    console.log('dragEnd')

    // dragItem.classList.add('transition');
    dragItem.style = initialStyle

    // dragItem.style.position = initialStylePosition
    // dragItem.style.height = initialStyleHeight
    // dragItem.style.left = initialStyleLeft
    // dragItem.style.top = initialStyleTop
    setTimeout(() => {
      // dragItem.classList.remove('transition');
    }, 1000);
    document.removeEventListener('mousemove', dragStart)
    document.removeEventListener('mouseup', dragEnd)

  }

  document.addEventListener('mousemove', dragStart)
  document.addEventListener('mouseup', dragEnd)
}


export { onMouseDrag }