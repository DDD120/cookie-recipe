import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    title: "",
    recipes: [],
    total: null,
    lastIndex: 0,
    message: "",
    loading: false,
  }),
  getter: {},
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetRecipes(state) {
      state.title = "";
      state.recipes = [];
      state.total = null;
      state.lastIndex = 0;
    },
  },
  actions: {
    async searchRecipes({ state, commit }, payload) {
      const { title, lastIndex } = payload;
      const RECIPE_API_KEY = "fee7f81a72a24e28962e";
      const res = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/${lastIndex}/${
          lastIndex + 10
        }/RCP_NM=${title}`
      );

      const { row, total_count } = res.data.COOKRCP01;

      commit("updateState", {
        title: title,
        recipes: [...state.recipes, ...row],
        total: total_count,
        lastIndex: state.lastIndex + row.length,
      });
    },
  },
};
