<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { SET_TOKEN } from "@/utils/user";

let $route = useRoute();
// console.log($route.query);
SET_TOKEN(JSON.stringify($route.query));
// 授权成功隐藏
let html: any = document.querySelector("html");
html.style.display = "none";
</script>

<style scoped></style>
