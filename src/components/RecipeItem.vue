<template>
  <router-link
    :to="{ name: 'Recipe', params: { rcp_nm: recipe.RCP_NM } }"
    class="flex border-gray-200 rounded-xl border-2 p-6 m-4 cursor-pointer duration-75 hover:shadow-lg hover:border-yellow-500"
  >
    <img
      :src="recipe.ATT_FILE_NO_MAIN"
      :alt="recipe.RCP_NM"
      class="w-48 h-48 mr-6 object-cover rounded-xl"
    />
    <div>
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
};
</script>
