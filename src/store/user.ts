import { defineStore } from "pinia";
import { login } from "@/apis/user";
import type { LoginResult } from "@/apis/user";
import { redirectLogin } from "@/utils/auth";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      accessKey: "",
      userInfo: {} as LoginResult,
    };
  },
  getters: {
    getToken(): string {
      return this.userInfo.token || "";
    },
    getUserInfo(): LoginResult {
      return this.userInfo;
    },
  },
  actions: {
    setAccessKey(payload) {
      this.accessKey = payload;
    },
    setUserInfo(payload: LoginResult) {
      this.userInfo = payload || {};
    },
    async login(url?: string) {
      if (!this.accessKey) {
        redirectLogin(url);
        return;
      }

      const { data: userInfo } = await login({ accessKey: this.accessKey });
      console.log("🚀 ~ login ~ userInfo:", userInfo);

      if (userInfo) {
        this.setUserInfo(userInfo);
      } else {
        redirectLogin(url);
      }

      return userInfo;
    },
    resetState() {
      this.userInfo = {} as LoginResult;
    },
  },
});
