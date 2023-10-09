<template>
  <div>
    <div v-if="$route.query.orderId">
      <Detail></Detail>
    </div>
    <div v-else>
      <AllOrder></AllOrder>
    </div>
  </div>
</template>

<script setup lang="ts">
import Detail from "@/pages/user/order/detail/index.vue";
import AllOrder from "@/pages/user/order/allOrder/index.vue";
import { useRoute } from "vue-router";

let $route = useRoute();
</script>

<style scoped></style>
