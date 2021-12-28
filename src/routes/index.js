import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Recipe from "./Recipe";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/recipe/:rcp_nm",
      name: "Recipe",
      component: Recipe,
    },
  ],
});
