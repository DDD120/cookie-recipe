import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Recipe from "./Recipe";
import NotFound from "./NotFound";

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
      name: "NotFound",
      component: NotFound,
    },
  ],
});
