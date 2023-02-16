<template>
  <header class="header">
    <NavigationLogo class="logo"></NavigationLogo>
    <LogoName class="logo__name"></LogoName>
    <button
      @click="navbarToggle"
      class="button button--navigation"
    >
      <span class="visually-hidden">
        {{ navbarIsOpen ? 'Закрыть меню' : 'Открыть меню' }}
      </span>
      <NavbarBurger
        :class="{
         'burger--cross': !navbarIsOpen
       }"
      >
      </NavbarBurger>
    </button>
    <NavigationList
      class="navigation"
      :class="{
           'navigation--hidden': navbarIsOpen
          }"
    >
    </NavigationList>
  </header>
</template>

<script>
  import {ref} from 'vue';
  import NavigationLogo from '@/components/Navbar/components/NavigationLogo.vue';
  import NavigationList from '@/components/Navbar/components/NavigationList.vue';
  import NavbarBurger from '@/components/Navbar/components/NavbarBurger.vue';
  import LogoName from '@/components/icons/LogoName.vue';

  export default {
    name: 'Navbar',
    components: {NavbarBurger, NavigationList, NavigationLogo, LogoName},
    setup() {
      const navbarIsOpen = ref(false);
      const navbarToggle = () => {
        navbarIsOpen.value = !navbarIsOpen.value;
      };
      return {
        navbarIsOpen, navbarToggle,
      };
    },

  };
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: var(--color-white);

    @media (min-width: 768px) {
      position: absolute;
      width: calc(100% - var(--padding-tablet) * 2);
      left: var(--padding-tablet);
      padding-top: 0;
      padding-bottom: 0;
      top: 24px;
      background-color: transparent;
    }

    @media (min-width: 1440px) {
      width: calc(100% - var(--padding-desktop) * 2);
      left: var(--padding-desktop);
      top: 58px;
    }
  }

  .navigation {
    position: absolute;
    top: var(--header-mobile-height);
    left: calc(-1 * var(--padding-mobile));
    display: flex;
    width: calc(100% + 2 * var(--padding-mobile));
    transition: transform 0.6s ease;
    z-index: -1;

    &--hidden {
      transform: translateY(-1000px);
    }

    @media (min-width: 768px) {
      z-index: 1;
      position: static;
    }

  }

  .button--navigation {
    @media (min-width: 768px) {
      display: none;
    }
  }

  .logo {
    &__name {
      @media (min-width: 768px) {
        display: none;
      }
    }

    @media (min-width: 768px) {
      margin-right: 44px;
    }
  }
</style>
