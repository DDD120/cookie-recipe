<template>
  <HeartBtn class="relative mx-auto" />
  <h1 class="text-indigo-dark font-bold text-4xl text-center tracking-tight">
    {{ title }}
  </h1>
</template>

<script>
import HeartBtn from "@/components/HeartBtn";

export default {
  components: {
    HeartBtn,
  },
  props: {
    title: {
      type: String,
    },
  },
};
</script>
