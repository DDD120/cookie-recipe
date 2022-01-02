import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    title: "",
    viewRecipes: [],
    recipes: [],
    recipe: [],
    total: 0,
    lastIndex: 0,
    notice: "검색된 레시피가 없습니다.",
    loading: false,
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
      state.viewRecipes = [];
      (state.recipe = []), (state.total = 0);
      state.lastIndex = 0;
      state.notice = "검색된 레시피가 없습니다.";
    },
  },
  actions: {
    async searchRecipes({ state, commit }, payload) {
      commit("updateState", {
        notice: "",
        loading: true,
      });

      try {
        if (state.viewRecipes.length > 0) {
          const addRecipe = state.recipes.slice(
            state.lastIndex + 1,
            state.lastIndex + 10
          );
          commit("updateState", {
            viewRecipes: [...state.viewRecipes, ...addRecipe],
            lastIndex: state.lastIndex + addRecipe.length,
            loading: false,
          });
          return;
        }

        const { title } = payload;

        const res = await _fetchRecipe(payload);
        const { row, total_count } = res.data.COOKRCP01;

        const filterRecipes = row.filter(
          (recipe) => !/[\s]/g.test(recipe.RCP_NM)
        );
        const totalCount = total_count - (total_count - filterRecipes.length);
        const sliceRecipes = filterRecipes.slice(
          state.lastIndex,
          state.lastIndex + 10
        );

        commit("updateState", {
          title,
          recipes: filterRecipes,
          viewRecipes: sliceRecipes,
          total: totalCount,
          lastIndex: state.lastIndex + sliceRecipes.length,
        });
      } catch (error) {
        commit("updateState", {
          recipes: [],
          notice: "레시피를 찾을 수 없습니다.",
        });
      } finally {
        commit("updateState", {
          loading: false,
        });
      }
    },
    async searchRecipeWithName({ state, commit }, payload) {
      if (state.loading) return;

      commit("updateState", {
        notice: "",
        loading: true,
      });

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
      } finally {
        commit("updateState", {
          loading: false,
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

async function _fetchRecipe(payload) {
  return await axios.post("/.netlify/functions/recipe", payload);
}
