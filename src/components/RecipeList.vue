<template>
  <section>
    <p>{{ total }}</p>
    <RecipeItem
      v-for="recipe in recipes"
      :key="recipe.RCP_SEQ"
      :recipe="recipe"
    />
    <p>{{ lastIndex }}</p>
    <infinite-scroll
      @infinite-scroll="infiniteHandler"
      :message="message"
      :noResult="noResult"
    ></infinite-scroll>
  </section>
</template>

<script>
import InfiniteScroll from "infinite-loading-vue3";
import RecipeItem from "@/components/RecipeItem";
import { mapState } from "vuex";

export default {
  components: {
    InfiniteScroll,
    RecipeItem,
  },
  data() {
    return {
      message: "",
      noResult: true,
    };
  },
  computed: {
    ...mapState("recipe", ["title", "recipes", "total", "lastIndex"]),
  },
  methods: {
    infiniteHandler() {
      this.noResult = true;
      setTimeout(async () => {
        if (this.lastIndex < this.total) {
          this.$store.dispatch("recipe/searchRecipes", {
            title: this.title,
            lastIndex: this.lastIndex + 1,
          });
        }
        if (this.lastIndex == this.total) {
          this.noResult = true;
        }
      }, 1000);
    },
  },
};
</script>
