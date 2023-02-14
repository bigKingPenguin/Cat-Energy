<template>
  <li class="goals__item">
    <component
      :is="props.goalCard.iconName"
      class="goals__logo"
    >
    </component>
    <h2 class="goals__header">
      {{ props.goalCard.title }}
    </h2>
    <p class="goals__description">
      {{ props.goalCard.description }}
    </p>
    <a
      href="#"
      class="button button--ghost"
    >
      {{ props.goalCard.button }}
      <Arrow class="button__arrow"></Arrow>
    </a>
  </li>
</template>

<script>
import Arrow from '@/components/icons/Arrow.vue';
import CatWeightGain from '@/components/icons/CatWeightGain.vue';
import CatWeightLoss from '@/components/icons/CatWeightLoss.vue';

export default {
  name: 'GoalCard',
  components: {Arrow, CatWeightGain, CatWeightLoss},
  props: {
    goalCard: {
      type: Object,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>

</style>
