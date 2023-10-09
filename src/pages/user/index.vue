<template>
  <div class="user">
    <div class="menu">
      <div class="top">
        <svg
          t="1696489488379"
          class="icon"
          viewBox="0 0 1196 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8365"
          width="16"
          height="16"
        >
          <path
            d="M1196.890758 1024H0V169.507822h113.990233v740.55543h968.910292V169.507822h113.990233v854.492178z"
            fill="#FFAA06"
            p-id="8366"
          ></path>
          <path
            d="M331.71492 530.291922C149.129978 530.291922 0.601708 381.750281 0.601708 199.17871v-49.848162h113.936748v49.848162c0 119.753258 97.436578 217.189836 217.189835 217.189836s217.189836-97.423206 217.189836-217.189836v-49.848162h113.936748v49.848162c-0.013371 182.584942-148.555013 331.113212-331.139955 331.113212z"
            fill="#FFAA06"
            p-id="8367"
          ></path>
          <path
            d="M872.864328 530.291922c-178.653783 0-323.999687-145.345904-323.999686-323.999686v-64.075214h113.936747v64.088585c0 115.822099 94.24084 210.062939 210.062939 210.062939s210.062939-94.24084 210.06294-210.062939v-64.088585h113.936747v64.088585c0.026743 178.640412-145.30579 323.986315-323.999687 323.986315z"
            fill="#FFAA06"
            p-id="8368"
          ></path>
          <path
            d="M475.322556 148.541642a148.541642 130.543888 90 1 0 261.087775 0 148.541642 130.543888 90 1 0-261.087775 0Z"
            fill="#FFD112"
            p-id="8369"
          ></path>
          <path
            d="M0 2.767857V295.90661c64.55658-9.667441 114.538456-71.242224 114.538456-146.562691S64.55658 12.435298 0 2.767857zM1196.890758 2.48706c-64.489723 9.038991-114.605312 70.867828-114.605312 146.709775s50.115589 137.724269 114.605312 146.709775z"
            fill="#FFD112"
            p-id="8370"
          ></path>
        </svg>
        <span>&nbsp;/&nbsp;会员中心</span>
      </div>
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          index="/user/certification"
          @click="goUser('/user/certification')"
        >
          <el-icon><icon-menu /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/order" @click="goUser('/user/order')">
          <el-icon><document /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item index="/user/patient" @click="goUser('/user/patient')">
          <el-icon><setting /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item index="/user/profile" @click="goUser('/user/profile')">
          <el-icon><setting /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item index="/user/feedback" @click="goUser('/user/feedback')">
          <el-icon><setting /></el-icon>
          <span>意见反馈</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";

let $router = useRouter();
let $route = useRoute();

const goUser = (path: string) => {
  $router.push({ path: path });
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    flex: 8;
  }
}
</style>
