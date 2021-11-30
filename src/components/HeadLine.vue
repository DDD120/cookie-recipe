<template>
  <section class="relative bg-yellow-500 h-xl">
    <div class="absolute top-14 right-16 text-right text-white text-lg">
      <h1 class="text-7xl font-bold leading-normal tracking-tight">
        COOKIE RECIPE
      </h1>
      <p>간단하고 쉬운 음식을 만들고 싶으면?</p>
      <p>
        <span class="text-indigo-900 text-3xl font-bold tracking-tighter"
          >쿠키 레시피</span
        >에서 검색하세요!
      </p>
    </div>
    <img
      src="@/assets/images/headline-cookie.svg"
      alt="쿠키 이미지"
      class="w-96 absolute left-16 bottom-16 pointer-events-none"
    />
    <HeartBtn />
  </section>
</template>
<script>
import HeartBtn from "@/components/HeartBtn.vue";
export default {
  components: {
    HeartBtn,
  },
};
</script>
