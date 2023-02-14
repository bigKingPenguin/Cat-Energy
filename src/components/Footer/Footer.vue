<template>
  <footer class="footer">
    <LogoName class="footer__logo"></LogoName>
    <ul class="footer__social social">
      <FooterSocial
        v-for="link in social"
        :key="link.name"
        :SocIcon="link"
      >
      </FooterSocial>
    </ul>
    <div class="footer__copyright copyright">
      <a href="https://htmlacademy.ru/study" class="copyright__name">
        HTML Academy
      </a>
      <a href="https://htmlacademy.ru/study" class="copyright__logo">
        <LogoHtml></LogoHtml>
      </a>
    </div>
  </footer>
</template>

<script>
import LogoName from '@/components/icons/LogoName.vue';
import FooterSocial from '@/components/Footer/components/FooterSocial.vue';
import LogoHtml from '@/components/icons/LogoHtml.vue';

export default {
  name: 'Footer',
  components: {LogoHtml, FooterSocial, LogoName},
  setup() {
    const social = [
      {
        name: 'vk',
        icon: 'IconVk',
        link: 'https://vk.com/',
      },
      {
        name: 'inst',
        icon: 'IconInst',
        link: 'https://www.instagram.com/',
      },
      {
        name: 'fb',
        icon: 'IconFb',
        link: 'https://www.facebook.com/',
      },
    ];
    return {
      social,
    };
  },
};
</script>

<style scoped>

</style>
