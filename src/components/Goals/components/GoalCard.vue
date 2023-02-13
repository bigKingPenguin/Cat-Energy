<template>
  <li
      class="goals__item"
      v-for="goal in goalCards"
      :key="goal.svgName"
  >
    <component
        :is="goal.svgName"
        class="goals__logo"
    >
    </component>
    <h2 class="goals__header">
      {{ goal.title }}
    </h2>
    <p class="goals__description">
      {{ goal.description }}
    </p>
    <a
        href="#"
        class="button button--ghost"
    >
      {{ goal.button }}
      <Arrow class="button__arrow"></Arrow>
    </a>
  </li>
</template>

<script>
import Arrow from "@/components/icons/Arrow.vue";
import CatWeightGain from "@/components/icons/CatWeightGain.vue";
import CatWeightLoss from "@/components/icons/CatWeightLoss.vue";

export default {
  name: "GoalCard",
  components: {Arrow, CatWeightGain, CatWeightLoss},
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