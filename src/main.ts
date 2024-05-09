import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "vant/lib/index.css";
import "./assets/styles/index.scss";

const app = createApp(App);

import VConsole from "vconsole";
const vConsole = new VConsole();
app.use(vConsole);

app.use(router); //注册路由
app.use(store);

app.mount("#app");
