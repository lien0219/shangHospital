<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop></HospitalTop>
    <!-- 路由组件展示 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>
