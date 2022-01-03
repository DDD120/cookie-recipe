import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./index.css";
import store from "./store";
import dotenv from "dotenv";

createApp(App).use(router).use(store).mount("#app");
dotenv.config();
