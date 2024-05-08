import { AppHttp } from "@/utils/http";

enum Api {
  Tree = "/testTree",
}

export interface RowItem {
  code: string;
  name: string;
  children?: RowItem[];
}

export type TreeResult = RowItem[];

export const getTree = () => {
  return AppHttp.request<TreeResult>({
    url: Api.Tree,
    method: "GET",
    loading: true,
  });
};
