import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      name: "home",
      meta: {
        title: "首页",
      },
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      name: "hospital",
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
          name: "register",
          meta: {
            title: "预约挂号",
          },
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          name: "detail",
          meta: {
            title: "医院详情",
          },
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          name: "notice",
          meta: {
            title: "预约通知",
          },
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          name: "close",
          meta: {
            title: "停诊信息",
          },
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
          meta: {
            title: "查询",
          },
        },
        {
          path: "register_step",
          component: () =>
            import("@/pages/hospital/register/register_step.vue"),
          meta: {
            title: "预约第一步",
          },
        },
        {
          path: "register_num",
          component: () => import("@/pages/hospital/register/register_num.vue"),
          meta: {
            title: "预约第二步",
          },
        },
      ],
    },
    {
      path: "/wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
      meta: {
        title: "扫码登录",
      },
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/user",
      component: () => import("@/pages/user/index.vue"),
      children: [
        {
          path: "certification",
          component: () => import("@/pages/user/certification/index.vue"),
          meta: {
            title: "实名认证",
          },
        },
        {
          path: "order",
          component: () => import("@/pages/user/order/index.vue"),
          meta: {
            title: "挂号订单",
          },
        },
        {
          path: "patient",
          component: () => import("@/pages/user/patient/index.vue"),
          meta: {
            title: "就诊人管理",
          },
        },
        {
          path: "profile",
          component: () => import("@/pages/user/profile/index.vue"),
          meta: {
            title: "账号信息",
          },
        },
        {
          path: "feedback",
          component: () => import("@/pages/user/feedback/index.vue"),
          meta: {
            title: "信息反馈",
          },
        },
      ],
    },
  ],
  //   滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
