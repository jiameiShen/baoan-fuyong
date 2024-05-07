const routes = [
  {
    path: "/",
    component: () => import("@/pages/test/test.vue"),
  },
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
