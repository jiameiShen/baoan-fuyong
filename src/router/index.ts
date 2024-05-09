import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/user";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(""), //可传参数，配置base路径，例如'/app'
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  const userStore = useUserStore();
  to.query.accessKey && userStore.setAccessKey(to.query.accessKey);

  if (!userStore.getToken && to.meta.auth) {
    const userInfo = await userStore.login(to.path);
    return !!userInfo;
  }
  return true;
});

export default router;
