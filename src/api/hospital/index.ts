import request from "@/utils/request";
import type {
  HospitalDetail,
  DeparmentResponseData,
  LoginData,
  UserLoginResponseData,
} from "./type";

enum API {
  // 医院详情
  HOSPITALDETAIL_URL = "/hosp/hospital/", //{hoscode}
  // 医院科室数据
  HOSPITALDEPARMENT_URL = "/hosp/hospital/department/", //{hoscode}
  // 验证码接口
  GETUSERCODE_URL = "/sms/send/", //{phone}
  // 登录
  USERLOGIN_URL = "/user/login",
}

export const reqHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);

export const reqHospitalDeparment = (hoscode: string) =>
  request.get<any, DeparmentResponseData>(API.HOSPITALDEPARMENT_URL + hoscode);

export const reqCode = (phone: string) =>
  request.get<any, any>(API.GETUSERCODE_URL + phone);

export const reqUserLogin = (data: LoginData) =>
  request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);