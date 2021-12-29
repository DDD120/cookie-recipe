<template>
  <header
    class="bg-yellow-500 flex justify-center text-xl text-white font-bold p-4"
  >
    <router-link to="/" @click="reset">COOKIE RECIPE</router-link>
  </header>
  <div v-if="loading">
    <Loader fixed />
    <div class="flex justify-center h-detail my-20">
      <div class="bg-gray-300 p-8 rounded-g w-9/12"></div>
    </div>
  </div>
  <div v-else>
    <div class="my-20">
      <Title title="Recipe" />
    </div>
    <RecipeDetail />
    <Manual />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import RecipeDetail from "@/components/RecipeDetail";
import Manual from "@/components/Manual";
import Loader from "@/components/Loader";
import { mapState } from "vuex";

export default {
  components: {
    Title,
    RecipeDetail,
    Manual,
    Loader,
  },
  created() {
    this.$store.dispatch("recipe/searchRecipeWithName", {
      rcp_nm: this.$route.params.rcp_nm,
    });
  },
  computed: {
    ...mapState("recipe", ["recipe", "loading"]),
  },
  methods: {
    reset() {
      this.$store.commit("recipe/resetRecipes");
    },
  },
};
</script>
