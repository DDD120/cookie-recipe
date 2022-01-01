<template>
  <section class="bg-yellow-500 sm:py-20">
    <div
      class="md:container mx-auto relative h-xl sm:static sm:h-auto sm:m-0 sm:p-4"
    >
      <div
        class="absolute top-14 right-16 text-right text-white text-lg sm:static sm:text-center sm:mb-20"
      >
        <h1
          class="text-7xl font-bold leading-normal tracking-tight sm:leading-none sm:mb-8"
        >
          COOKIE RECIPE
        </h1>
        <p>간단하고 쉬운 음식을 만들고 싶으면?</p>
        <p>
          <span class="text-indigo-dark text-3xl font-bold tracking-tighter"
            >쿠키 레시피</span
          >에서 검색하세요!
        </p>
      </div>
      <img
        src="@/assets/images/headline-cookie.svg"
        alt="쿠키 이미지"
        class="w-96 absolute left-16 bottom-16 pointer-events-none sm:hidden"
      />
      <HeartBtn
        class="absolute bottom-16 right-16 sm:static sm:my-4 sm:mx-auto"
      />
    </div>
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
