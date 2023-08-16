<template>
  <div id="labelBox">
    <winLabel v-for="item in labelList" :labelId="item">{{ item }}</winLabel>
  </div>
  <div id="toolBox">
    <pathBox>Path</pathBox>
    <searchBox>Path</searchBox>
  </div>
  <div id="fileBox">
    <itemFile v-for="item in fileList" :labelId="item">{{ item }}</itemFile>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import searchBox from "@/components/widgets/mainbox/operaview/searchBox.vue"
import pathBox from "@/components/widgets/mainbox/operaview/pathBox.vue"
import winLabel from "@/components/widgets/mainbox/operaview/winLabel.vue"
import itemFile from "@/components/widgets/mainbox/operaview/itemFile.vue"

let labelList = ['ghj','Docment','Music']
let fileList = ['123','456']
onMounted(() => {
  let routerParmas = useRouter()
  console.log(routerParmas.currentRoute.value.params)
})
</script>

<style scoped>
#toolBox {
  width: 100%;
  height: 40px;
  border: 1px red solid inset;

  display: flex;
  justify-content: flex-end;
  /* flex-direction: row-reverse; */
}

#labelBox {
  display: flex;

  justify-content: flex-start;
  width: 100%;
  height: 40px;
  padding: 0 20px;
}
</style>