<template>
  <div class="search">
    <el-autocomplete
      v-model="hosname"
      clearable
      placeholder="请你输入医院名称"
      class="form"
      :fetch-suggestions="fetchData"
      :trigger-on-focus="false"
      @select="goDetail"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo, Content } from "@/api/home/type";
import { useRouter } from "vue-router";

let $router = useRouter();

let hosname = ref<string>("");

const fetchData = async (keyword: string, cb: any) => {
  let result: HospitalInfo = await reqHospitalInfo(keyword);
  // console.log(result, cb);
  let showData = result.data.map((item) => {
    return {
      value: item.hosname, //医院名字
      hoscode: item.hoscode, //医院编码
    };
  });
  cb(showData);
};

const goDetail = (item: any) => {
  $router.push({
    path: "/hospital/register",
    query: { hoscode: item.hoscode },
  });
};
</script>

<script lang="ts">
export default {
  name: "Search",
};
</script>
<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  //   ::v-deep .el-input__wrapper {
  //     width: 600px;
  //   }
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>
