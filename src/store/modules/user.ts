import { defineStore } from "pinia";
import { reqCode, reqUserLogin } from "@/api/hospital";
import type { LoginData, UserLoginResponseData } from "@/api/hospital/type";
import type { UserState } from "./interface";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";

const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      visiable: false,
      code: "",
      userInfo: JSON.parse(GET_TOKEN() as string) || {}, //GET_TOKEN() as string)  |  localStorage.getItem("USERINFO") as string
    };
  },
  actions: {
    // 获取验证码
    async getCode(phone: string) {
      let result: any = await reqCode(phone);
      if (result.code == 200) {
        this.code = result.data;
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    //用户登录
    async userLogin(loginData: LoginData) {
      let result: UserLoginResponseData = await reqUserLogin(loginData);
      if (result.code == 200) {
        this.userInfo = result.data;
        // 持久化存储用户信息
        // localStorage.setItem("USERINFO", JSON.stringify(this.userInfo));
        SET_TOKEN(JSON.stringify(this.userInfo));
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 退出登录
    logout() {
      this.userInfo = { name: "", token: "" };
      // 清空本地存储数据
      REMOVE_TOKEN();
    },
    // 查询微信扫码结果
    queryState() {
      // 查询是否有用户信息
      let timer = setInterval(() => {
        // 本地有数据判定扫码成功
        if (GET_TOKEN()) {
          this.visiable = false;
          this.userInfo = JSON.parse(GET_TOKEN() as string);
          clearInterval(timer);
        }
      }, 1000);
    },
  },
  getters: {},
});

export default useUserStore;
