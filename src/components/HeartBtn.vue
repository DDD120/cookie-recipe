<template>
  <button
    @click="btnClick()"
    class="absolute bottom-16 right-16 w-14 h-14 rounded-full bg-indigo-900 text-white flex justify-center items-center"
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
