<template>
  <div>
    <!-- 轮播图 -->
    <Carousel></Carousel>
    <!-- 搜索 -->
    <Search></Search>
    <!-- 医院结构 -->
    <el-row :gutter="20" style="margin-bottom: 10px">
      <el-col :span="20">
        <!-- 等级 -->
        <Level></Level>
        <!-- 地区 -->
        <Region></Region>
        <div class="hospital">
          <Card class="item" v-for="(item, index) in 10" :key="index"></Card>
        </div>
        <!-- 分页器   @size-change="handleSizeChange"
            @current-change="handleCurrentChange"-->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="13"
        />
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";

import { ref } from "vue";

let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
