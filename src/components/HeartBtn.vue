<template>
  <button
    @click="btnClick()"
    class="w-14 h-14 rounded-full bg-indigo-dark text-white flex justify-center items-center sm:relative sm:top-0 sm:left-0"
  >
    <HeartIcon class="w-8 h-8 text-yellow-500" />
    <HeartIcon
      :class="[pingMotion ? 'animate-ping' : '']"
      class="absolute top-3 w-8 h-8 text-yellow-500"
    />
  </button>
</template>

<script>
import { HeartIcon } from "@heroicons//vue/solid";

export default {
  components: {
    HeartIcon,
  },
  data() {
    return {
      pingMotion: false,
    };
  },
  methods: {
    btnClick() {
      this.pingMotion = true;
      setTimeout(() => {
        this.pingMotion = false;
      }, 1000);
    },
  },
};
</script>
