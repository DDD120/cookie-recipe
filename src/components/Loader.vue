<template>
  <div :class="[fixed ? fixedCenter : flexCenter]">
    <div
      style="border-top-color: transparent"
      class="w-12 h-12 border-2 border-yellow-500 border-solid rounded-full animate-spin"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    flex: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fixedCenter:
        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      flexCenter: "flex justify-center m-12",
    };
  },
};
</script>
