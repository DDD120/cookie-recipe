import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    title: "",
    recipes: [],
    total: 0,
    lastIndex: 0,
    notice: "검색된 레시피가 없습니다.",
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
      state.total = 0;
      state.lastIndex = 0;
    },
  },
  actions: {
    async searchRecipes({ state, commit }, payload) {
      commit("updateState", {
        notice: "",
      });

      try {
        const { title } = payload;

        const res = await _fetchRecipe({
          ...payload,
        });

        const { row, total_count } = res.data.COOKRCP01;

        commit("updateState", {
          title,
          recipes: [...state.recipes, ...row],
          total: Number(total_count),
          lastIndex: state.lastIndex + row.length,
        });
      } catch (notice) {
        commit("updateState", {
          recipes: [],
          notice,
        });
      }
      console.log(state.lastIndex, state.total);
    },
    async searchRecipeWithName(context, payload) {
      try {
        const res = await _fetchRecipe(payload);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

function _fetchRecipe(payload) {
  const { title, lastIndex, name } = payload;
  const RECIPE_API_KEY = "fee7f81a72a24e28962e";
  const url = name
    ? `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/1/RCP_NM='${name}'`
    : `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/${lastIndex}/${
        lastIndex + 10
      }/RCP_NM='${title}'`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err.message));
  });
}
