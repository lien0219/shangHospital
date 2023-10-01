import request from "@/utils/request";
import type {
  HospitalResponseData,
  HospitalLevelAndRegionResponseData,
  HospitalInfo,
} from "./type";

enum API {
  //已有医院的数据接口
  HOSPITAL_URL = "/hosp/hospital/", //{page}/{limit}  （hostype 医院类型   districtCode 区域）query参数
  //医院等级与地区
  HOSPITALLEVELANDREGION_URL = "/cmn/dict/findByDictCode/", //{dictCode}
  // 根据关键字医院名字搜索获取数据
  HOSPITALINFO_URL = "/hosp/hospital/findByHosname/", //{hosname}
}

export const reqHospital = (
  page: number,
  limit: number,
  hostype = "",
  districtCode = ""
) =>
  request.get<any, HospitalResponseData>(
    API.HOSPITAL_URL +
      `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  );

export const reqHospitalLevelAndRegion = (dictCode: string) =>
  request.get<any, HospitalLevelAndRegionResponseData>(
    API.HOSPITALLEVELANDREGION_URL + dictCode
  );

export const reqHospitalInfo = (hosname: string) =>
  request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname);
