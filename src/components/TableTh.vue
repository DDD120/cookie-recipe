<template>
  <th class="border border-gray-900 w-32">{{ this.name }}</th>
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
