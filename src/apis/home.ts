import { AppHttp } from "@/utils/http";

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

export type ListResult = RowItem[];

export const getList = (params: ListParams) => {
  return AppHttp.request<ListResult>({
    url: Api.List,
    method: "GET",
    params,
  });
};
