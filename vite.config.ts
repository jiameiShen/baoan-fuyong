import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; //这个path用到了上面安装的@types/node
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_BASE_API } = loadEnv(mode, process.cwd());
  console.log("🚀 ~ VITE_BASE_API:", VITE_BASE_API);

  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
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
      port: 5173,
      open: false,
      https: false,
      hmr: { overlay: false },
      proxy: {
        "/apis": {
          target: "要代理的地址",
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/apis/, ""),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "pinia", "vue-router"],
            elementIcons: ["@element-plus/icons-vue"],
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
