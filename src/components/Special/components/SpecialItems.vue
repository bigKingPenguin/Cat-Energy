<template>
  <li class="special__item">
    <Svg
      :name="props.specItem.iconName"
      width="60"
      height="60"
      class="special__icon"
    >
    </Svg>
    <p class="special__description">
      {{ props.specItem.description }}
    </p>
    <span class="special__index">
      {{ props.specIndex }}
    </span>
  </li>
</template>

<script>
  import Svg from '@/components/common/Svg.vue';


  export default {
    name: 'SpecialItems',
    components: {Svg},
    props: {
      specItem: {
        type: Object,
      },
      specIndex: {
        type: [Number, String],
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
  .special {

    &__item {
      display: flex;
      width: 100%;
      margin-bottom: 20px;

      @media (min-width: 768px) {
        position: relative;
        flex-direction: column;
        width: 45.76%;
        min-height: 305px;
        padding-top: 40px;
        padding-bottom: 57px;
        padding-right: 108px;
        margin-bottom: 12px;
      }

      @media (min-width: 1440px) {
        width: 20.08%;
        min-height: unset;
        padding-right: 0;
      }
    }

    &__icon {
      min-width: 60px;
      margin-right: 20px;
      align-self: center;

      @media (min-width: 768px) {
        width: 80px;
        height: 80px;
        min-width: unset;
        align-self: flex-start;
        margin-right: 0;
        margin-bottom: 31px;
      }
    }

    &__description {
      font-family: var(--font-family-additional);
      font-size: 14px;
      line-height: 18px;
      align-self: center;

      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__index {
      display: none;

      @media (min-width: 768px) {
        display: block;
        position: absolute;
        top: 129px;
        right: 86px;
        z-index: -1;
        font-size: 280px;
        color: var(--color-secondary);
      }

      @media (min-width: 1440px) {
        right: 6px;
      }
    }
  }
</style>
