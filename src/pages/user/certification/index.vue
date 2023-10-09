<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h1>实名信息</h1>
      </div>
    </template>
    <div class="tip" style="color: #7f7f7f">
      <p>
        <el-icon><InfoFilled /></el-icon
        >完成实名认证后才能添加就诊人，正常进行挂号，为了不影响后续步骤，建议提前实名认证。
      </p>
    </div>
    <el-descriptions
      v-if="userInfo.authStatus == 1"
      class="margin-top"
      :column="1"
      size="small"
      border
      style="margin: 20px auto"
    >
      <el-descriptions-item label-align="center" :width="20">
        <template #label>
          <div class="cell-item">用户姓名</div>
        </template>
        {{ userInfo.name }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" :width="20">
        <template #label>
          <div class="cell-item">证件类型</div>
        </template>
        {{ userInfo.certificatesType == 10 ? "身份证" : "户口本" }}
      </el-descriptions-item>
      <el-descriptions-item label-align="center" :width="20">
        <template #label>
          <div class="cell-item">证件号码</div>
        </template>
        {{ userInfo.certificatesNo }}
      </el-descriptions-item>
    </el-descriptions>
    <el-form
      v-else
      style="width: 60%; margin: 20px auto"
      label-width="80"
      :model="params"
      :rules="rules"
      ref="form"
    >
      <el-form-item label="用户姓名" prop="name">
        <el-input v-model="params.name" placeholder="请输入用户姓名"></el-input>
      </el-form-item>
      <el-form-item label="证件类型" prop="certificatesType">
        <el-select
          v-model="params.certificatesType"
          placeholder="请选择证件类型"
          style="width: 100%"
        >
          <el-option
            v-for="(item, index) in arrType"
            :key="index"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码" prop="certificatesNo">
        <el-input
          v-model="params.certificatesNo"
          placeholder="请输入证件号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="上传证件" prop="certificatesUrl">
        <el-upload
          v-model="params.certificatesUrl"
          action="/api/oss/file/fileUpload?fileHost=userAuah"
          :limit="1"
          list-type="picture-card"
          :on-exceed="exceedhandler"
          :on-success="successhandler"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          ref="upload"
        >
          <img
            style="width: 100%; height: 100%"
            src="@/assets/images/auth_example.png"
            alt=""
          />
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img
            style="width: 100%"
            w-full
            v-if="params.certificatesUrl"
            :src="params.certificatesUrl"
            alt="图片丢失"
          />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="default" @click="submit"
          >提交</el-button
        >
        <el-button type="primary" size="default" @click="reset">重写</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { InfoFilled } from "@element-plus/icons-vue";
import { onMounted, ref, reactive } from "vue";
import { reqUserInfo, reqCertationType, reqUserCertation } from "@/api/user";
import type {
  UseringoResponseData,
  CertationTypeResponseData,
  CertationArr,
  UserParams,
} from "@/api/user/type";
import { ElMessage } from "element-plus";

let userInfo = ref<any>({});
let arrType = ref<CertationArr>([]);
let params = reactive<UserParams>({
  certificatesNo: "",
  certificatesType: "",
  certificatesUrl: "",
  name: "",
});
let dialogVisible = ref<boolean>(false);
let upload = ref<any>();
let form = ref<any>();

onMounted(() => {
  getUserInfo();
  getType();
});

const getUserInfo = async () => {
  let result: UseringoResponseData = await reqUserInfo();
  if (result.code == 200) {
    userInfo.value = result.data;
  }
};

const getType = async () => {
  let result: CertationTypeResponseData = await reqCertationType();
  if (result.code == 200) {
    arrType.value = result.data;
  }
};
// 图片上传
const exceedhandler = () => {
  ElMessage({
    type: "error",
    message: "只能上传一张图片",
  });
};
// 收集上传成功图片
const successhandler = (response: any) => {
  form.value.clearValidate("certificatesUrl");
  params.certificatesUrl = response.data;
};
// 预览
const handlePictureCardPreview = () => {
  dialogVisible.value = true;
};
// 删除
const handleRemove = () => {
  params.certificatesUrl = "";
};
// 重写
const reset = () => {
  Object.assign(params, {
    certificatesNo: "",
    certificatesType: "",
    certificatesUrl: "",
    name: "",
  });
  upload.value.clearFiles();
};
// 提交
const submit = async () => {
  // 先校验再发送请求
  await form.value.validate();
  try {
    await reqUserCertation(params);
    ElMessage({
      type: "success",
      message: "认证成功",
    });
    getUserInfo();
  } catch (error) {
    ElMessage({
      type: "error",
      message: "认证失败",
    });
  }
};

//表单校验
const validatorName = (rule: any, value: any, callBack: any) => {
  console.log(rule);

  //rule:即为当前校验字段的校验规则对象
  const reg =
    /^[\u00B7\u3007\u3400-\u4DBF\u4E00-\u9FFF\uE000-\uF8FF\uD840-\uD8C0\uDC00-\uDFFF\uF900-\uFAFF]+$/;
  if (reg.test(value)) {
    callBack();
  } else {
    callBack(new Error("请输入正确名字"));
  }
};

//证件类型校验的方法
const validatorType = (rule: any, value: any, callBack: any) => {
  console.log(rule);
  if (value == "10" || value == "20") {
    callBack();
  } else {
    callBack(new Error("请选择证件的类型"));
  }
};

//证件号码的校验方法
const validatorNo = (rule: any, value: any, callBack: any) => {
  console.log(rule);
  let sfz = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
  let hkb = /^\d{9}$/;
  if (sfz.test(value) || hkb.test(value)) {
    callBack();
  } else {
    callBack(new Error("请输入正确的身份证或者户口本的号码"));
  }
};
//证件照图片的
const validatorUrl = (rule: any, value: any, callBack: any) => {
  console.log(rule);
  if (value.length) {
    callBack();
  } else {
    callBack(new Error("请上传证件照图片"));
  }
};

const rules = {
  name: [
    {
      required: true,
      validator: validatorName,
      trigger: "change",
    },
  ],
  certificatesType: [
    {
      required: true,
      validator: validatorType,
      trigger: "change",
    },
  ],
  certificatesNo: [
    {
      required: true,
      validator: validatorNo,
      trigger: "change",
    },
  ],
  certificatesUrl: [
    {
      required: true,
      validator: validatorUrl,
      trigger: "change",
    },
  ],
};
</script>

<style scoped lang="scss">
.box-card {
  .card-header {
    h1 {
    }
  }
  .tip {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
    }
  }
}
</style>
