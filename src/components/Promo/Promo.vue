<template>
  <section class="promo">
    <!--    <h1 class="promo__header">-->
    <!--      Функциональное питание для котов-->
    <!--    </h1>-->
    <!--    <p class="promo__description">-->
    <!--      Занялся собой? Займись котом!-->
    <!--    </p>-->
    <!--    <PromoImage-->
    <!--      v-for="img in promoImagesArr"-->
    <!--      :key="img.src"-->
    <!--      :imageProp="img"-->
    <!--    >-->
    <!--    </PromoImage>-->
    <!--    <a-->
    <!--      href="#"-->
    <!--      class="button button&#45;&#45;green"-->
    <!--    >-->
    <!--      Подобрать программу-->
    <!--    </a>-->
    <div class="promo__img-wrapper">
      <img src="src/assets/img/promo/background-cat-desktop@1x.png" class="promo__background" width="882" height="694">
    </div>
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
          src: 'src/assets/img/promo/index-can-tablet@1x.png',
          width: '709',
          height: '609',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__img promo__img--tablet',
        },
        //{
        //TODO: убрать отсюда пропс или нет?
        //}
      ];
      return {
        promoImagesArr,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .promo {

    //TODO: мб сделать один враппер для картинок под мобилку и десктоп
    &__img-wrapper {
      display: none;
      position: relative;
      width: 70%;
      margin-left: auto;
      margin-right: calc(-1 * var(--padding-desktop));
    }

    @media (min-width: 1440px) {
      &__img-wrapper {
        display: block;
      }

      &__background {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
