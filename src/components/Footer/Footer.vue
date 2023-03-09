<template>
  <footer class="footer">
    <div class="footer__logo">
      <Svg
        name="logo-name"
        width="128"
        height="24"
      >
      </Svg>
    </div>
    <ul class="footer__social social">
      <FooterSocial
        v-for="link in social"
        :key="link.name"
        :socIcon="link"
      >
      </FooterSocial>
    </ul>
    <div class="footer__copyright copyright">
      <a href="https://htmlacademy.ru/study" class="copyright__link">
        <span class="copyright__name">
          HTML Academy
        </span>
        <span class="copyright__logo">
          <Svg
            name="logo_html"
            width="27"
            height="34"
            class="copyright__svg"
          >
        </Svg>
        </span>
      </a>
    </div>
  </footer>
</template>

<script>
  import Svg from '@/components/common/Svg.vue';
  import FooterSocial from '@/components/Footer/components/FooterSocial.vue';

  export default {
    name: 'Footer',
    components: {FooterSocial, Svg},
    setup() {
      const social = [
        {
          name: 'vk',
          icon: 'icon_vk',
          link: 'https://vk.com/',
        },
        {
          name: 'inst',
          icon: 'icon_inst',
          link: 'https://www.instagram.com/',
        },
        {
          name: 'fb',
          icon: 'icon_fb',
          link: 'https://www.facebook.com/',
        },
      ];
      return {
        social,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: calc(-1 * var(--padding-mobile));
    margin-right: calc(-1 * var(--padding-mobile));
    padding: 40px var(--padding-mobile) 22px;
    background-color: var(--color-secondary);

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      margin-left: calc(-1 * var(--padding-tablet));
      margin-right: calc(-1 * var(--padding-tablet));
      padding: 52px var(--padding-tablet);
    }

    @media (min-width: 1440px) {
      margin-left: calc(-1 * var(--padding-desktop));
      margin-right: calc(-1 * var(--padding-desktop));
      padding: 56px var(--padding-desktop);
    }

    &__logo {
      width: 128px;
      height: 24px;
      margin-bottom: 31px;

      @media (min-width: 768px) {
        width: 30%;
        margin-bottom: unset;
      }
    }

    &__social {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding-top: 20px;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);

      @media (min-width: 768px) {
        padding-top: 0;
        border: none;
        width: 40%;
      }
    }
  }

  .copyright {
    width: 100%;
    padding-top: 22px;

    @media (min-width: 768px) {
      width: 30%;
      padding-top: 0;
    }

    &__link {
      display: flex;
      width: 100%;
      justify-content: space-between;

      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    }

    &__name {
      font-family: var(--font-family-additional);
      color: var(--color-special-dark);
      padding-top: 4px;

      @media (min-width: 768px) {
        margin-right: 22px;
      }
    }
  }
</style>
