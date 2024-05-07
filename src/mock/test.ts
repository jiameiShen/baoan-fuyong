import { MockMethod } from "vite-plugin-mock";
import mockz from "mockz";

enum Api {
  Tree = "/testTree",
}

export interface RowItem {
  code: string;
  name: string;
  children?: RowItem[];
}

const dataList = mockz.all().filter((item) => item.name === "广东省")[0]
  ?.children as RowItem;

export default [
  {
    url: Api.Tree,
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
