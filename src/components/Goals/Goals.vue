<template>
  <section
      class="goals"
      aria-label="Выберите программу питания"
  >
    <GoalCard></GoalCard>
  </section>
</template>

<script>

import GoalCard from "@/components/Goals/components/GoalCard.vue";

export default {
  name: "Goals",
  components: {GoalCard},
}
</script>

<style scoped>

</style>