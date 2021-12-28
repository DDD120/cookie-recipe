<template>
  <td class="border border-gray-900">{{ this.name }}</td>
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
