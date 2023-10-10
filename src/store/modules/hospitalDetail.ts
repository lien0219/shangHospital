// @ts-ignore
import { defineStore } from "pinia";

import { reqHospitalDetail, reqHospitalDeparment } from "@/api/hospital";
import type { HosPitalDetail } from "@/api/hospital/type";
import type {
  HospitalDetail,
  DeparmentResponseData,
  DeparmentArr,
} from "@/api/hospital/type";
import type { DetailState } from "./interface";

const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      //医院详情
      hospitalInfo: {} as HosPitalDetail,
      // 医院科室数据
      // @ts-ignore
      deparmentArr: [],
    };
  },
  actions: {
    // 获取医院详情
    async getHospital(hoscode: string) {
      let result: HospitalDetail = await reqHospitalDetail(hoscode);
      if (result.code == 200) {
        // @ts-ignore
        this.hospitalInfo = result.data;
      }
    },
    async getDeparment(hoscode: string) {
      let result: DeparmentResponseData = await reqHospitalDeparment(hoscode);
      if (result.code == 200) {
        // @ts-ignore
        this.deparmentArr = result.data;
      }
    },
  },
  getters: {},
});

export default useDetailStore;
