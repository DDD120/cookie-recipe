<template>
  <div class="container mx-auto">
    <div>
      <RecipeItem
        v-for="recipe in recipes"
        :key="recipe.RCP_SEQ"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<script>
import RecipeItem from "@/components/RecipeItem";

export default {
  components: {
    RecipeItem,
  },
  computed: {
    recipes() {
      return this.$store.state.recipe.recipes;
    },
  },
};
</script>
