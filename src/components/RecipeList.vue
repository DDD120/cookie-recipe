<template>
  <section class="flex justify-center">
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
        <infinite-scroll
          @infinite-scroll="infiniteHandler"
          :message="message"
          :noResult="noResult"
        ></infinite-scroll>
      </div>
    </div>
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
    ...mapState("recipe", ["title", "recipes", "total", "lastIndex", "notice"]),
  },
  methods: {
    infiniteHandler() {
      this.noResult = false;
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
