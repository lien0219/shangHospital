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
