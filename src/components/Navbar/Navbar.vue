<template>
  <header class="header">
    <div class="header__logo">
      <NavigationLogo class="logo"></NavigationLogo>
      <Svg
        name="logo-name"
        width="101"
        height="18"
        class="header__logo-name"
      >
      </Svg>
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
      class="header__navigation"
      :class="{
           'header__navigation--hidden': !navbarIsOpen
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
  import Svg from '@/components/common/Svg.vue';

  export default {
    name: 'Navbar',
    components: {Svg, NavbarBurger, NavigationList, NavigationLogo},
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
    width: calc(100% + 2 * var(--padding-mobile));
    margin-left: calc(-1 * var(--padding-mobile));
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    background-color: var(--color-white);

    @media (min-width: 768px) {
      width: 100%;
      margin-left: 0;
      padding-top: 13px;
      padding-bottom: 0;
    }

    @media (min-width: 1440px) {
      padding-top: 42px;
      background-color: transparent;
    }

    &__logo {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 11px var(--padding-mobile) 12px;
      background-color: var(--color-white);

      @media (min-width: 768px) {
        width: auto;
        padding-top: 11px;
        padding-left: 0;
      }
    }

    &__logo-name {
      @media (min-width: 768px) {
        display: none;
      }

      @media (min-width: 768px) {
        margin-right: 44px;
      }
    }

    &__navigation {
      position: absolute;
      top: var(--header-mobile-height);
      left: 0;
      display: flex;
      width: 100%;
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
        padding-top: 6px;
      }
    }
  }

  .button--navigation {
    @media (min-width: 768px) {
      display: none;
    }
  }
</style>
