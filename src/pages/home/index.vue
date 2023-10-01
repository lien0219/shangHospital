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
        <Level @getLevel="getLevel"></Level>
        <!-- 地区 -->
        <Region @getRegion="getRegion"></Region>
        <div class="hospital" v-if="hasHospitalArr.length > 0">
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          ></Card>
        </div>
        <el-empty v-else description="暂无数据" />
        <!-- 分页器   @size-change="handleSizeChange"
            @current-change="handleCurrentChange"-->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="total"
          @current-change="getHospitalInfo"
          @size-change="sizeChange"
        />
      </el-col>
      <el-col :span="4">
        <Tip></Tip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./carousel/index.vue";
import Search from "./search/index.vue";
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import Tip from "./tip/index.vue";

import { ref, onMounted } from "vue";
import { reqHospital } from "@/api/home";
import type { Content, HospitalResponseData } from "@/api/home/type";

let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);
let hasHospitalArr = ref<Content>([]);
// 存储医院等级参数
let hostype = ref<string>("");
//存储医院的地区参数
let districtCode = ref<string>("");

onMounted(() => {
  getHospitalInfo();
});
/*card的数据*/
const getHospitalInfo = async () => {
  let result: HospitalResponseData = await reqHospital(
    pageNo.value,
    pageSize.value,
    // query级别和地区筛选参数
    hostype.value,
    districtCode.value
  );

  if (result.code == 200) {
    hasHospitalArr.value = result.data.content;
    total.value = result.data.totalElements;
    // pageNo.value = result.data.totalPages;
  }
};
/*分页*/
// const currentChange = () => {
//   getHospitalInfo();
// };
const sizeChange = () => {
  pageNo.value = 1;
  getHospitalInfo();
};

// 子组件事件
const getLevel = (item: string) => {
  // console.log(item);
  hostype.value = item;
  getHospitalInfo();
};
const getRegion = (item: string) => {
  districtCode.value = item;
  getHospitalInfo();
};
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
