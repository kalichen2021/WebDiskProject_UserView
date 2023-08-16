<template>
  <div :class="props.labelId" class="label" ondragstart="return false;"
    @mousedown.stop="onMouseDrag($event, props.labelId, onDrag_Start)">
    <RouterLink :to="'/opera/' + props.labelId">
      <el-icon>
        <Fold />
      </el-icon>
      <slot>本地文件</slot>
    </RouterLink>
    <Close class="elClose" />
  </div>
</template>

<script setup lang="jsx">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, h, defineComponent, createVNode, render } from 'vue'
import { onMouseDrag } from '@/assets/js/onMouseDrag.jsx'

import searchBox from '@/components/widgets/mainbox/operaview/searchBox.vue'


const props = defineProps({
  labelId: {
    type: String,
    default: 0
  }
})

const onDrag_Start = (axis) => {
  const labelBoxDom = document.getElementById('labelBox')
  let x = parseInt(axis.x)
  let stlLeft = x-x % document.getElementsByClassName('label')[0].clientWidth
  let newDom = <div style={`
  height:40px;
  width: 10px;
  background-color: red;
  position: absolute;
  left:${stlLeft + 'px'};
  `}></div>
  console.log(stlLeft)
  render(newDom, labelBoxDom)
}

</script>

<style>
.label>a {
  text-decoration: none;
  display: flex;
  align-items: center;
  display: flex;
  flex: 1 1 auto;


  color: aliceblue;

}

.label>a>* {
  margin-right: 0.1em;
}

.label {
  width: 8em;
  height: 100%;

  background-color: rgb(118, 118, 118);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  margin: auto 5px;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.5em;
}

.label>* {
  margin-right: 0.1em;
  color: aliceblue;
}

.elClose {
  margin-left: auto;
  width: 0.8em;
  flex: 0 0 auto;

}

.elClose:hover {
  rotate: 0.5turn;
  transition: all 0.5s;
  cursor: pointer;
}
</style>