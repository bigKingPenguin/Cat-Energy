<template>
  <a class="logo" href="#">
    <logo-mobile class="logo__mobile"></logo-mobile>
    <logo-name class="logo__name"></logo-name>
    <logo-tablet class="logo__tablet"></logo-tablet>
    <logo-desktop class="logo__desktop"></logo-desktop>
  </a>
</template>

<script>
import LogoMobile from "@/components/icons/LogoMobile.vue";
import LogoName from "@/components/icons/LogoName.vue";
import LogoTablet from "@/components/icons/LogoTablet.vue";
import LogoDesktop from "@/components/icons/LogoDesktop.vue";
export default {
  name: "NavigationLogo",
  components: {LogoDesktop, LogoTablet, LogoName, LogoMobile}
}
</script>

<style lang="scss" scoped>

</style>