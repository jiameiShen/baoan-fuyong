/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 */
export const setTitle = (title) => {
  window.document.title = title;
  const iframe = document.createElement("iframe");
  iframe.src = "/favicon.ico";
  iframe.style.display = "none";
  iframe.onload = function () {
    setTimeout(() => {
      iframe.remove();
    });
  };
  document.body.appendChild(iframe);
};

/**
 * @description 加载本地图片
 */
export const getImgUrl = (url: string) => {
  return new URL("../assets/images" + url, import.meta.url).href;
};
