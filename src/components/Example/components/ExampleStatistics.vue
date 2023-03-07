<template>
  <li class="statistics__item">
    <span class="statistics__number">
      {{ props.statItem.num }}
    </span>
    <span class="statistics__legend">
      {{ props.statItem.legend }}
    </span>
  </li>
</template>

<script>
  export default {
    name: 'ExampleStatistics',
    props: {
      statItem: {
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

<style lang="scss" scoped>
  .statistics {
    &__item {
      display: flex;
      min-width: 125px;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid var(--color-special-2);
      border-radius: 3px;
      padding: 14px 0 16px;
      margin-bottom: 25px;

      @media (min-width: 768px) {
        min-width: 162px;
        margin-right: 42px;
        padding: 14px 0 19px;
        margin-bottom: 40px;
      }

      @media (min-width: 1440px) {
        margin-bottom: 16px;
      }
    }

    &__number {
      text-transform: uppercase;
      font-size: 24px;
      line-height: 24px;

      @media (min-width: 768px) {
        font-size: 30px;
        line-height: 37px;
      }
    }

    &__legend {
      width: 88px;
      text-align: center;
      position: absolute;
      left: 50%;
      bottom: -16px;
      transform: translateX(-50%);
      background-color: var(--color-special);
      font-family: var(--font-family-additional);
      font-size: 12px;
      line-height: 12px;
      color: var(--color-special-dark);
      padding-left: 16px;
      padding-right: 16px;

      @media (min-width: 768px) {
        bottom: -6px;
        background-color: var(--color-white);
        font-size: 14px;
        line-height: 14px;
        padding-left: 8px;
        padding-right: 8px;
        min-width: max-content;
      }

      @media (min-width: 1440px) {
        background-color: var(--color-special);
      }
    }
  }
</style>