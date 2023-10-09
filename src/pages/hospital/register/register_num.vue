<template>
  <div class="container">
    <div class="tip">确认挂号</div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>请选择就诊人</span>
          <el-button type="success" size="default" :icon="User" @click="goUser"
            >添加就诊人</el-button
          >
        </div>
      </template>
      <div class="user">
        <Visitor
          @click="changeIndex(index)"
          v-for="(user, index) in userArr"
          :key="user.id"
          class="item"
          :user="user"
          :index="index"
          :currentIndex="currentIndex"
        ></Visitor>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>挂号信息</span>
        </div>
      </template>
      <div>
        <el-descriptions class="margin-top" :column="2" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊日期：</div>
            </template>
            {{ doctorInfo.workDate }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊医院：</div>
            </template>
            {{ doctorInfo.param?.hosname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊科室：</div>
            </template>
            {{ doctorInfo.param?.depname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生姓名：</div>
            </template>
            {{ doctorInfo.docname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生职称：</div>
            </template>
            {{ doctorInfo.title }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生专长：</div>
            </template>
            {{ doctorInfo.skill }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生服务费：</div>
            </template>
            <span style="color: red">{{ doctorInfo.amount }}</span>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
    <div class="btn">
      <el-button
        type="primary"
        size="default"
        :disabled="currentIndex == -1 ? true : false"
        @click="submitOrder"
        >确认挂号</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@element-plus/icons-vue";
import { reqGetUser, reqDoctorInfo } from "@/api/hospital";
import type {
  UserResponseData,
  UserArr,
  DoctorInfoData,
} from "@/api/hospital/type";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { reqSubmitOrder } from "@/api/user";
import type { SubmitOrder } from "@/api/user/type";
import { ElMessage } from "element-plus";

let $route = useRoute();
let $router = useRouter();
let userArr = ref<UserArr>([]);
let doctorInfo = ref<any>({});
// 存储已选择就诊人索引值   -1无选择
let currentIndex = ref<number>(-1);

onMounted(() => {
  fetchUserData();
  fetchInfo();
});

const fetchUserData = async () => {
  let result: UserResponseData = await reqGetUser();
  if (result.code == 200) {
    userArr.value = result.data;
  }
};

const fetchInfo = async () => {
  let result: DoctorInfoData = await reqDoctorInfo(
    $route.query.docId as string
  );
  if (result.code == 200) {
    doctorInfo.value = result.data;
  }
};

const changeIndex = (index: number) => {
  currentIndex.value = index;
};
// 挂号
const submitOrder = async () => {
  // 医院编号
  let hoscode = doctorInfo.value.hoscode;
  // 医生id
  let scheduleId = doctorInfo.value.id;
  // 就诊人id
  let patientId = userArr.value[currentIndex.value].id;

  let result: SubmitOrder = await reqSubmitOrder(
    hoscode,
    scheduleId,
    patientId
  );
  if (result.code == 200) {
    $router.push({
      path: "/user/order",
      query: { orderId: result.data },
    });
  } else {
    ElMessage({
      type: "error",
      message: result.message,
    });
  }
};
// 预约挂号
const goUser = () => {
  $router.push({ path: "/user/patient", query: { type: "add" } });
};
</script>

<style scoped lang="scss">
.container {
  .tip {
    font-weight: 900;
    color: #7f7f7f;
    font-size: 20px;
  }
  .box-card {
    margin: 20px 0px;
    .card-header {
      display: flex;
      justify-content: space-between;
      span {
      }
    }
    .user {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 32%;
        margin: 6px;
        cursor: pointer;
      }
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
  }
}
</style>
