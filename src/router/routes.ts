const routes = [
  // {
  //   path: "/login",
  //   component: () => import("@/pages/login.vue"), //路由懒加载
  // },
  {
    path: "/home",
    component: () => import("@/pages/home/home.vue"),
  },
  {
    path: "/aboutus",
    component: () => import("@/pages/aboutus/aboutus.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/notFound/notFound.vue"),
  },
];

export default routes;
