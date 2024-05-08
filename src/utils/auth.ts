import { useRoute, useRouter } from "vue-router";

const appCode = "xxxxxx";
const loginAction = "facialRecognition";

/**
 * 第三方登录
 * @param url 登录成功回调页面
 */
export const redirectLogin = (url?: string) => {
  console.log("🚀 ~ redirectLogin ~ url:", url);
  const router = useRouter();
  const route = useRoute();

  const redirect = encodeURI(url || route.path);

  router.push(
    `/login?appCode=${appCode}&action=${loginAction}&redirect=${redirect}`,
  );

  // wx.miniProgram.redirectTo({
  //   url: `/packages/users/wxface/index?appCode=${appCode}&action=${loginAction}&redirect=${redirect}`,
  // });
};
