import { createApp } from "vue";
import App from "@/App.vue";
import "@/style/reset.scss";
//顶部全局组件
import HospitalTop from "@/components/hospital_top/index.vue";
//底部全局组件
import HospitalBottom from "@/components/hospital_bottom/index.vue";
import Login from "@/components/login/index.vue";
import Visitor from "@/components/visitor/index.vue";
import router from "./router";
// UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// store
import pinia from "@/store";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);
app.component("Login", Login);
app.component("Visitor", Visitor);
app.use(router);
app.use(ElementPlus);
app.use(pinia);

app.mount("#app");
