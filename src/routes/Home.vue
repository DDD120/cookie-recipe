<template>
  <HeadLine />
  <Search />
  <RecipeList />
</template>

<script>
import HeadLine from "@/components/HeadLine.vue";
import Search from "@/components/Search.vue";
import RecipeList from "@/components/RecipeList.vue";

export default {
  components: {
    HeadLine,
    Search,
    RecipeList,
  },
};
</script>
