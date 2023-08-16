<script setup>
import { onMounted, defineComponent  } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import TopBox from "@/components/TopBox.vue"
import MainBox from "@/components/MainBox.vue"

var view = 'userview'
</script>

<template>
  <TopBox></TopBox>
  <MainBox></MainBox>
  <!-- <components :is="view"/> -->
</template>

<style>
</style>
