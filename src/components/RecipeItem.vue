<template>
  <router-link
    :to="{ name: 'Recipe', params: { rcp_nm: recipe.RCP_NM } }"
    class="flex border-gray-200 rounded-xl border-2 p-6 m-4 cursor-pointer duration-75 hover:shadow-lg hover:border-yellow-500 sm:flex-col"
  >
    <div class="w-1/4 h-48 mr-6 overflow-hidden sm:w-full sm:mb-8">
      <img
        :src="recipe.ATT_FILE_NO_MAIN"
        :alt="recipe.RCP_NM"
        class="w-full h-full object-cover rounded-xl"
        @error="noImgrePlace"
      />
    </div>
    <div class="w-3/4 sm:w-full">
      <h2 class="text-2xl mb-4">{{ recipe.RCP_NM }}</h2>
      <span class="block text-gray-500 mb-6"> {{ recipe.RCP_PAT2 }}</span>
      <p>{{ recipe.RCP_PARTS_DTLS }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    noImgrePlace(e) {
      e.target.src = "@/assets/images/no_manual_img.jpg";
    },
  },
};
</script>
