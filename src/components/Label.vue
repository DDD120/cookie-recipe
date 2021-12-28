<template>
  <span class="bg-yellow-500 px-2 py-1 rounded-full text-sm">{{
    this.name
  }}</span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>
