<template>
  <section class="special">
    <h2 class="special__title">
      Как это работает
    </h2>
    <ul>
      <SpecialItems></SpecialItems>
    </ul>
  </section>
</template>

<script>
import SpecialItems from "@/components/Special/components/SpecialItems.vue";

export default {
  name: "Special",
  components: {SpecialItems}
}
</script>

<style scoped>

</style>