<template>
  <header>
    <navigation-logo class="logo"></navigation-logo>
<!--    TODO: переименовать в "открыть/закрыть меню" при автоматизации-->
    <button class="button button--navigation">Переключить меню</button>
    <navigation-list class="navigation"></navigation-list>
  </header>
</template>

<script>
import NavigationLogo from "@/components/Navbar/components/NavigationLogo.vue";
import NavigationList from "@/components/Navbar/components/NavigationList.vue";

export default {
  name: "Navbar",
  components: {NavigationList, NavigationLogo}
}
</script>

<style lang="scss" scoped>

</style>