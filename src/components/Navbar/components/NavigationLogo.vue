<template>
  <a
    class="logo"
    href="#"
  >
    <Svg
      name="logo-mobile"
      width="34"
      height="38"
      class="logo__mobile"
    >
    </Svg>
    <Svg name="logo-tablet"
         width="174"
         height="52"
         class="logo__tablet">
    </Svg>
    <Svg
      name="logo-desktop"
      width="202"
      height="59"
      class="logo__desktop">
    </Svg>
  </a>
</template>

<script>
  import Svg from '@/components/common/Svg.vue';

  export default {
    name: 'NavigationLogo',
    components: {Svg},
  };
</script>

<style lang="scss" scoped>

  .logo {
    justify-content: space-between;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }

    &__mobile {
      @media (min-width: 768px) {
        display: none;
      }
    }

    &__tablet {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
      @media (min-width: 1440px) {
        display: none;
      }
    }

    &__desktop {
      display: none;

      @media (min-width: 1440px) {
        display: block;
      }
    }
  }
</style>
