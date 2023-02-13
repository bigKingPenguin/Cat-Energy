<template>
  <div class="promo">
    <h1 class="promo__header">
      Функциональное питание для котов
    </h1>
    <p class="promo__description">
      Занялся собой? Займись котом!
    </p>
    <PromoImage></PromoImage>
    <!--    <PromoImage v-for="img in promoImagesArr" :imageProp="img"></PromoImage>-->
    <a
        href="#"
        class="button button--green"
    >
      Подобрать программу
    </a>
  </div>
</template>

<script>
import PromoImage from "@/components/Promo/components/PromoImage.vue";
export default {
  name: "Promo",
  components: {PromoImage}
}
</script>

<style scoped>

</style>