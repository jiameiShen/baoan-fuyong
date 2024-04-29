import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/index.scss";

const app = createApp(App);

app.use(router); //注册路由

app.mount("#app");
