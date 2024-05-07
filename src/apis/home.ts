import { AppHttp } from "@/utils/http";
import { BasicFetchResult } from "@/api/model/base";

enum Api {
  List = "/list",
}

export interface ListParams {
  id: number; // 用户id
}

export interface RowItem {
  code: string;
  name: string;
  children?: RowItem[];
}

export type ListResult = BasicFetchResult<RowItem[]>;

export const getList = (params: ListParams) => {
  return AppHttp.request<ListResult>({
    url: Api.List,
    method: "POST",
    params,
  });
};
