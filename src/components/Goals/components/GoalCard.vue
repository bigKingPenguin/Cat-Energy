<template>
  <li class="goals__item">
    <Svg
      :name="props.goalCard.iconName"
      width="67"
      height="53"
      class="goals__logo"
    >
    </Svg>
    <h2 class="goals__header">
      {{ props.goalCard.title }}
    </h2>
    <p class="goals__description">
      {{ props.goalCard.description }}
    </p>
    <Button
      href="#"
      className="goals__button button--ghost"
      :content="props.goalCard.button"
      iconName="arrow"
      iconWidth="32"
      iconHeight="12"
    >
    </Button>
  </li>
</template>

<script>
  import Arrow from '@/components/icons/Arrow.vue';
  import Svg from '@/components/common/Svg.vue';
  import Button from '@/components/common/Button.vue';

  export default {
    name: 'GoalCard',
    components: {Arrow, Svg, Button},
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

<style lang="scss" scoped>
  .goals {
    &__item {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      background-color: var(--color-secondary);
      margin-bottom: 18px;
      padding: 20px 20px 12px 20px;
      position: relative;

      @media (min-width: 768px) {
        padding: 77px 53px 52px;
        margin-bottom: 30px;
      }

      @media (min-width: 1440px) {
        width: 46.7%;
      }
    }

    &__header {
      margin-left: 71px;
      margin-top: 15px;
      margin-bottom: 33px;
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      text-transform: uppercase;

      @media (min-width: 768px) {
        margin-left: 0;
        margin-top: 0;
        margin-bottom: 24px;
        font-size: 36px;
        line-height: 36px;
        max-width: 65%;
      }

      @media (min-width: 1440px) {
        margin-left: 161px;
        margin-bottom: 74px;
      }
    }

    &__description {
      padding-bottom: 20px;
      margin-bottom: 8px;
      font-family: "Arial", sans-serif;
      font-size: 14px;
      line-height: 18px;
      border-bottom: 2px solid var(--color-border);

      @media (min-width: 768px) {
        width: 57%;
        margin-bottom: 47px;
        padding: 0;
        font-size: 16px;
        line-height: 24px;
        border-bottom: none;
      }

      @media (min-width: 1440px) {
        width: 100%;
        margin-bottom: 22px;
      }
    }

    &__logo {
      position: absolute;
      top: 20px;
      left: 13px;

      @media (min-width: 768px) {
        width: 268px;
        height: 211px;
        top: 83px;
        left: unset;
        right: 29px;
      }

      @media (min-width: 1440px) {
        width: 134px;
        height: 106px;
        top: 42px;
        left: 32px;
        right: unset;
      }
    }
  }
</style>
