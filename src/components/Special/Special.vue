<template>
  <section class="special">
    <h2 class="special__title">
      Как это работает
    </h2>
    <ul>
      <SpecialItems
        v-for="spec in specialItems"
        :key="spec.iconName"
        :specItem="spec"
      >
      </SpecialItems>
    </ul>
  </section>
</template>

<script>
import SpecialItems from '@/components/Special/components/SpecialItems.vue';

export default {
  name: 'Special',
  components: {SpecialItems},
  setup() {
    const specialItems = [
      {
        iconName: 'IconLeaf',
        description: 'Функциональное питание содержит только полезные питательные вещества.',
      },
      {
        iconName: 'IconSolution',
        description: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
      },
      {
        iconName: 'IconCutlery',
        description: 'Замените один-два приема обычной еды на наше функциональное питание.',
      },
      {
        iconName: 'IconClock',
        description: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!',
      },
    ];
    return {
      specialItems,
    };
  },
};
</script>

<style scoped>

</style>
