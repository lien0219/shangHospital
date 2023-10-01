import type {
  HosPitalDetail,
  DeparmentArr,
  UserInfo,
} from "@/api/hospital/type";

export interface DetailState {
  hospitalInfo: HosPitalDetail;
  DeparmentArr: DeparmentArr;
}

export interface UserState {
  visiable: boolean;
  code?: string;
  userInfo: UserInfo;
}
