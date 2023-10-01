<template>
  <div class="hospital">
    <div class="menu">
      <div class="top">
        <svg
          t="1694964563030"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12314"
          width="16"
          height="16"
        >
          <path
            d="M867.342732 1008.221893H144.189718a62.697334 62.697334 0 0 1-62.697334-62.681702V435.286125c0-16.522334 6.533903-32.388151 18.179257-44.111662l134.94542-136.164665c-0.015631-0.437678-0.125051-0.844093-0.12505-1.297402v-111.295192a31.32522 31.32522 0 1 1 62.681702 0v49.488845L461.240333 26.354451a62.759859 62.759859 0 0 1 89.036153 0l361.599954 364.820012a62.634808 62.634808 0 0 1 18.147995 44.111662V945.540191a62.681702 62.681702 0 0 1-62.681703 62.681702zM563.750707 945.540191h195.751361V571.419527H563.750707V945.540191z m303.592025-489.354955H768.833982a20.88348 20.88348 0 1 1 0-41.782591h77.812847L505.742778 70.497376 164.885622 414.402645h483.493199a20.88348 20.88348 0 1 1 0 41.782591H144.189718V945.540191h377.778398V550.536048c0-11.535934 9.347546-20.88348 20.899112-20.88348H780.401179c11.535934 0 20.88348 9.347546 20.88348 20.88348v395.004143h66.058073V456.185236z m-430.956241 340.779H225.347672a20.914743 20.914743 0 0 1-20.899111-20.914743V550.536048c0-11.535934 9.363177-20.88348 20.899111-20.88348h211.038819c11.535934 0 20.88348 9.347546 20.88348 20.88348v225.513445c0 11.551566-9.347546 20.914743-20.88348 20.914743z m-20.899111-225.544709H246.246784v183.746486h169.240596V571.419527z m203.98908 225.544709a20.899111 20.899111 0 0 1-20.88348-20.914743v-51.098874a20.899111 20.899111 0 1 1 41.782591 0v51.098874c0 11.551566-9.363177 20.914743-20.899111 20.914743z"
            fill="#d4237a"
            p-id="12315"
          ></path>
        </svg>
        <span>&nbsp;/&nbsp;医院信息</span>
      </div>
      <!--  router(也可以在el-menu标签中直接加router进行路由跳转) -->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <el-menu-item
          index="/hospital/register"
          @click="changeActive('/hospital/register')"
        >
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/detail"
          @click="changeActive('/hospital/detail')"
        >
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')"
        >
          <el-icon><setting /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/close"
          @click="changeActive('/hospital/close')"
        >
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item
          index="/hospital/search"
          @click="changeActive('/hospital/search')"
        >
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
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
  Setting,
  InfoFilled,
  Search,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import useDetailStore from "@/store/modules/hospitalDetail";

let detailStore = useDetailStore();

let $router = useRouter();
let $route = useRoute();

const changeActive = (path: string) => {
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
};
onMounted(() => {
  detailStore.getHospital($route.query.hoscode as string);
  // 医院科室数据
  detailStore.getDeparment($route.query.hoscode as string);
});
</script>

<style scoped lang="scss">
.hospital {
  display: flex;

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      color: #7f7f7f;
    }
  }
  .content {
    flex: 8;
  }
}
</style>
