import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; //这个path用到了上面安装的@types/node
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd());
  console.log("🚀 ~ VITE_BASE_URL:", VITE_BASE_URL);

  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
      viteMockServe({
        mockPath: "./src/mock",
        localEnabled: true,
      }),
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        "@": path.resolve("./src"), // @代替src
        "#": path.resolve("./types"), // #代替types
      },
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: false,
      https: false,
      hmr: { overlay: false },
      // secure: false, // 如果是https接口，需要配置这个参数
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router"],
          },
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/var.scss";',
        },
      },
    },
  });
};
