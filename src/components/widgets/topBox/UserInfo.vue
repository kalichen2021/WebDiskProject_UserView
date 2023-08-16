<template>
  <div id="userinfo">
    <div id="logo">
      <img src="../../../assets/logo.svg" alt="logo" />
    </div>
    <div id="text">
      <span id="username">zhangsan</span>
      <span id="email">123456@666.com</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
#userinfo {
  width: auto;
  height: 100%;
  background-color: rgb(0, 41, 41);
  position: relative;
  margin-right: 0;

  border-radius: 50px;
  padding-right: 5px;
  display: flex;
  flex-direction: row;
}

#logo {
  width: 40px;
  height: 100%;
  padding: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%),
    inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
}

#logo img {
  width: 120%;
  border-radius: 50%;
}

#text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2px;
}
#text span{
  font-size: 15px;
  height: auto;
}
</style>