<template>
  <div class="slider">
    <div class="slider__img img">
      <transition
        v-if="isMobile"
        name="switch-img"
        mode="out-in"
      >
        <img
          srcset="@/assets/img/example/before-mobile@2x.png 2x"
          src="@/assets/img/example/before-mobile@1x.png"
          width="311"
          height="232"
          class="img__before img__before--mobile"
          alt="Толстый кот"
          v-if="rangeValue <= 50"
          key="before"
        >
        <img
          srcset="@/assets/img/example/after-mobile@2x.png 2x"
          src="@/assets/img/example/after-mobile@1x.png"
          width="251"
          height="240"
          class="img__after img__after--mobile"
          alt="Стройный кот"
          v-else
          key="after"
        >
      </transition>
      <div
        class="img__wrapper img__wrapper--before"
        v-if="!isMobile"
      >
        <img
          srcset="@/assets/img/example/cat-fat@2x.png 2x"
          src="@/assets/img/example/cat-fat@1x.png"
          width="677"
          height="520"
          class="img__before img__before--tablet"
          alt="Толстый кот"
        >
      </div>
      <div
        class="img__wrapper img__wrapper--after"
        v-if="!isMobile"
        :style="`width: ${rangeValue}%`"
      >
        <img
          srcset="@/assets/img/example/cat-skinny@2x.png 2x"
          src="@/assets/img/example/cat-skinny@1x.png"
          width="545"
          height="520"
          class="img__after img__after--tablet"
          alt="Стройный кот"
        >
      </div>
    </div>
    <div
      class="slider__control"
      @click="toggleImage"
    >
      <span class="slider__text">
        Было
      </span>
      <span
        class="slider__indicator"
        :class="{'slider__indicator--right': rangeValue > 50}"
      >
      </span>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        name="range"
        class="slider__range"
        v-model="rangeValue"
      >
      <span class="slider__text">
        Стало
      </span>
    </div>
  </div>
</template>

<script>
  import {onBeforeUnmount, onMounted, ref} from 'vue';

  export default {
    name: 'ExampleSlider',
    setup() {
      const rangeValue = ref(0);
      const toggleImage = () => {
        if (!isMobile) return;
        rangeValue.value = rangeValue.value === 0 ? 100 : 0;
      };

      const isMobile = ref(true);
      const onResize = () => {
        isMobile.value = window.innerWidth < 768;
      };
      onMounted(() => {
        window.addEventListener('resize', onResize);
        onResize();
      });

      onBeforeUnmount(() => {
        window.removeEventListener('resize', onResize);
      });
      return {
        rangeValue, toggleImage, isMobile,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .slider {
    min-height: 290px;
    transform: translateZ(0);

    @media (min-width: 768px) {
      position: relative;
      min-height: unset;
      margin-right: calc(-1 * var(--padding-tablet));
      margin-left: calc(-1 * var(--padding-tablet));
      padding: 0 var(--padding-tablet);
      background-image: linear-gradient(to bottom, var(--color-white) 0%, var(--color-white) 28%, var(--color-special) 28%, var(--color-special) 100%);
    }

    @media (min-width: 1440px) {
      width: 51%;
      height: inherit;
      background-image: none;
      margin: 0;
      padding: 0;
    }

    &__control {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        justify-content: center;
        position: absolute;
        top: 544px;
        left: 0;
        width: 100%;
      }

      @media (min-width: 1440px) {
        top: 556px;
        left: 25px;
      }
    }

    &__text {
      padding: 12px 18px;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        border-bottom: 1px dotted var(--color-special-2);
        padding: 2px 0;
        margin-left: 24px;
        margin-right: 24px;
      }
    }

    &__indicator {
      display: block;
      position: relative;
      min-width: 84px;
      width: 20%;
      height: 14px;
      background-color: var(--color-white);
      border: 1px solid var(--color-special-2);
      border-radius: 6px;

      @media (min-width: 768px) {
        display: none;
      }

      &::after {
        content: "";
        display: block;
        width: 41.67%;
        height: 6px;
        position: absolute;
        top: 3px;
        left: 6px;
        background-color: var(--color-primary);
        border-radius: 6px;
        transition: left 0.3s ease;
      }

      &--right {
        &::after {
          left: calc(100% - 41.67% - 6px);
        }
      }
    }

    &__range {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        position: relative;
        width: 428px;
        background-color: transparent;
        appearance: none;
        cursor: grab;

        &::before {
          content: "";
          position: absolute;
          top: 12px;
          width: 428px;
          height: 6px;
          background-color: var(--color-border);
          border-radius: 6px;
        }

        &::-webkit-slider-runnable-track {
          appearance: none;
        }

        &::-moz-range-track {
          appearance: none;
        }

        &::-webkit-slider-thumb {
          appearance: none;
          width: 30px;
          height: 30px;
          background-color: var(--color-primary);
          border: 10px solid var(--color-white);
          outline: 1px solid var(--color-border);
          border-radius: 50%;
          filter: drop-shadow(0 1px 3px var(--color-border));
        }

        &::-moz-range-thumb {
          appearance: none;
          width: 30px;
          height: 30px;
          background-color: var(--color-primary);
          border: 10px solid var(--color-white);
          outline: 1px solid var(--color-border);
          border-radius: 50%;
          filter: drop-shadow(0 1px 3px var(--color-border));
        }
      }
    }
  }

  .img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 240px;
    margin-bottom: 13px;

    @media (min-width: 768px) {
      max-width: 708px;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      min-height: unset;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 138px;
      padding-top: 505px;
      margin-bottom: 0;
    }

    @media (min-width: 1440px) {
      margin: 0;
      height: 100%;
    }

    &__wrapper {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 530px;
        position: absolute;
        top: 0;

        &--before {
          width: 100%;
          z-index: -1;
        }

        &--after {
          background-image: linear-gradient(to bottom, var(--color-white) 0%, var(--color-white) 34%, var(--color-special) 34%, var(--color-special) 100%);

          @media (min-width: 1440px) {
            height: 100%;
            background-image: linear-gradient(to bottom, var(--color-white) 0%, var(--color-white) 29.5%, var(--color-special) 29.5%, var(--color-special) 100%);
          }
        }
      }
    }

    &__before {

      @media (min-width: 768px) {
        display: none;
      }

      &--tablet {
        display: none;

        @media (min-width: 768px) {
          display: block;
          position: absolute;
          top: 9px;
          right: 15px;
        }

        @media (min-width: 1440px) {
          top: 1px;
          right: -27px;
        }
      }
    }

    &__after {

      @media (min-width: 768px) {
        display: none;
      }

      &--tablet {
        display: none;

        @media (min-width: 768px) {
          display: block;
          position: absolute;
          top: 9px;
          right: 56px;
        }

        @media (min-width: 1440px) {
          top: 0;
          right: 14px;
        }
      }
    }
  }

  .switch-img-enter-active, .switch-img-leave-active {
    transition: opacity 0.3s
  }

  .switch-img-enter-from, .switch-img-leave-to {
    opacity: 0
  }
</style>