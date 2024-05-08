import { AppHttp } from "@/utils/http";

enum Api {
  Login = "/login",
}

export interface LoginParams {
  accessKey: string;
}

export interface LoginResult {
  token: string;
  corpCid: string;
  userName: string;
}

/**
 * 获取登录信息
 */
export const login = (params: LoginParams) => {
  return AppHttp.request<LoginResult>({
    url: Api.Login,
    method: "GET",
    loading: true,
    params,
  });
};
