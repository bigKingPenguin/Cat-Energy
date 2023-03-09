<template>
  <section class="example">
    <div class="example__wrapper">
      <h2 class="example__title">
        Живой пример
      </h2>
      <p class="example__description">
        Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без
        изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
      </p>
      <div class="example__statistics-wrapper">
        <ul class="example__statistics statistics">
          <ExampleStatistics
            v-for="stat in statistics"
            :key="stat.num"
            :statItem="stat"
          >
          </ExampleStatistics>
        </ul>
        <p class="example__cost">
          <span class="example__text">
                Затраты на питание:
          </span>
          <span class="example__text">
            15 000 руб.
          </span>
        </p>
      </div>
    </div>
    <ExampleSlider class="example__slider"></ExampleSlider>
  </section>
</template>

<script>
  import ExampleStatistics from '@/components/Example/components/ExampleStatistics.vue';
  import ExampleSlider from '@/components/Example/components/ExampleSlider.vue';

  export default {
    name: 'Example',
    components: {ExampleSlider, ExampleStatistics},
    setup() {
      const statistics = [
        {
          num: '5 кг',
          legend: 'снижение веса',
        },
        {
          num: '60 дней',
          legend: 'затрачено времени',
        },
      ];
      return {
        statistics,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .example {
    background-color: var(--color-special);
    margin-right: calc(-1 * var(--padding-mobile));
    margin-left: calc(-1 * var(--padding-mobile));
    padding: 27px var(--padding-mobile) 22px;

    @media (min-width: 768px) {
      background-color: transparent;
      margin-right: calc(-1 * var(--padding-tablet));
      margin-left: calc(-1 * var(--padding-tablet));
      padding: 43px var(--padding-tablet) 0;
      border-top: 1px solid var(--color-special);
    }

    @media (min-width: 1440px) {
      display: flex;
      justify-content: space-between;
      border-top: none;
      background-image: linear-gradient(to bottom, var(--color-white) 0%, var(--color-white) 29.5%, var(--color-special) 29.5%, var(--color-special) 100%);
      margin-right: calc(-1 * var(--padding-desktop));
      margin-left: calc(-1 * var(--padding-desktop));
      padding: 0 var(--padding-desktop);
    }

    &__wrapper {

      @media (min-width: 1440px) {
        width: 36%;
        padding-top: 58px;
      }
    }

    &__title {
      font-size: 36px;
      line-height: 40px;
      font-weight: 400;
      margin-bottom: 34px;

      @media (min-width: 768px) {
        font-size: 60px;
        line-height: 60px;
        margin-bottom: 64px;
      }

      @media (min-width: 1440px) {
        margin-bottom: 146px;
      }
    }

    &__description {
      font-family: var(--font-family-additional);
      font-size: 14px;
      line-height: 18px;
      color: var(--color-special-dark);
      margin-bottom: 24px;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 53px;
      }

      @media (min-width: 1440px) {
        margin-bottom: 69px;
      }
    }

    &__statistics-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 25px;
      }

      @media (min-width: 1440px) {
        flex-direction: column;
        margin-bottom: 0;
      }
    }

    &__statistics {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12.14%;
      max-width: 366px;
      margin-bottom: 9px;

      @media (min-width: 768px) {
        justify-content: flex-start;
        max-width: 70%;
        gap: unset;
      }

      @media (min-width: 1440px) {
        max-width: unset;
        margin-bottom: 33px;
      }
    }

    &__cost {
      text-transform: uppercase;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 39px;

      @media (min-width: 768px) {
        display: flex;
        width: 30%;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 10px;
      }

      @media (min-width: 1440px) {
        margin-bottom: 65px;
        flex-direction: row;
        width: 100%;
      }
    }

    &__text {

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
        text-align: right;
      }

      @media (min-width: 1440px) {
        margin-right: 64px;
      }
    }
  }
</style>