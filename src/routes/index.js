import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Recipe from "./Recipe";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/recipe/:name",
      component: Recipe,
    },
  ],
});
