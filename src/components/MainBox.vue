<template>
  <div id="mainbox">
    <div id="view">
      <RouterView />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#mainbox {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

#view {
  min-height: 600px;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  border:1px rgb(36, 36, 36) solid;
}

</style>