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
        <Loader v-if="loading" />
        <Observer @triggerIntersected="infiniteHandler" />
      </div>
    </div>
  </section>
</template>

<script>
import RecipeItem from "@/components/RecipeItem";
import Observer from "@/components/Observer.vue";
import Loader from "@/components/Loader.vue";
import { mapState } from "vuex";

export default {
  components: {
    RecipeItem,
    Observer,
    Loader,
  },
  computed: {
    ...mapState("recipe", [
      "title",
      "recipes",
      "total",
      "lastIndex",
      "notice",
      "loading",
    ]),
  },
  methods: {
    infiniteHandler() {
      setTimeout(async () => {
        if (this.lastIndex < this.total) {
          this.$store.dispatch("recipe/searchRecipes", {
            title: this.title,
            lastIndex: this.lastIndex + 1,
          });
        }
      }, 500);
    },
  },
};
</script>
