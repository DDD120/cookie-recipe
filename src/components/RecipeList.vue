<template>
  <section class="flex justify-center mb-20">
    <div class="w-8/12">
      <div
        v-if="notice"
        class="text-center border-gray-200 rounded-xl border-2 p-6 my-20"
      >
        <p class="text-gray-400">{{ notice }}</p>
      </div>
      <div v-else>
        <p class="m-4">
          검색 결과 총
          <span class="font-bold text-yellow-500">{{ total }}</span
          >개의 레시피가 검색되었습니다.
        </p>
        <RecipeItem
          v-for="recipe in recipes"
          :key="recipe.RCP_SEQ"
          :recipe="recipe"
        />
        <div v-if="loading" class="flex justify-center m-12">
          <div
            style="border-top-color: transparent"
            class="w-12 h-12 border-2 border-yellow-500 border-solid rounded-full animate-spin"
          ></div>
        </div>
        <Observer @triggerIntersected="infiniteHandler" />
      </div>
    </div>
  </section>
</template>

<script>
import RecipeItem from "@/components/RecipeItem";
import Observer from "@/components/Observer.vue";
import { mapState } from "vuex";

export default {
  components: {
    RecipeItem,
    Observer,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState("recipe", ["title", "recipes", "total", "lastIndex", "notice"]),
  },
  methods: {
    infiniteHandler() {
      this.loading = true;
      setTimeout(async () => {
        if (this.lastIndex < this.total) {
          this.$store.dispatch("recipe/searchRecipes", {
            title: this.title,
            lastIndex: this.lastIndex + 1,
          });
        } else {
          this.loading = false;
        }
      }, 500);
    },
  },
};
</script>
