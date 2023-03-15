<template>
  <li class="social__item">
    <a
      class="social__link"
      :href="props.socIcon.link"
    >
      <Svg
        :name="props.socIcon.icon"
        width="23"
        height="22"
        class="social__icon"
      >
      </Svg>
    </a>
  </li>
</template>

<script>

  import Svg from '@/components/common/Svg.vue';

  export default {
    name: 'FooterSocial',
    components: {Svg},
    props: {
      socIcon: {
        type: Object,
      },
    },
    setup(props) {
      return {
        props,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .social {
    &__item {
      margin-left: 5.43%;
      margin-right: 5.43%;
      margin-bottom: 15px;

      @media (min-width: 768px) {
        margin-left: 2.43%;
        margin-right: 4.43%;
        margin-bottom: 5px;
      }

      @media (min-width: 1440px) {
        margin-left: 1.43%;
        margin-right: 2.43%;
      }
    }

    &__link {
      display: block;
      line-height: 0;
    }

    &__icon {
      color: var(--color-special-3);
      width: 23px;
      height: 22px;

      @media (min-width: 768px) {
        width: 30px;
        height: 33px;
      }

      &:hover {
        color: var(--color-primary);
      }

      &:active {
        color: var(--color-primary);
        opacity: 0.3;
      }
    }
  }
</style>