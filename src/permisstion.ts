// 路由鉴权
import router from "./router";
// @ts-ignore
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import useUserStore from "@/store/modules/user";
import pinia from "@/store";

let userStore = useUserStore(pinia);
Nprogress.configure({ showSpinner: false });
// 未登录可访问路由
let whiteList = [
  "/home",
  "/hospital/register",
  "/hospital/detail",
  "/hospital/notice",
  "/hospital/close",
  "/hospital/search",
];
// @ts-ignore
router.beforeEach((to, from, next) => {
  Nprogress.start();
  //   @ts-ignore
  document.title = to.meta.title;
  let token = userStore.userInfo.token;
  if (token) {
    next();
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // 显示登录
      userStore.visiable = true;
      next({ path: "/home", query: { redirect: to.fullPath } });
    }
  }
});
// @ts-ignore
router.afterEach((to, from) => {
  Nprogress.done();
});
