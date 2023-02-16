<template>
  <a
    class="logo"
    href="#"
  >
    <LogoMobile class="logo__mobile"></LogoMobile>
    <LogoTablet class="logo__tablet"></LogoTablet>
    <LogoDesktop class="logo__desktop"></LogoDesktop>
  </a>
</template>

<script>
  import LogoMobile from '@/components/icons/LogoMobile.vue';
  import LogoName from '@/components/icons/LogoName.vue';
  import LogoTablet from '@/components/icons/LogoTablet.vue';
  import LogoDesktop from '@/components/icons/LogoDesktop.vue';

  export default {
    name: 'NavigationLogo',
    components: {LogoDesktop, LogoTablet, LogoName, LogoMobile},
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
