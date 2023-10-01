<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="item in levelArr"
          :key="item.value"
          @click="changeLevel(item.value)"
          :class="{ active: activeFlag == item.value }"
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

let levelArr = ref<HospitalLevelAndRegionArr>([]);
// 控制高亮
let activeFlag = ref<string>("");

onMounted(() => {
  getLevel();
});
const getLevel = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("HosType");
  if (result.code == 200) {
    levelArr.value = result.data;
  }
};

const changeLevel = (item: string) => {
  activeFlag.value = item;
  // 回传item给父组件
  $emit("getLevel", item);
};
let $emit = defineEmits(["getLevel"]);
</script>
<script lang="ts">
export default {
  name: "Level",
};
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  h1 {
    font-weight: 900;
    margin: 10px;
  }
  .content {
    display: flex;
    .left {
      margin-left: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-left: 10px;
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
