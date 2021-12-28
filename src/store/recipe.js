import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    title: "",
    recipes: [],
    recipe: [],
    total: 0,
    lastIndex: 0,
    notice: "검색된 레시피가 없습니다.",
  }),
  getters: {
    manualTexts: (state) => {
      return manualObjCreate(state, "manualTexts", "MANUAL");
    },
    manualImgs: (state) => {
      return manualObjCreate(state, "manualImgs", "MANUAL_IMG");
    },
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetRecipes(state) {
      state.title = "";
      state.recipes = [];
      (state.recipe = []), (state.total = 0);
      state.lastIndex = 0;
      state.notice = "검색된 레시피가 없습니다.";
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
    },
    async searchRecipeWithName({ commit }, payload) {
      try {
        const res = await _fetchRecipe(payload);
        const { row } = res.data.COOKRCP01;

        commit("updateState", {
          recipe: row[0],
        });
      } catch (notice) {
        commit("updateState", {
          recipe: [],
          notice,
        });
      }
    },
  },
};

function manualObjCreate(state, arrName, keyName) {
  const recipeObj = state.recipe;
  const keys = Object.keys(recipeObj);
  const regExp = new RegExp(`${keyName}[0-2][0-9]`);
  arrName = keys
    .filter((k) => regExp.test(k))
    .sort()
    .reduce((v, k) => Object.assign(v, { [k]: recipeObj[k] }), {});

  for (let key in arrName) {
    const val = arrName[key];
    if (val === "") delete arrName[key];
  }
  const manualObj = Object.values(arrName);
  return manualObj;
}

function _fetchRecipe(payload) {
  const { title, lastIndex, rcp_nm } = payload;
  const RECIPE_API_KEY = "fee7f81a72a24e28962e";
  const url = rcp_nm
    ? `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/1/RCP_NM="${rcp_nm}"`
    : `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/${lastIndex}/${
        lastIndex + 10
      }/RCP_NM="${title}"`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err.message));
  });
}
