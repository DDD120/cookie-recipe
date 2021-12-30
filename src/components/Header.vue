<template>
  <header
    class="bg-yellow-500 flex justify-center text-xl text-white font-bold p-4"
  >
    <router-link to="/" @click="reset">COOKIE RECIPE</router-link>
  </header>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$store.commit("recipe/resetRecipes");
    },
  },
};
</script>
