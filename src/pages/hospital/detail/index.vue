<template>
  <div class="detail">
    <div class="top">
      <div class="name">{{ hospitalStore.hospitalInfo.hospital?.hosname }}</div>
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
    <div class="logo">
      <div class="left">
        <img
          :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo?.hospital?.logoData}`"
          alt=""
        />
      </div>
      <div class="right">
        <svg
          t="1695027596512"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3740"
          width="16"
          height="16"
        >
          <path
            d="M768 853.333333v-85.333333h-85.333333l42.666666-42.666667h85.333334v170.666667H256v-170.666667h85.333333l42.666667 42.666667H298.666667v85.333333h469.333333z m-59.733333-290.133333c38.4-42.666667 59.733333-98.133333 59.733333-157.866667 0-128-106.666667-234.666667-234.666667-234.666666S298.666667 277.333333 298.666667 405.333333c0 59.733333 21.333333 115.2 59.733333 157.866667l174.933333 174.933333 174.933334-174.933333z m17.066666 42.666667l-187.733333 187.733333L341.333333 605.866667C290.133333 554.666667 256 486.4 256 405.333333 256 251.733333 379.733333 128 533.333333 128S810.666667 251.733333 810.666667 405.333333c0 72.533333-25.6 136.533333-72.533334 187.733334l-12.8 12.8zM533.333333 512c-59.733333 0-106.666667-46.933333-106.666666-106.666667S473.6 298.666667 533.333333 298.666667 640 345.6 640 405.333333 593.066667 512 533.333333 512z m0-42.666667c34.133333 0 64-29.866667 64-64S567.466667 341.333333 533.333333 341.333333 469.333333 371.2 469.333333 405.333333s29.866667 64 64 64z"
            fill="#444444"
            p-id="3741"
          ></path>
        </svg>
        <span
          >具体位置:&nbsp;&nbsp;{{
            hospitalStore.hospitalInfo.hospital?.param.fullAddress
          }}
          &nbsp;&nbsp;</span
        >
      </div>
      <div class="route">
        规划路线:&nbsp;&nbsp;{{ hospitalStore.hospitalInfo.hospital?.route }}
      </div>
    </div>
    <div class="footer">
      <h1 style="color: black">医院介绍</h1>
      <p>{{ hospitalStore.hospitalInfo.hospital?.intro }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDetailStore from "@/store/modules/hospitalDetail";

let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.detail {
  .top {
    display: flex;
    align-items: center;
    .name {
      font-size: 30px;
      font-weight: 900;
    }
    .level {
      display: flex;
      align-items: center;
      color: #7f7f7f;
      margin-left: 10px;

      .icon {
      }
      span {
        margin-left: 5px;
      }
    }
  }
  .logo {
    display: flex;
    margin-top: 10px;
    .left {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      color: #7f7f7f;
      margin-left: 10px;
      .icon {
        margin-right: 3px;
        margin-bottom: -2px;
      }
      span {
      }
    }
    .route {
    }
  }
  .footer {
    color: #7f7f7f;
    h1 {
    }
    p {
      margin-top: 10px;
      line-height: 30px;
    }
  }
}
</style>
