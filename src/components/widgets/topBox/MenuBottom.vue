<template>
  <div class="MenuBottom">
    <label for="burger" class="burger" >
      <input id="burger" type="checkbox" @click="listShow =! listShow"/>
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div id="list" v-show="listShow">
      <div>0</div>
      <div>1</div>
      <div>2</div>
    </div>
  </div>
</template>
<script>
/* import $ from "jquery";
 */
export default {
  name: "MenuBottom",
  data() {
    return {
      listShow: false,
    };
  },
/*   methods: {
    show: function () {
      if (this.listShow) {
        $("#list").css("display", "none");
      } else {
        $("#list").css("display", "block");
      }
      this.listShow = !this.listShow;
    },
  },
 */};
</script>
<style scoped>
.burger {
  position: relative;
  width: 100%;
  height: 30px;
  background: transparent;
  cursor: pointer;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 90%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;

}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 25px;
  left: 6px;
}
#list {
  display: flex;
  flex-direction: column;
  position: fixed;

  right: 0;
  top: 55px;
  
  padding: 5px;
  padding-top: 10px;
  width: 50px;
  height: auto;
  border-radius: 10px;
  background-color: rgb(6, 107, 82);

  box-shadow: 1.5px 1.5px 3px #888888, -1.5px -1.5px 3px rgb(95 94 94 / 25%),
    inset 0px 0px 0px #7e7e7e, inset 0px -0px 0px #a8a8a8;
}
</style>