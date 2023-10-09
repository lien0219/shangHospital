import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
      name: "home",
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
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
          name: "detail",
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
          name: "notice",
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
          name: "close",
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
        },
        {
          path: "register_step",
          component: () =>
            import("@/pages/hospital/register/register_step.vue"),
        },
        {
          path: "register_num",
          component: () => import("@/pages/hospital/register/register_num.vue"),
        },
      ],
    },
    {
      path: "/wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
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
        },
        {
          path: "order",
          component: () => import("@/pages/user/order/index.vue"),
        },
        {
          path: "patient",
          component: () => import("@/pages/user/patient/index.vue"),
        },
        {
          path: "profile",
          component: () => import("@/pages/user/profile/index.vue"),
        },
        {
          path: "feedback",
          component: () => import("@/pages/user/feedback/index.vue"),
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
