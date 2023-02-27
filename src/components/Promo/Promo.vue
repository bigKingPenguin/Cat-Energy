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
        srcset="@/assets/img/promo/background-cat-mobile@2x.png 2x"
        src="@/assets/img/promo/background-cat-mobile@1x.png"
        width="320"
        height="302"
        class="promo__img promo__img--mobile"
      >
      <img
        srcset="@/assets/img/promo/background-cat-desktop@2x.png 2x"
        src="@/assets/img/promo/background-cat-desktop@1x.png"
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
  import packMobile1x from '@/assets/img/promo/pack-mobile@1x.png';
  import packMobile2x from '@/assets/img/promo/pack-mobile@2x.png';
  import packTablet1x from '@/assets/img/promo/pack-tablet@1x.png';
  import packTablet2x from '@/assets/img/promo/pack-tablet@2x.png';
  import packDesktop1x from '@/assets/img/promo/pack-desktop@1x.png';
  import packDesktop2x from '@/assets/img/promo/pack-desktop@2x.png';


  export default {
    name: 'Promo',
    components: {Button, SpecialItems, PromoImage},
    setup() {
      const promoImagesArr = [
        {
          srcset: packMobile2x,
          src: packMobile1x,
          width: '280',
          height: '270',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__pack promo__pack--mobile',
        },
        {
          srcset: packTablet2x,
          src: packTablet1x,
          width: '709',
          height: '609',
          alt: 'Упаковка корма Cat Energy',
          class: 'promo__pack promo__pack--tablet',
        },
        {
          srcset: packDesktop2x,
          src: packDesktop1x,
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
    margin-bottom: 22px;

    @media (min-width: 768px) {
      align-items: flex-start;
      padding-bottom: 526px;
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
      padding-bottom: 188px;
      margin-bottom: 80px;
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
        padding-top: 52px;
        padding-left: 87px;
        position: relative;
      }

      @media (min-width: 1440px) {
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
        margin-bottom: 39px;
        font-size: 60px;
        line-height: 60px;
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
      background-color: var(--color-primary);
      z-index: -1;

      @media (min-width: 768px) {
        width: auto;
        background-color: transparent;
      }

      @media (min-width: 1440px) {
        width: 50%;
        min-width: unset;
        height: 696px;
        position: absolute;
        top: 0;
        right: 20px;
        background-color: var(--color-primary);
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
