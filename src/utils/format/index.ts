// TreeSelect 分类选择
export const transTreeSelect = (tree: array = [], options) => {
  const { text, id, children } = {
    text: "text",
    id: "id",
    children: "children",
    ...options,
  };

  return tree.map((item) => {
    return {
      text: item[text],
      id: item[id],
      children: item[children] ? transTreeSelect(item[children], options) : [],
    };
  });
};
