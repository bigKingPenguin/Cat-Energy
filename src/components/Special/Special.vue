<template>
  <section class="special">
    <h2 class="special__title">
      Как это работает
    </h2>
    <ul class="special__list">
      <SpecialItems
        v-for="(spec, index) in specialItems"
        :key="spec.iconName"
        :specItem="spec"
        :specIndex="index + 1"
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
          iconName: 'icon_leaf',
          description: 'Функциональное питание содержит только полезные питательные вещества.',
        },
        {
          iconName: 'icon_solution',
          description: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
        },
        {
          iconName: 'icon_cutlery',
          description: 'Замените один-два приема обычной еды на наше функциональное питание.',
        },
        {
          iconName: 'icon_clock',
          description: 'Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!',
        },
      ];
      return {
        specialItems,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .special {
    padding-bottom: 12px;

    &__title {
      margin-bottom: 38px;
      font-size: 36px;
      font-weight: 400;
      line-height: 40px;

      @media (min-width: 768px) {
        margin-bottom: 32px;
        font-size: 60px;
        line-height: 60px;
      }
    }

    &__list {
      display: flex;
      width: 100%;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8.48%;
      }

      @media (min-width: 1440px) {
        gap: 6.55%;
      }
    }
  }
</style>
