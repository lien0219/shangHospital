<template>
  <div class="register">
    <div class="top">
      <div class="title">
        {{ hospitalStore.hospitalInfo.hospital?.hosname }}
      </div>
      <div class="level">
        <svg
          t="1695022355137"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2584"
          width="16"
          height="16"
        >
          <path
            d="M857.28 344.992h-264.832c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-71.808-153.792-140.544-143.808-60.608 8.8-89.536 59.904-89.536 125.536v59.296c0 76.064-58.208 140.928-132.224 148.064l-117.728-0.192A67.36 67.36 0 0 0 64 483.04V872c0 37.216 30.144 67.36 67.36 67.36h652.192a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824zM128 872V483.04c0-1.856 1.504-3.36 3.36-3.36H208v395.68H131.36A3.36 3.36 0 0 1 128 872z m767.328-417.088l-73.728 388.96a38.72 38.72 0 0 1-38.048 31.488H272V476.864a213.312 213.312 0 0 0 173.312-209.088V208.512c0-37.568 12.064-58.912 34.72-62.176 27.04-3.936 67.36 38.336 67.36 80.48 0 37.312-9.504 84-28.864 139.712a32 32 0 0 0 30.24 42.496h308.512a38.72 38.72 0 0 1 38.048 45.888z"
            p-id="2585"
            fill="#d81e06"
          ></path>
        </svg>
        <span>{{
          hospitalStore.hospitalInfo.hospital?.param.hostypeString
        }}</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img
          :src="
            `data:image/jpeg;base64,` +
            hospitalStore.hospitalInfo?.hospital?.logoData
          "
          alt=""
        />
      </div>
      <div class="right">
        <div>挂号规则</div>
        <div class="time">
          预约周期:&nbsp;&nbsp;10天 &nbsp;&nbsp;放号时间:&nbsp;&nbsp;{{
            hospitalStore.hospitalInfo.bookingRule?.releaseTime
          }}&nbsp;&nbsp; 停挂时间:&nbsp;&nbsp;{{
            hospitalStore.hospitalInfo.bookingRule?.stopTime
          }}
        </div>
        <div class="address">
          具体位置:&nbsp;&nbsp;{{
            hospitalStore.hospitalInfo.hospital?.param.fullAddress
          }}
        </div>
        <div class="route">
          具体路线:&nbsp;&nbsp;{{ hospitalStore.hospitalInfo.hospital?.route }}
        </div>
        <div class="releasetime">
          退号时间:&nbsp;&nbsp; 就诊前一工作日{{
            hospitalStore.hospitalInfo.bookingRule?.quitTime
          }}前取消
        </div>
        <div class="rules">预约挂号规则</div>
        <div
          class="ruleInfo"
          v-for="(item, index) in hospitalStore.hospitalInfo.bookingRule?.rule"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="deparment">
      <div class="leftNav">
        <ul>
          <li
            v-for="(deparment, index) in hospitalStore.deparmentArr"
            :key="deparment.depcode"
            :class="{ active: index == currentIndex }"
            @click="changeIndex(index)"
          >
            {{ deparment.depname }}
          </li>
        </ul>
      </div>
      <div class="deparmentInfo">
        <div
          class="showDeparment"
          v-for="deparment in hospitalStore.deparmentArr"
          :key="deparment.depcode"
        >
          <h1 class="cur">{{ deparment.depname }}</h1>
          <!-- 小科室 -->
          <ul>
            <li
              @click="showLogin(item)"
              v-for="item in deparment.children"
              :key="item.depcode"
            >
              {{ item.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDetailStore from "@/store/modules/hospitalDetail";
// import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

// let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();

let hospitalStore = useDetailStore();

// 高亮
let currentIndex = ref<number>(0);

const changeIndex = (index: number) => {
  currentIndex.value = index;
  let allH1 = document.querySelectorAll(".cur");
  // 点击滚动  scrollIntoView()原生方法
  allH1[currentIndex.value].scrollIntoView({
    behavior: "smooth", //过渡动画
    block: "start", //滚动到的位置
  });
};

const showLogin = (item: any) => {
  // userStore.visiable = true;
  $router.push({
    path: "/hospital/register_step",
    query: { hoscode: $route.query.hoscode, depcode: item.depcode },
  });
};
</script>

<style scoped lang="scss">
.register {
  .top {
    display: flex;
    align-items: center;
    .title {
      font-size: 30px;
      font-weight: 900;
    }
    .level {
      display: flex;
      align-items: center;
      color: #7f7f7f;
      margin-left: 10px;
      .icon {
        margin-right: 5px;
      }
      span {
      }
    }
  }
  .content {
    display: flex;
    margin-top: 20px;
    .left {
      width: 80px;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      flex: 1;
      font-size: 14px;
      margin-left: 20px;
      div {
      }
      .time {
      }
      .address {
      }
      .route {
      }
      .releasetime {
      }
      .time,
      .address,
      .route,
      .releasetime,
      .ruleInfo {
        margin-top: 10px;
        color: #7f7f7f;
      }
      .ruleInfo {
      }
      .rules {
        margin: 10px 0px;
      }
    }
  }
  .deparment {
    width: 100%;
    height: 500px;
    display: flex;
    margin-top: 30px;
    .leftNav {
      width: 80px;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        background: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li {
          flex: 1;
          text-align: center;
          color: #7f7f7f;
          font-size: 14px;
          line-height: 40px;
          cursor: pointer;
          &.active {
            border-left: 2px solid red;
            color: red;
            background: white;
          }
        }
      }
    }
    .deparmentInfo {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      height: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .showDeparment {
        .cur {
          background: rgb(248, 248, 248);
          color: red;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 30%;
            color: #7f7f7f;
            margin: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
