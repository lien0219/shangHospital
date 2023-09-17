import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截
request.interceptors.request.use((config) => {
  return config;
});

// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let status = error.response.status;
    switch (status) {
      case 404:
        ElMessage({
          type: "error",
          message: error.message,
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器出现问题",
        });
        break;
      case 401:
        ElMessage({
          type: "error",
          message: "参数有误",
        });
        break;
    }

    return Promise.reject(new Error(error.message));
  }
);

export default request;
