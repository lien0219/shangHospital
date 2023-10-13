import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// gzip 压缩
import VitePluginCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [vue(), VitePluginCompression()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 代理跨域
  server: {
    proxy: {
      "/api": {
        target: "http://syt.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        // 将node_modules中的包打包为vendor文件
        manualChunks: (id: string) => {
          if (id.indexOf("node_modules") > -1) {
            return "vendor";
          }
        },
      },
    },
  },
});
