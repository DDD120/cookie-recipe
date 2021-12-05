import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    recipes: [],
    total: "",
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
      state.recipes = [];
    },
  },
  actions: {
    async searchRecipes({ commit }, payload) {
      const { title } = payload;
      const RECIPE_API_KEY = "fee7f81a72a24e28962e";
      const res = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/10/RCP_NM=${title}`
      );
      const { row, total_count } = res.data.COOKRCP01;
      commit("updateState", {
        recipes: row,
        total: total_count,
      });
    },
  },
};
