<template>
  <div>{{ recipe.RCP_NM }}</div>
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
