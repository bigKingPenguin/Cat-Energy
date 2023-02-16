<template>
  <div class="page">
    <Navbar></Navbar>
    <Promo></Promo>
    <!--    <Goals></Goals>-->
    <!--    <Special></Special>-->
    <!--    <Footer></Footer>-->
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar/Navbar.vue';
  import Promo from '@/components/Promo/Promo.vue';
  // import Goals from '@/components/Goals/Goals.vue';
  // import Special from '@/components/Special/Special.vue';
  // import Footer from '@/components/Footer/Footer.vue';
</script>
<style lang="scss" scoped>
  //ретина @media (min-resolution: 2dppx)
  .page {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: var(--padding-mobile);
    padding-right: var(--padding-mobile);

    @media (min-width: 768px) {
      padding-left: var(--padding-tablet);
      padding-right: var(--padding-tablet);
    }

    @media (min-width: 1440px) {
      padding-left: var(--padding-desktop);
      padding-right: var(--padding-desktop);
    }
  }
</style>
