<template>
  <section class="flex justify-center">
    <div class="w-9/12 text-center">
      <h1 class="text-4xl my-20 font-bold">요리 과정</h1>
      <div
        v-for="(text, index) in manualTexts"
        :key="index"
        class="flex flex-row gap-8 mb-8 w-full"
      >
        <div class="bg-gray-200 h-72 overflow-hidden shrink flex-grow w-2/5">
          <img
            v-if="manualImgs[index]"
            :src="manualImgs[index]"
            :alt="'요리과정' + [index + 1]"
            class="w-full h-full object-cover"
          />
          <img
            v-else
            src="@/assets/images/no_manual_img.jpg"
            alt="이미지 없음"
            class="w-full h-full object-cover"
          />
        </div>
        <p class="flex-grow w-3/5 text-left">{{ text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("recipe", ["recipe"]),
    ...mapGetters("recipe", ["manualTexts", "manualImgs"]),
  },
};
</script>
