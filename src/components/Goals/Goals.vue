<template>
  <section
      class="goals"
      aria-label="Выберите программу питания"
  >
    <ul>
      <GoalCard
          v-for="card in goalCards"
          :key="card.svgName"
          :goalCard="card"
      >
      </GoalCard>
    </ul>
  </section>
</template>

<script>

import GoalCard from "@/components/Goals/components/GoalCard.vue";

export default {
  name: "Goals",
  components: {GoalCard},
  setup() {
    const goalCards = [
      {
        svgName: "CatWeightLoss",
        title: "Похудение",
        description: "Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.",
        button: "Каталог slim"
      },
      {
        svgName: "CatWeightGain",
        title: "Набор массы",
        description: "Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!",
        button: "Каталог pro"
      }
    ]
    return {
      goalCards
    }
  }
}
</script>

<style scoped>

</style>