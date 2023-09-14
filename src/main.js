import "./assets/main.css";
import i18n from "./i18n";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store";
const app = createApp(App);
app.use(store);
app.use(i18n);
app.use(router);
app.mount("#app");
