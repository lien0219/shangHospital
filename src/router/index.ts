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
      ],
    },
    {
      path: "/",
      redirect: "/home",
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
