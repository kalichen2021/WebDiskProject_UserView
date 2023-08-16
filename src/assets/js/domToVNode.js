import { h } from 'vue'

function domToVNode(dom) {
  if (dom.nodeType === Node.ELEMENT_NODE) {
    const children = []
    for (let i = 0; i < dom.childNodes.length; i++) {
      children.push(domToVNode(dom.childNodes[i]))
    }
    const data = {}
    if (dom.hasAttribute('class')) {
      data.class = dom.getAttribute('class')
    }
    if (dom.hasAttribute('id')) {
      data.id = dom.getAttribute('id')
    }
    return h(dom.tagName, data, children)
  } else if (dom.nodeType === Node.TEXT_NODE) {
    return dom.textContent
  }
}

export { domToVNode }