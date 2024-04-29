import { BiqHttp } from "../utils/http";
import { BasicFetchResult } from "@/api/model/base";

enum Api {
  List = "/list",
}

export interface ListParams {
  id: number; // 用户id
}

export interface RowItem {
  id: number; // 文件id
  fileName: string; // 文件名
}

export type ListResult = BasicFetchResult<RowItem[]>;

export const getList = (params: ListParams) => {
  return BiqHttp.request<ListModel>({
    url: Api.List,
    method: "POST",
    params,
  });
};
