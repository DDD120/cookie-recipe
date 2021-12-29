<template>
  <section class="flex justify-center h-detail">
    <div
      class="inline-flex justify-center border border-gray-800 p-8 rounded-lg w-9/12"
    >
      <div class="mr-8 w-2/5 rounded-xl overflow-hidden">
        <img
          :src="recipe.ATT_FILE_NO_MK"
          :alt="recipe.RCP_NM"
          class="mr-6 w-full h-full object-cover"
          @error="noImgPlace"
        />
      </div>
      <div class="w-3/5 flex flex-col justify-around">
        <h1 class="text-4xl mb-4 text-bold">{{ recipe.RCP_NM }}</h1>
        <div>
          <div class="flex mb-4">
            <span class="mr-4">
              <Label name="요리 종류" />
              <h4 class="p-2">{{ recipe.RCP_PAT2 }}</h4>
            </span>
            <span class="mr-4">
              <Label name="요리 종류" />
              <h4 class="p-2">{{ recipe.RCP_PAT2 }}</h4>
            </span>
          </div>
          <div class="mb-4">
            <Label name="재료" />
            <p class="p-2">{{ recipe.RCP_PARTS_DTLS }}</p>
          </div>
        </div>
        <table class="border border-gray-800 border-collapse">
          <caption class="text-left mb-2">
            영양정보
          </caption>
          <tr class="bg-yellow-500 bg-opacity-80 border border-gray-800">
            <TableTh name="열량" />
            <TableTh name="탄수화물" />
            <TableTh name="단백질" />
            <TableTh name="지방" />
            <TableTh name="나트륨" />
          </tr>
          <tr class="text-center border border-gray-800">
            <TableTd :name="recipe.INFO_ENG" />
            <TableTd :name="recipe.INFO_CAR" />
            <TableTd :name="recipe.INFO_PRO" />
            <TableTd :name="recipe.INFO_FAT" />
            <TableTd :name="recipe.INFO_NA" />
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import Label from "@/components/Label.vue";
import TableTh from "@/components/TableTh";
import TableTd from "@/components/TableTd";
import { mapState } from "vuex";

export default {
  components: {
    Label,
    TableTh,
    TableTd,
  },
  computed: {
    ...mapState("recipe", ["recipe"]),
  },
  methods: {
    noImgrePlace(e) {
      e.target.src = "@/assets/images/no_manual_img.jpg";
    },
  },
};
</script>
