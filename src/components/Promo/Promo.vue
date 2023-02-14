<template>
  <section class="promo">
    <h1 class="promo__header">
      Функциональное питание для котов
    </h1>
    <p class="promo__description">
      Занялся собой? Займись котом!
    </p>
    <PromoImage
      v-for="img in promoImagesArr"
      :key="img.src"
      :imageProp="img"
    >
    </PromoImage>
    <a
      href="#"
      class="button button--green"
    >
      Подобрать программу
    </a>
  </section>
</template>

<script>
import PromoImage from '@/components/Promo/components/PromoImage.vue';
import SpecialItems from '@/components/Special/components/SpecialItems.vue';

export default {
  name: 'Promo',
  components: {SpecialItems, PromoImage},
  setup() {
    const promoImagesArr = [
      {
        src: 'src/assets/img/promo/index-can-mobile@1x.png',
        width: '280',
        height: '270',
        alt: 'Упаковка корма Cat Energy',
        class: 'promo__img promo__img--mobile',
      },
      {
        src: 'src/assets/img/promo/index-can-tablet@1x.png',
        width: '709',
        height: '609',
        alt: 'Упаковка корма Cat Energy',
        class: 'promo__img promo__img--tablet',
      },
      {
        src: 'src/assets/img/promo/index-can-desktop@1x.png',
        width: '552',
        height: '499',
        alt: 'Упаковка корма Cat Energy',
        class: 'promo__img promo__img--desktop',
      },
    ];
    return {
      promoImagesArr,
    };
  },
};
</script>

<style scoped>

</style>
