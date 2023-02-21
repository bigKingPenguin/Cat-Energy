<template>
  <header class="header">
    <div class="header__logo">
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
         'burger--cross': navbarIsOpen
       }"
        >
        </NavbarBurger>
      </button>
    </div>
    <NavigationList
      class="navigation"
      :class="{
           'navigation--hidden': !navbarIsOpen
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
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    @media (min-width: 768px) {
      padding-top: 13px;
      padding-bottom: 0;
    }

    @media (min-width: 1440px) {
      padding-top: 41px;
      width: 100%;
      background-color: transparent;
    }

    &__logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding-top: 11px;
      padding-bottom: 12px;
      background-color: var(--color-white);

      @media (min-width: 768px) {
        width: auto;
      }
    }
  }

  .navigation {
    position: absolute;
    top: var(--header-mobile-height);
    left: calc(-1 * var(--padding-mobile));
    display: flex;
    width: calc(100% + 2 * var(--padding-mobile));
    background-color: var(--color-white);
    transition: transform 0.6s ease;
    z-index: -1;

    &--hidden {
      transform: translateY(-300px);

      @media (min-width: 768px) {
        transform: none;
        transition: none;
      }
    }

    @media (min-width: 768px) {
      position: static;
      background-color: transparent;
      padding-top: 9px;
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
