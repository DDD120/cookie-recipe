<template>
  <h1>RECIPE</h1>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("recipe/searchRecipeWithName", {
      name: this.$route.params.name,
    });
  },
};
</script>
