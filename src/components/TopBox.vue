<template>
  <div id="topbox">
    <UserInfo />

    <HomeBottom />
    <MenuBottom style="flex-direction: row" />

  </div>
</template>

<script setup>
import MenuBottom from "./widgets/topBox/MenuBottom.vue";
import SearchBottom from "./widgets/topBox/SearchBottom.vue";
import HomeBottom from "./widgets/topBox/HomeBottom.vue";
import UserInfo from "./widgets/topBox/UserInfo.vue/"

</script>

<style scoped>
#topbox {
  width: 100%;
  height: 60px;
  background-color: aliceblue;
  padding: 5px;
}
div:not(#logo) {
  /*   border: 2px solid red;
 */
  border-radius: 10px;
}

img {
  height: 100%;
  object-fit: cover;
}

#topbox {
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  color: antiquewhite;
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  padding-inline: 5px;

  box-shadow: 4px 4px 3px #3b3b3b, -4px -4px 3px rgb(95 94 94 / 25%),
    inset 0px 0px 0px #747474, inset 0px -0px 0px #c2c2c2;

  z-index: 30;
}

.top-fixed {
  margin-top: -50px;
  position: fixed;
}

#topbox>div:not(#userinfo) {
  width: 50px;
  height: 100%;
  padding: 0 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>