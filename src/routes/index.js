import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Recipe from "./Recipe";
import PageNotFound from "./PageNotFound";

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
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
    {
      path: "/:notFound(.*)",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});
