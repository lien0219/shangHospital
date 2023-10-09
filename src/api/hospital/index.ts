import request from "@/utils/request";
import type {
  HospitalDetail,
  DeparmentResponseData,
  LoginData,
  UserLoginResponseData,
  WXLoginResponseData,
  HospitalWordData,
  DoctorResponseData,
  UserResponseData,
  DoctorInfoData,
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
  // 微信扫码登录
  WXLOGIN_URL = "/user/weixin/getLoginParam/",
  // 科室预约挂号数据
  HOSPITALWORK_URL = "/hosp/hospital/auth/getBookingScheduleRule/", //{page}/{limit}/{hoscode}/{depcode}
  //医生排班数据
  HOSPITALDOCTOR_URL = "/hosp/hospital/auth/findScheduleList/", //{hoscode}/{depcode}/{workDate}
  // 就诊人信息
  GETUSER_URL = "/user/patient/auth/findAll",
  // 挂号医生信息
  GETDOCTOR_URL = "/hosp/hospital/getSchedule/", //{scheduleId}
}

export const reqHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalDetail>(API.HOSPITALDETAIL_URL + hoscode);

export const reqHospitalDeparment = (hoscode: string) =>
  request.get<any, DeparmentResponseData>(API.HOSPITALDEPARMENT_URL + hoscode);

export const reqCode = (phone: string) =>
  request.get<any, any>(API.GETUSERCODE_URL + phone);

export const reqUserLogin = (data: LoginData) =>
  request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);

export const reqWxLogin = (wxRedirectUri: string) =>
  request.get<any, WXLoginResponseData>(
    API.WXLOGIN_URL + `?wxRedirectUri=${wxRedirectUri}`
  );

export const reqHospitalWork = (
  page: number,
  limit: number,
  hoscode: string,
  depcode: string
) =>
  request.get<any, HospitalWordData>(
    API.HOSPITALWORK_URL + `${page}/${limit}/${hoscode}/${depcode}`
  );

export const reqHospitalDoctor = (
  hoscode: string,
  depcode: string,
  workDate: string
) =>
  request.get<any, DoctorResponseData>(
    API.HOSPITALDOCTOR_URL + `${hoscode}/${depcode}/${workDate}`
  );

export const reqGetUser = () =>
  request.get<any, UserResponseData>(API.GETUSER_URL);

export const reqDoctorInfo = (scheduleId: string) =>
  request.get<any, DoctorInfoData>(API.GETDOCTOR_URL + scheduleId);
