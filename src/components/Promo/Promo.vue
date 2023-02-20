<template>
  <section class="promo">
    <div class="promo__content-wrapper">
      <h1 class="promo__title">
        Функциональное питание для котов
      </h1>
      <p class="promo__tagline">
        Занялся собой? Займись котом!
      </p>
      <PromoImage
        v-for="img in promoImagesArr"
        :key="img.src"
        :imageProp="img"
      >
      </PromoImage>
    </div>
    <div class="promo__img-wrapper">
      <img
        src="src/assets/img/promo/background-cat-mobile@1x.png"
        width="320"
        height="302"
        class="promo__img promo__img--mobile"
      >
      <img
        src="src/assets/img/promo/background-cat-desktop@1x.png"
        width="720"
        height="694"
        class="promo__img promo__img--desktop"
      >
    </div>
    <Button
      href="#"
      className="button--green button--promo"
      content="Подобрать программу"
    >
    </Button>
  </section>
</template>

<script>
  import PromoImage from '@/components/Promo/components/PromoImage.vue';
  import SpecialItems from '@/components/Special/components/SpecialItems.vue';
  import Button from '@/components/common/Button.vue';

  export default {
    name: 'Promo',
    components: {Button, SpecialItems, PromoImage},
    setup() {
      const promoImagesArr = [
        {
          src: 'src/assets/img/promo/index-can-mobile@1x.png',
          width: '280',
          height: '270',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__pack promo__pack--mobile',
        },
        {
          src: 'src/assets/img/promo/index-can-tablet@1x.png',
          width: '709',
          height: '609',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__pack promo__pack--tablet',
        },
        {
          src: 'src/assets/img/promo/index-can-desktop@1x.png',
          width: '552',
          height: '499',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__pack promo__pack--desktop',
        },
      ];
      return {
        promoImagesArr,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .promo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
      align-items: flex-start;
    }

    &__content-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 280px;
      padding-top: 26px;
      padding-bottom: 3px;

      @media (min-width: 768px) {
        max-width: unset;
        padding-top: 50px;
        padding-left: 87px;
        position: relative;
      }

      @media (min-width: 768px) {
        padding-top: 99px;
        padding-left: 80px;
      }
    }

    &__title {
      max-width: 450px;
      margin-bottom: 23px;
      font-size: 36px;
      font-weight: 400;
      line-height: 37px;
      color: var(--color-white);
      text-align: center;

      @media (min-width: 768px) {
        margin-bottom: 37px;
        font-size: 60px;
        line-height: 61px;
        color: var(--color-black);
        text-align: left;
      }

      @media (min-width: 1440px) {
        margin-bottom: 37px;
      }
    }

    &__tagline {
      margin-bottom: 28px;
      font-size: 14px;
      line-height: 16px;
      color: var(--color-white);
      text-transform: uppercase;
      text-align: center;

      @media (min-width: 768px) {
        margin-bottom: 44px;
        font-size: 20px;
        line-height: 24px;
        color: var(--color-black);
        text-align: left;
      }

      @media (min-width: 1440px) {
        margin-bottom: 47px;
      }
    }

    &__pack {

      &--mobile {
        @media (min-width: 768px) {
          display: none;
        }
      }

      &--tablet {
        display: none;

        @media (min-width: 768px) {
          display: block;
          position: absolute;
          top: 253px;
          left: 0;
          z-index: -1;
        }

        @media (min-width: 1440px) {
          display: none;
        }
      }

      &--desktop {
        display: none;

        @media (min-width: 1440px) {
          display: block;
          position: absolute;
          top: 18px;
          left: 448px;
        }
      }
    }

    &__img-wrapper {
      display: flex;
      position: absolute;
      width: 100%;
      min-width: 320px;
      height: 302px;
      margin-right: calc(-1 * var(--padding-mobile));
      margin-left: calc(-1 * var(--padding-mobile));
      z-index: -1;

      @media (min-width: 768px) {
        width: auto;
      }

      @media (min-width: 1440px) {
        width: 51.5%;
        min-width: unset;
        height: 696px;
        position: absolute;
        top: 0;
        right: 0;
      }
    }


    &__img {
      width: 100%;
      object-fit: cover;

      &--mobile {
        display: block;
        @media (min-width: 768px) {
          display: none;
        }

        @media (min-width: 1440px) {
          display: none;
        }
      }

      &--tablet {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }

        @media (min-width: 1440px) {
          display: none;
        }
      }

      &--desktop {
        display: none;

        @media (min-width: 1440px) {
          display: block;
        }
      }
    }

    .button {
      &--promo {
        width: 100%;

        @media (min-width: 768px) {
          width: max-content;
          margin-left: 82px;
        }

        @media (min-width: 1440px) {
          margin-left: 80px;
        }
      }
    }
  }
</style>
