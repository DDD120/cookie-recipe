<template>
  <Header />
  <div v-if="notice">
    <NotFound />
  </div>
  <div v-else-if="loading">
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
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import RecipeDetail from "@/components/RecipeDetail";
import Manual from "@/components/Manual";
import Loader from "@/components/Loader";
import NotFound from "@/components/NotFound";
import { mapState } from "vuex";

export default {
  components: {
    Header,
    Title,
    RecipeDetail,
    Manual,
    Loader,
    NotFound,
  },
  created() {
    this.$store.dispatch("recipe/searchRecipeWithName", {
      rcp_nm: this.$route.params.rcp_nm,
    });
  },
  computed: {
    ...mapState("recipe", ["recipe", "loading", "notice"]),
  },
  methods: {
    reset() {
      this.$store.commit("recipe/resetRecipes");
    },
  },
};
</script>
