/*
以下是已有医院的数据接口类型定义,觉得麻烦可用any代替

{
  "code": 200,
  "message": "成功",
  "data": {
    "content": [
      {
        "id": "64c3853adca6c13588a12e1b",
        "createTime": "2023-07-28 17:07:06",
        "updateTime": "2023-09-17 14:02:42",
        "isDeleted": 0,
        "param": {
          "hostypeString": "三级乙等",
          "fullAddress": "北京市市辖区西城区"
        },
        "hoscode": "1000_10",
        "hosname": "航天中心医院",
        "hostype": "2",
        "provinceCode": "110000",
        "cityCode": "110100",
        "districtCode": "110102",
        "address": "",
        "logoData": "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",
        "intro": "航天中心医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是国家卫生计生委指定的全国疑难重症诊治指导中心，也是最早承担高干保健和外宾医疗任务的医院之一，以学科齐全、技术力量雄厚、特色专科突出、多学科综合优势强大享誉海内外。在2010、2011、2012、2013、2014年复旦大学医院管理研究所公布的“中国最佳医院排行榜”中连续五年名列榜首。\n\n医院建成于1921年，由洛克菲勒基金会创办。建院之初，就志在“建成亚洲最好的医学中心”。90余年来，医院形成了“严谨、求精、勤奋、奉献”的医院精神和兼容并蓄的特色文化风格，创立了“三基”、“三严”的现代医学教育理念，形成了以“教授、病案、图书馆”著称的医院“三宝”，培养造就了张孝骞、林巧稚等一代医学大师和多位中国现代医学的领军人物，并向全国输送了大批的医学管理人才，创建了当今知名的10余家大型综合及专科医院。2011年在总结90年发展经验的基础上，创新性提出了“待病人如亲人，提高病人满意度；待同事如家人，提高员工幸福感”新办院理念。\n\n目前，医院共有2个院区、总建筑面积53万平方米，在职职工4000余名、两院院士5人、临床和医技科室53个、国家级重点学科20个、国家临床重点专科29个、博士点16个、硕士点29个、国家级继续医学教育基地6个、二级学科住院医师培养基地18个、三级学科专科医师培养基地15个。开放住院床位2000余张，单日最高门诊量约1.5万人次、年出院病人约8万余人次。被评为“全国文明单位”、“全国创先争优先进基层党组织”、“全国卫生系统先进集体”、“首都卫生系统文明单位”、“最受欢迎三甲医院”，荣获全国五一劳动奖章。同时，医院还承担着支援老少边穷地区、国家重要活动和突发事件主力医疗队的重任，在2008年北京奥运工作中荣获“特别贡献奖”。\n\n90多年来，以执着的医志、高尚的医德、精湛的医术和严谨的学风书写了辉煌的历史，今天的医院人正为打造“国际知名、国内一流”医院的目标而继续努力。",
        "route": "\n\n顺12、14、18、19、28、31、34、38、39、40路到中医院；顺2、11、15、16、17、20、21、22、23、24、25、26、27、29、32、33、36、37、41、43、45路、945到国泰下车，向南行300米即到\n",
        "status": 0,
        "bookingRule": {
          "cycle": 10,
          "releaseTime": "08:00",
          "stopTime": "12:30",
          "quitDay": -1,
          "quitTime": "15:30",
          "rule": [
            "西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号"
          ]
        }
      },
      {
        "id": "64c3853adca6c13588a12e1c",
        "createTime": "2023-07-28 17:07:06",
        "updateTime": "2023-09-15 20:37:06",
        "isDeleted": 0,
        "param": {
          "hostypeString": "二级乙等",
          "fullAddress": "北京市市辖区丰台区"
        },
        "hoscode": "1000_11",
        "hosname": "北京大学国际医院",
        "hostype": "4",
        "provinceCode": "110000",
        "cityCode": "110100",
        "districtCode": "110106",
        "address": "",
        "logoData": "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",
        "intro": "北京大学国际医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是国家卫生计生委指定的全国疑难重症诊治指导中心，也是最早承担高干保健和外宾医疗任务的医院之一，以学科齐全、技术力量雄厚、特色专科突出、多学科综合优势强大享誉海内外。在2010、2011、2012、2013、2014年复旦大学医院管理研究所公布的“中国最佳医院排行榜”中连续五年名列榜首。\n\n医院建成于1921年，由洛克菲勒基金会创办。建院之初，就志在“建成亚洲最好的医学中心”。90余年来，医院形成了“严谨、求精、勤奋、奉献”的医院精神和兼容并蓄的特色文化风格，创立了“三基”、“三严”的现代医学教育理念，形成了以“教授、病案、图书馆”著称的医院“三宝”，培养造就了张孝骞、林巧稚等一代医学大师和多位中国现代医学的领军人物，并向全国输送了大批的医学管理人才，创建了当今知名的10余家大型综合及专科医院。2011年在总结90年发展经验的基础上，创新性提出了“待病人如亲人，提高病人满意度；待同事如家人，提高员工幸福感”新办院理念。\n\n目前，医院共有2个院区、总建筑面积53万平方米，在职职工4000余名、两院院士5人、临床和医技科室53个、国家级重点学科20个、国家临床重点专科29个、博士点16个、硕士点29个、国家级继续医学教育基地6个、二级学科住院医师培养基地18个、三级学科专科医师培养基地15个。开放住院床位2000余张，单日最高门诊量约1.5万人次、年出院病人约8万余人次。被评为“全国文明单位”、“全国创先争优先进基层党组织”、“全国卫生系统先进集体”、“首都卫生系统文明单位”、“最受欢迎三甲医院”，荣获全国五一劳动奖章。同时，医院还承担着支援老少边穷地区、国家重要活动和突发事件主力医疗队的重任，在2008年北京奥运工作中荣获“特别贡献奖”。\n\n90多年来，以执着的医志、高尚的医德、精湛的医术和严谨的学风书写了辉煌的历史，今天的医院人正为打造“国际知名、国内一流”医院的目标而继续努力。",
        "route": "\n\n顺12、14、18、19、28、31、34、38、39、40路到中医院；顺2、11、15、16、17、20、21、22、23、24、25、26、27、29、32、33、36、37、41、43、45路、945到国泰下车，向南行300米即到\n",
        "status": 1,
        "bookingRule": {
          "cycle": 10,
          "releaseTime": "07:00",
          "stopTime": "12:30",
          "quitDay": -1,
          "quitTime": "15:30",
          "rule": [
            "西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号"
          ]
        }
      }
    ],
    "pageable": {
      "sort": {
        "sorted": true,
        "unsorted": false,
        "empty": false
      },
      "pageNumber": 0,
      "pageSize": 2,
      "offset": 0,
      "paged": true,
      "unpaged": false
    },
    "last": false,
    "totalPages": 9,
    "totalElements": 18,
    "first": true,
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "numberOfElements": 2,
    "size": 2,
    "number": 0,
    "empty": false
  },
  "ok": true
}
*/

