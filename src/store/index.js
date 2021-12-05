import { createStore } from "vuex";
import recipe from "./recipe";

export default createStore({
  modules: {
    recipe,
  },
});
