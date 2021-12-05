import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./index.css";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
