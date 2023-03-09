<template>
  <component
    class="button"
    :is="props.href ? 'a' : 'button'"
    :class="props.className"
    :href="props.href"
    :type="!props.href ? props.action : null"
  >
    <span>
      {{ props.content }}
    </span>
    <span
      v-if="props.iconName"
      class="button__icon"
    >
      <Svg
        :name="props.iconName"
        :width="props.iconWidth"
        :height="props.iconHeight"
      >
      </Svg>
    </span>
  </component>

</template>

<script>
  import Svg from '@/components/common/Svg.vue';

  export default {
    name: 'Button',
    components: {Svg},
    props: {
      href: {
        type: String,
        default: '',
      },
      className: {
        type: String,
        default: '',
      },
      action: {
        type: String,
        default: 'button',
      },
      content: {
        type: String,
        default: '',
      },
      iconName: {
        type: String,
        default: '',
      },
      iconWidth: {
        type: [Number, String],
      },
      iconHeight: {
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
  .button {
    display: flex;
    width: max-content;
    min-height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    padding: 10px 26px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 18px;
      padding: 18px 27px;
    }

    @media (min-width: 1440px) {
      font-size: 20px;
      line-height: 18px;
      padding: 18px 27px;
    }

    &--green {
      background-color: var(--color-primary);
      color: var(--color-white);

      &:hover {
        background-color: var(--color-primary-dark);
      }

      &:active {
        background-color: var(--color-primary-dark);

        & > span {
          opacity: 0.3;
        }
      }
    }

    &--ghost {
      justify-content: space-between;
      font-size: 16px;
      line-height: 16px;
      padding: 0;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 20px;
      }

      &:active {
        & > span {
          opacity: 0.3;
        }
      }
    }

    &__icon {
      margin-left: 14px;
      vertical-align: middle;
      line-height: 0;

      @media (min-width: 768px) {
        margin-left: 25px;
      }
    }
  }
</style>