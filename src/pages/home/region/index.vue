<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: RegionFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="item in RegionArr"
          :key="item.value"
          @click="changeRegion(item.value)"
          :class="{ active: RegionFlag == item.value }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";

let RegionArr = ref<HospitalLevelAndRegionArr>([]);
// 控制高亮
let RegionFlag = ref<string>("");

onMounted(() => {
  getRegion();
});
const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("Beijin");
  if (result.code == 200) {
    RegionArr.value = result.data;
  }
};

const changeRegion = (item: string) => {
  RegionFlag.value = item;
  // 回传item给父组件
  $emit("getRegion", item);
};
let $emit = defineEmits(["getRegion"]);
</script>
<script lang="ts">
export default {
  name: "Region",
};
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin: 10px;
  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 6%;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
