<template>
  <div class="login_container">
    <!--  @close="close" -->
    <el-dialog v-model="userStore.visiable" title="用户登录" ref="dialog">
      <el-row>
        <el-col :span="12">
          <div class="login">
            <div v-show="scene == 0">
              <el-form :model="loginParam" :rules="rules" ref="form">
                <el-form-item prop="phone">
                  <el-input
                    v-model="loginParam.phone"
                    :prefix-icon="User"
                    placeholder="请你输入手机号码"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input
                    v-model="loginParam.code"
                    :prefix-icon="Lock"
                    placeholder="请你输入手机验证码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button :disabled="!isPhone || flag ? true : false">
                    <CountDown
                      v-if="flag"
                      :flag="flag"
                      @getFlag="getFlag"
                    ></CountDown>
                    <span v-else @click="getCode">获取验证码</span>
                  </el-button>
                </el-form-item>
              </el-form>
              <el-button
                :disabled="
                  !isPhone || loginParam.code.length < 6 ? true : false
                "
                style="width: 100%"
                type="primary"
                size="default"
                @click="login"
                >用户登录</el-button
              >
              <div class="bottom" @click="changeScene">
                <p>微信扫码登录</p>
                <svg
                  t="1695704467475"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4860"
                  width="32"
                  height="32"
                >
                  <path
                    d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                    fill="#28C445"
                    p-id="4861"
                  ></path>
                  <path
                    d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                    fill="#28C445"
                    p-id="4862"
                  ></path>
                </svg>
              </div>
            </div>
            <div v-show="scene == 1" class="webchat">
              <!-- 二维码 -->
              <div id="login_container"></div>
              <div class="phone" @click="handler">
                <p>手机短信验证码登录</p>
                <svg
                  t="1696271197836"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1527"
                  width="16"
                  height="16"
                >
                  <path
                    d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                    p-id="1528"
                    fill="#d81e06"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="leftContent">
            <div class="top">
              <div class="item">
                <img src="../../assets/images/code_app.png" alt="" />
                <svg
                  t="1695704467475"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4860"
                  width="16"
                  height="16"
                >
                  <path
                    d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                    fill="#515151"
                    p-id="4861"
                  ></path>
                  <path
                    d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                    fill="#515151"
                    p-id="4862"
                  ></path>
                </svg>
                <p>微信扫一扫关注</p>
                <P>"快速预约挂号"</P>
              </div>
              <div class="item">
                <img src="../../assets/images/code_login_wechat.png" alt="" />
                <svg
                  t="1695705025336"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6144"
                  width="16"
                  height="16"
                >
                  <path
                    d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                    p-id="6145"
                  ></path>
                </svg>
                <p>扫一扫下载</p>
                <p>"预约挂号"APP</p>
              </div>
            </div>
          </div>
          <p class="tip">官方指定平台</p>
          <p class="tip">快速挂号&nbsp;&nbsp;&nbsp;&nbsp;安全放心</p>
        </el-col>
      </el-row>
      <template #footer>
        <el-button type="primary" size="default" @click="closeDialog"
          >关闭窗口</el-button
        >
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/modules/user";
import { User, Lock } from "@element-plus/icons-vue";
import { ref, reactive, computed, watch } from "vue";
import CountDown from "../countdown/index.vue";
import { ElMessage } from "element-plus";
import { reqWxLogin } from "@/api/hospital";
import type { WXLoginResponseData } from "@/api/hospital/type";
import { useRouter, useRoute } from "vue-router";

let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();

// 倒计时组件显示
let flag = ref<boolean>(false);

let scene = ref<number>(0);
let loginParam = reactive({
  phone: "",
  code: "",
});
// form实例
let form = ref<any>();

// 计算表单收集的是否是手机号
let isPhone = computed(() => {
  //手机号码正则表达式
  const reg =
    /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/;
  //返回布尔值:真代表手机号码、假代表的不是手机号码
  return reg.test(loginParam.phone);
});
// 扫码登录
const changeScene = async () => {
  scene.value = 1;
  // encodeURIComponent编码 参数
  let redirect_URL = encodeURIComponent(window.location.origin + "/wxlogin");
  let result: WXLoginResponseData = await reqWxLogin(redirect_URL);
  // 生成二维码
  // @ts-ignore
  var obj = new WxLogin({
    self_redirect: true, //true：手机点击确认登录后可以在 iframe 内跳转到 redirect_uri
    id: "login_container", //显示二维码的容器id
    appid: result.data.appid, //唯一标识，在微信开放平台提交应用审核通过后获得
    scope: "snsapi_login", //应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
    redirect_uri: result.data.redirectUri, //授权回调域路径
    state: result.data.state, //重定向地址，保持请求和回调的状态，授权请求后原样带回给第三方
    style: "black", //文字颜色
    href: "", //自定义样式链接，第三方可根据实际需求覆盖默认样式
  });
};
// 获取验证码
const getCode = async () => {
  // element-plus禁用能触发点击事件问题
  if (!isPhone.value || flag.value) return;
  flag.value = true;
  try {
    await userStore.getCode(loginParam.phone);
    loginParam.code = userStore.code;
  } catch (error) {
    ElMessage({
      type: "error",
      message: (error as Error).message,
    });
  }
};

const getFlag = (val: boolean) => {
  // console.log(val);
  flag.value = val;
};

//登录
const login = async () => {
  // 表单验证条件全部符合才会发送请求
  await form.value.validate();
  try {
    await userStore.userLogin(loginParam);
    userStore.visiable = false;
    let redirect = $route.query.redirect;
    if (redirect) {
      $router.push(redirect as string);
    } else {
      $router.push("./home");
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: (error as Error).message,
    });
  }
};

// @ts-ignore
const validatorPhone = (rule: any, value: any, callback: any) => {
  const reg =
    /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/;
  if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号码"));
  }
};
// @ts-ignore
const validatorCode = (rule: any, value: any, callback: any) => {
  if (/^\d{6}$/.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的验证码"));
  }
};
// 表单校验
const rules = {
  phone: [{ trigger: "change", validator: validatorPhone }],
  code: [{ trigger: "change", validator: validatorCode }],
};

// 关闭dialog
// const close = () => {
//   Object.assign(loginParam, { phone: "", code: "" });
//   form.value.resetFields();
// };
const closeDialog = () => {
  userStore.visiable = false;
  // Object.assign(loginParam, { phone: "", code: "" });
  // form.value.resetFields();
};

const handler = () => {
  scene.value = 0;
};
// 监听场景
watch(
  () => scene.value,
  (val: number) => {
    if (val == 1) {
      userStore.queryState();
    }
  }
);
</script>
<script lang="ts">
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
.login_container {
  ::v-deep(.el-dialog__body) {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .login {
      border: 1px solid #ccc;
      padding: 20px;
      .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin: 10px 0px;
        }
      }
      .webchat {
        display: flex;
        flex-direction: column;
        align-items: center;
        .phone {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          p {
            margin: 10px 0px;
          }
        }
      }
    }
  }
  .leftContent {
    .top {
      display: flex;
      justify-content: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 130px;
          height: 130px;
          padding: 10px;
        }
        p {
          margin: 5px 0px;
        }
      }
    }
  }
  .tip {
    text-align: center;
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 900;
  }
}
</style>
