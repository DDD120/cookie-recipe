<template>
  <section>
    <div class="container mx-auto mt-20 p-14">
      <Title title="Search" />
      <div
        class="relative mx-auto mt-14 flex items-center w-input rounded-full focus-within:shadow-lg bg-white overflow-hidden border-indigo-dark border-2"
      >
        <input
          v-model="title"
          type="text"
          placeholder="레시피를 검색해보세요!"
          @keyup.enter="apply"
          class="h-full w-full outline-none text-gray-700 px-8 py-4"
        />
        <button
          @click="apply"
          class="grid place-items-center h-full w-12 text-gray-300 mr-4"
        >
          <SearchIcon class="w-8 text-indigo-dark" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/Title";
import { SearchIcon } from "@heroicons//vue/solid";
import axios from "axios";

export default {
  components: {
    Title,
    SearchIcon,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    async apply() {
      const RECIPE_API_KEY = "fee7f81a72a24e28962e";
      const res = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/10/RCP_NM=${this.title}`
      );
      console.log(res);
    },
  },
};
</script>
