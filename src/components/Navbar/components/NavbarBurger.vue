<template>
  <div
    class="burger"
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarBurger',
  };
</script>

<style lang="scss" scoped>
  .burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 8px;

    & > div {
      width: 100%;
      height: 2px;
      background-color: var(--color-text);
      margin-bottom: 6px;

      &:first-child {
        transition: transform 0.3s ease;
      }

      &:last-child {
        transition: transform 0.3s ease;
        margin-bottom: 0;
      }
    }

    &--cross {

      & > div {

        &:nth-child(2) {
          visibility: hidden;
        }

        &:first-child {
          transform: translateY(9px) rotate(45deg);
        }

        &:last-child {
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    }
  }
</style>