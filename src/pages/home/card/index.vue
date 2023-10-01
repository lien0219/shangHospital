<template>
  <el-card class="box-card" @click="goDetail" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospitalInfo.hosname }}</div>
        <div class="tip">
          <div class="level">
            <svg
              t="1694884396456"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4013"
              width="16"
              height="16"
            >
              <path
                d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                fill="#bfbfbf"
                p-id="4014"
              ></path>
            </svg>
            <span>{{ hospitalInfo.param.hostypeString }}</span>
          </div>
          <div class="time">
            <svg
              t="1694884727295"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6039"
              width="16"
              height="16"
            >
              <path
                d="M523.1 171.7c-211.6 0-383 175.8-383 392.8 0 98.5 35.4 188.4 93.8 257.3l-89.6 112.6 26.9 22.6L258 847.9c68.8 67.7 162.1 109.3 265 109.3 103.2 0 196.7-41.9 265.6-109.9l86.8 109.8 27.1-22.5-89.7-113.5c58.1-68.9 93.3-158.5 93.3-256.7 0-216.9-171.5-392.7-383-392.7z m0 749.8c-192 0-348.2-160.1-348.2-357s156.2-357.1 348.2-357.1 348.2 160.2 348.2 357.1-156.2 357-348.2 357zM348 64.6H244.5c-96.2 0-174.1 79.9-174.1 178.5v107.4H120l228-235.2V64.6z m-34.8 36L105.5 314.8h-0.2v-71.7c0-78.8 62.5-142.8 139.3-142.8h68.6v0.3zM801.2 64.6H697.7v50.8l228.1 235.2h49.5V243.1c0-98.6-78-178.5-174.1-178.5z m139.3 250.2h-0.2L732.5 100.6v-0.3h68.7c76.8 0 139.3 64.1 139.3 142.8v71.7z"
                fill="#415560"
                p-id="6040"
              ></path>
              <path
                d="M523.1 564.4H331.2v35.8h226.7V278.8h-34.8z"
                fill="#415560"
                p-id="6041"
              ></path>
            </svg>
            <!-- ？空数据 -->
            <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64,${hospitalInfo.logoData}`" alt="" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let $router = useRouter();

const goDetail = () => {
  $router.push({
    path: "/hospital/register",
    query: { hoscode: props.hospitalInfo.hoscode },
  });
};

let props = defineProps(["hospitalInfo"]);
</script>

<style scoped lang="scss">
.box-card {
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      width: 60%;
      .hospital_name {
      }
      .tip {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        color: #7f7f7f;
        .level {
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
        .time {
          display: flex;
          align-items: center;
          span {
            margin-left: 5px;
          }
        }
      }
    }
    .right {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
