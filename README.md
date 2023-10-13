# Vue 3 + TypeScript + Vite

主要技术栈
Vue3 Vue-Router4 TypeScript Vite Pinia Sass Axios ElementPlus Ant-Design-Vue

医院通是以某医院预约挂号统一平台为原型而搭建的在线医疗服务平台，采用 Vue3 全家桶、TypeScript、Pinia 技术开发，该平台集成多家医院的挂号信息，提供全程跟踪服务，用户可以随时了解自己的挂号状态。

注意： gzip 打包给出的大小提示一样，打包的结果是 .gz 文件。，需要跟后端商量，当请求文件是 .gz 文件时，需要设置响应头为 content-encoding: gzip（告诉浏览器这个文件是 gzip 压缩过的） ，浏览器收到响应结果后发现响应头中的这个设置项就会立即解压得到原来的 .js 文件。
