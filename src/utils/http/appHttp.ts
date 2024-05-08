import axios from "axios";
import { useUserStore } from "@/store/user";
import { showToast, showLoadingToast, closeToast } from "vant";
import { DEFAULT_URL_PREFIX, DEFAULT_AJAX_TIMEOUT } from "@/config";

/*
 * 创建实例
 * 与后端服务通信
 */
const AppHttp = axios.create({
  baseURL: DEFAULT_URL_PREFIX,
  timeout: DEFAULT_AJAX_TIMEOUT,
});

// 正在请求的数量
let requestCount = 0;

// 显示loading
const showLoading = (config) => {
  if (!config?.loading) return;
  if (requestCount === 0) {
    showLoadingToast({
      message: "加载中...",
      forbidClick: true,
      duration: 0,
    });
  }
  requestCount++;
};

// 隐藏loading
const hideLoading = (config) => {
  if (!config?.loading) return;
  requestCount--;
  if (requestCount === 0) {
    closeToast();
  }
};

/**
 * 请求拦截器
 * 功能：配置请求头
 */
AppHttp.interceptors.request.use(
  (config) => {
    // console.log("🚀 ~ config:", config);
    const userStore = useUserStore();

    config.headers.authorization = userStore.getToken;
    showLoading(config);
    return config;
  },
  (error) => {
    // console.log("🚀 ~ error:", error);
    console.error("网络错误，请稍后重试");
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 * 功能：处理异常
 */
AppHttp.interceptors.response.use(
  (response) => {
    // console.log("🚀 ~ response:", response);
    hideLoading(response.config);
    if (response.data.code === 200) {
      return response.data;
    } else {
      showToast(response.data.message);
      return Promise.reject(response.data);
    }
  },
  (error) => {
    // console.log("🚀 ~ error:", error);
    hideLoading(error.config);
    // 响应错误
    if (error.response && error.response.status) {
      const status = error.response.status;

      if (status === 401) {
        // 登录相关
      }

      showToast(error.response.data.message || "系统错误");
    }

    return Promise.reject(error);
  },
);

export default AppHttp;
