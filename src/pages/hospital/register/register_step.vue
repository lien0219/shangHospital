<template>
  <div class="wrap">
    <div class="top">
      <div class="hosname">{{ workData.baseMap?.hosname }}</div>
      <div class="line"></div>
      <div>{{ workData.baseMap?.bigname }}</div>
      <div class="dot">.</div>
      <div class="hosdeparment">{{ workData.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1 class="time">{{ workData.baseMap?.workDateString }}</h1>
      <div class="container">
        <div
          class="item"
          v-for="item in workData.bookingScheduleList"
          :key="item"
          :class="{
            active: item.status == -1 || item.availableNumber == -1,
            cur: item.workDate == workTime.workDate,
          }"
          @click="changeTime(item)"
        >
          <div class="tophos">{{ item.workDate }}-{{ item.dayOfWeek }}</div>
          <div class="bottom">
            <div v-if="item.status == -1">停止挂号</div>
            <div v-if="item.status == 0">
              {{
                item.availableNumber == -1
                  ? "约满了"
                  : `有号(${item.availableNumber})`
              }}
            </div>
            <div v-if="item.status == 1">即将放号</div>
          </div>
        </div>
      </div>
      <el-pagination
        v-model:current-page="pageNo"
        @current-change="fetchWorkData"
        layout="prev, pager, next"
        :total="workData.total"
      />
    </div>
    <div class="bottom">
      <div class="will" v-if="workTime.status == 1">
        <span class="timer">xxxxxx</span>
        <span class="textColor">放好</span>
      </div>
      <div class="doctor" v-else>
        <div class="am">
          <div class="tip">
            <svg
              t="1696339200645"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3207"
              width="32"
              height="32"
            >
              <path
                d="M904.101037 676.946871H118.670712c-15.461511 0-28.105271-12.535384-28.105271-28.033021 0-15.461511 12.643759-28.105271 28.105271-28.10527h785.430325c15.461511 0 28.105271 12.643759 28.105271 28.10527s-12.607634 28.033021-28.105271 28.033021z m-56.029916-324.980738c-11.018133 10.945883-28.719396 10.945883-39.665279 0-11.018133-10.945883-11.018133-28.755521 0-39.665279l39.665279-39.665279a27.97522 27.97522 0 0 1 39.593029 0 27.93187 27.93187 0 0 1 0 39.665279l-39.593029 39.665279z m-62.279545 212.776406c-26.082269-128.027094-138.683977-224.444789-274.441826-224.44479-135.649474 0-248.287307 96.417696-274.369576 224.44479H177.915755c21.602766-158.263741 162.454244-280.583081 333.433995-280.583081 171.088125 0 311.903478 122.31934 333.506244 280.583081h-59.064418z m-274.441826-336.612997c-15.461511 0-28.033021-12.535384-28.033021-28.10527V143.95823c0-15.461511 12.535384-28.105271 28.033021-28.10527 15.569886 0 28.105271 12.643759 28.10527 28.10527v56.029916c0 15.606011-12.535384 28.141396-28.10527 28.141396zM174.700628 351.966133L135.035349 312.264729c-10.945883-10.945883-10.945883-28.755521 0-39.665279 11.018133-10.945883 28.719396-10.945883 39.665279 0l39.665279 39.665279a27.93187 27.93187 0 0 1 0 39.665279c-10.909758 10.982008-28.647146 10.982008-39.665279 0.036125z m-28.033021 381.119029h729.40041c15.497636 0 28.033021 12.535384 28.03302 28.03302a28.033021 28.033021 0 0 1-28.03302 28.033021H146.667607c-15.497636 0-28.033021-12.535384-28.03302-28.033021 0.036125-15.497636 12.571509-28.033021 28.03302-28.03302z m84.171312 112.168207h561.093911c15.497636 0 28.033021 12.535384 28.033021 28.033021 0 15.569886-12.535384 28.105271-28.033021 28.10527H230.838919c-15.497636 0-28.033021-12.535384-28.03302-28.10527 0-15.497636 12.535384-28.033021 28.03302-28.033021z"
                fill="#1296db"
                p-id="3208"
              ></path>
            </svg>
            <span class="text">上午号源</span>
          </div>
          <div class="doc_info" v-for="doctor in moringArr" :key="doctor.id">
            <div class="left">
              <div class="info">
                <span>{{ doctor.title }}</span>
                <span>|</span>
                <span>{{ doctor.docname }}</span>
              </div>
              <div class="skill">{{ doctor.skill }}</div>
            </div>
            <div class="right">
              <div class="money">￥{{ doctor.amount }}</div>
              <el-button type="primary" size="default" @click="goNum(doctor)">{{
                doctor.availableNumber
              }}</el-button>
            </div>
          </div>
        </div>
        <div class="am">
          <div class="tip">
            <svg
              t="1696340464026"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7160"
              width="32"
              height="32"
            >
              <path
                d="M512 36.571429a36.571429 36.571429 0 0 1 36.571429 36.571428v146.285714a36.571429 36.571429 0 1 1-73.142858 0V73.142857a36.571429 36.571429 0 0 1 36.571429-36.571428zM723.017143 693.577143a256 256 0 1 0-422.034286 0C362.349714 671.195429 434.614857 658.285714 512 658.285714c77.385143 0 149.650286 12.909714 211.017143 35.291429zM841.142857 512a36.571429 36.571429 0 1 0 0 73.142857h146.285714a36.571429 36.571429 0 1 0 0-73.142857h-146.285714zM0 548.571429a36.571429 36.571429 0 0 1 36.571429-36.571429h146.285714a36.571429 36.571429 0 1 1 0 73.142857H36.571429a36.571429 36.571429 0 0 1-36.571429-36.571428zM897.28 245.284571a36.571429 36.571429 0 1 0-51.712-51.712L742.144 296.96a36.571429 36.571429 0 0 0 51.712 51.748571l103.424-103.460571zM120.429714 193.572571a36.571429 36.571429 0 0 0 0 51.712L223.817143 348.745143A36.571429 36.571429 0 1 0 275.602286 296.96L172.141714 193.572571a36.571429 36.571429 0 0 0-51.712 0zM914.395429 987.428571c20.187429 0 36.864-16.566857 32.292571-36.278857C917.942857 826.953143 742.473143 731.428571 512 731.428571c-230.509714 0-405.906286 95.524571-434.688 219.721143-4.571429 19.712 12.068571 36.278857 32.292571 36.278857h804.790858z"
                fill="#1296db"
                p-id="7161"
              ></path>
            </svg>
            <span class="text">下午号源</span>
          </div>
          <div class="doc_info" v-for="doctor in afterArr" :key="doctor.id">
            <div class="left">
              <div class="info">
                <span>{{ doctor.title }}</span>
                <span>|</span>
                <span>{{ doctor.docname }}</span>
              </div>
              <div class="skill">{{ doctor.skill }}</div>
            </div>
            <div class="right">
              <div class="money">￥{{ doctor.amount }}</div>
              <el-button type="primary" size="default" @click="goNum(doctor)">{{
                doctor.availableNumber
              }}</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { reqHospitalWork, reqHospitalDoctor } from "@/api/hospital";
import type {
  HospitalWordData,
  DoctorResponseData,
  DocArr,
  Doctor,
} from "@/api/hospital/type";
import { useRoute, useRouter } from "vue-router";

let $router = useRouter();
let $route = useRoute();
let pageNo = ref<number>(1);
let limit = ref<number>(6);
let workData = ref<any>({});
let workTime: any = ref({});
let docArr = ref<DocArr>([]);

onMounted(() => {
  fetchWorkData();
});
const fetchWorkData = async () => {
  let result: HospitalWordData = await reqHospitalWork(
    pageNo.value,
    limit.value,
    $route.query.hoscode as string,
    $route.query.depcode as string
  );
  if (result.code == 200) {
    workData.value = result.data;
    workTime.value = workData.value.bookingScheduleList[0];
    getDoctorWorkData();
  }
};
// 医生排班数据
const getDoctorWorkData = async () => {
  let hoscode: string = $route.query.hoscode as string;
  let depcode: string = $route.query.depcode as string;
  let workData: string = workTime.value.workDate;
  let result: DoctorResponseData = await reqHospitalDoctor(
    hoscode,
    depcode,
    workData
  );
  if (result.code == 200) {
    docArr.value = result.data;
  }
};
const changeTime = (item: any) => {
  workTime.value = item;
  getDoctorWorkData();
};
// 上午
let moringArr = computed(() => {
  return docArr.value.filter((doc: Doctor) => {
    return doc.workTime == 0;
  });
});
// 下午
let afterArr = computed(() => {
  return docArr.value.filter((doc: Doctor) => {
    return doc.workTime == 1;
  });
});

const goNum = (doctor: Doctor) => {
  $router.push({
    path: "/hospital/register_num",
    query: { docId: doctor.id },
  });
};
</script>

<style scoped lang="scss">
.wrap {
  .top {
    display: flex;
    color: #7f7f7f;
    .hosname {
    }
    .line {
      width: 5px;
      height: 20px;
      background: skyblue;
      margin: 0px 5px;
    }
    div {
    }
    .dot {
      margin: 0px 5px;
    }
    .hosdeparment {
    }
  }
  .center {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .time {
      font-weight: 900;
    }
    .container {
      display: flex;
      width: 100%;
      margin: 30px 0px;
      .item {
        flex: 1;
        border: 1px solid skyblue;
        margin: 0px 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: all 0.5s;
        &.active {
          border: 1px solid #ccc;
          color: #7f7f7f;
          .tophos {
            background: #ccc;
          }
        }
        &.cur {
          transform: scale(1.1);
          color: red;
        }

        .tophos {
          background: #e8f2ff;
          height: 30px;
          width: 100%;
          text-align: center;
          line-height: 30px;
        }
        .bottom {
          width: 100%;
          height: 60px;
          text-align: center;
          line-height: 60px;
          div {
          }
        }
      }
    }
  }
  .bottom {
    .will {
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      .textColor {
        color: skyblue;
      }
      .timer {
        color: red;
      }
    }
    .doctor {
      .am {
        .tip {
          display: flex;
          align-items: center;
          .icon {
          }
          .text {
            color: #7f7f7f;
            font-weight: 900;
          }
        }
        .doc_info {
          display: flex;
          justify-content: space-between;
          margin: 10px 0px;
          border-bottom: 1px solid #ccc;
          .left {
            .info {
              color: skyblue;
              margin: 10px 0px;
              span {
                margin: 0px 5px;
                font-size: 18px;
                font-weight: 900;
              }
            }
            .skill {
              margin: 10px 0px;
              color: #7f7f7f;
            }
          }
          .right {
            width: 150px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .money {
              color: #7f7f7f;
            }
          }
        }
      }
      .pm {
      }
    }
  }
}
</style>
