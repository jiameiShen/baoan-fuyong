import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "get",
    timeout: 500, // 超时时间
    statusCode: 200,
    response: {
      code: 200,
      message: "操作成功",
      data: {
        token: "token========",
        corpCid: "企业统一社会信用代码",
        userName: "张三",
      },
    },
  },
] as MockMethod[];
