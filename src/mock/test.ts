import { MockMethod } from "vite-plugin-mock";
import mockz from "mockz";

const dataList = mockz
  .all()
  .filter((item) => item.name === "广东省")[0]?.children;

export default [
  {
    url: "/testTree",
    method: "get",
    timeout: 500, // 超时时间
    statusCode: 200,
    response: {
      code: 200,
      message: "操作成功",
      data: dataList,
    },
  },
  {
    url: "/list",
    method: "get",
    timeout: 500, // 超时时间
    statusCode: 200,
    response: {
      code: 200,
      message: "操作成功",
      data: dataList,
    },
  },
] as MockMethod[];