export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface Hospital {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    hostypeString: string;
    fullAddress: string;
  };
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: "110000";
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro: string;
  route: string;
  status: number;
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
}

export type Content = Hospital[];

// 返回数据类型
export interface HospitalResponseData extends ResponseData {
  data: {
    content: Content;
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    first: boolean;
    totalPages: number;
    totalElements: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  };
}

/*
可用any代替

{
  "code": 200,
  "message": "成功",
  "data": [
    {
      "id": 10001,
      "createTime": "2019-06-10 10:43:32",
      "updateTime": "2020-06-23 09:23:48",
      "isDeleted": 0,
      "param": {},
      "parentId": 10000,
      "name": "三级甲等",
      "value": "1",
      "dictCode": "",
      "hasChildren": false
    },
    {
      "id": 10002,
      "createTime": "2019-06-10 10:43:32",
      "updateTime": "2020-06-23 09:23:49",
      "isDeleted": 0,
      "param": {},
      "parentId": 10000,
      "name": "三级乙等",
      "value": "2",
      "dictCode": "",
      "hasChildren": false
    },
    {
      "id": 10003,
      "createTime": "2019-07-17 15:11:37",
      "updateTime": "2020-06-23 09:23:50",
      "isDeleted": 0,
      "param": {},
      "parentId": 10000,
      "name": "二级甲等",
      "value": "3",
      "dictCode": "",
      "hasChildren": false
    },
    {
      "id": 10004,
      "createTime": "2019-07-17 15:12:41",
      "updateTime": "2020-06-23 09:23:51",
      "isDeleted": 0,
      "param": {},
      "parentId": 10000,
      "name": "二级乙等",
      "value": "4",
      "dictCode": "",
      "hasChildren": false
    },
    {
      "id": 10005,
      "createTime": "2019-07-17 15:12:55",
      "updateTime": "2020-06-23 09:23:52",
      "isDeleted": 0,
      "param": {},
      "parentId": 10000,
      "name": "一级",
      "value": "5",
      "dictCode": "",
      "hasChildren": false
    }
  ],
  "ok": true
}
*/

// 医院等级与地区
export interface HospitalLevelAndRegion {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}

export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];

// 返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData {
  data: HospitalLevelAndRegionArr;
}

export interface HospitalInfo extends ResponseData {
  data: Content;
}
