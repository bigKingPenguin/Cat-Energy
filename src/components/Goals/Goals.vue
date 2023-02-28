<template>
  <section
    aria-label="Выберите программу питания"
  >
    <ul class="goals">
      <GoalCard
        v-for="card in goalCards"
        :key="card.iconName"
        :goalCard="card"
      >
      </GoalCard>
    </ul>
  </section>
</template>

<script>

  import GoalCard from '@/components/Goals/components/GoalCard.vue';

  export default {
    name: 'Goals',
    components: {GoalCard},
    setup() {
      const goalCards = [
        {
          iconName: 'cat_weight-loss',
          title: 'Похудение',
          description: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
          button: 'Каталог slim',
        },
        {
          iconName: 'cat_weight-gain',
          title: 'Набор массы',
          description: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
          button: 'Каталог pro',
        },
      ];
      return {
        goalCards,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .goals {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: 1440px) {
      flex-direction: row;
      justify-content: center;
      gap: 6.6%;
    }
  }
</style>
