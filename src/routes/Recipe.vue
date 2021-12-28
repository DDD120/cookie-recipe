<template>
  <header
    class="bg-yellow-500 flex justify-center text-xl text-white font-bold p-4"
  >
    <router-link to="/">COOKIE RECIPE</router-link>
  </header>
  <div class="my-20">
    <Title title="Recipe" />
  </div>
  <RecipeDetail />
  <Manual />
</template>

<script>
import Title from "@/components/Title.vue";
import RecipeDetail from "@/components/RecipeDetail";
import Manual from "@/components/Manual";
import { mapState } from "vuex";

export default {
  components: {
    Title,
    RecipeDetail,
    Manual,
  },
  created() {
    this.$store.commit("recipe/resetRecipes");
    this.$store.dispatch("recipe/searchRecipeWithName", {
      rcp_nm: this.$route.params.rcp_nm,
    });
  },
  computed: {
    ...mapState("recipe", ["recipe"]),
  },
};
</script>
