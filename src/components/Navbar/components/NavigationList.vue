<template>
  <nav
    class="navigation"
    aria-label="Меню навигации"
  >
    <ul class="navigation__list">
      <li class="navigation__item">
        <a
          href="#"
          class="navigation__link"
        >
          Главная
        </a>
      </li>
      <li class="navigation__item">
        <a
          href="#"
          class="navigation__link"
        >
          Каталог продукции
        </a>
      </li>
      <li class="navigation__item">
        <a
          href="#"
          class="navigation__link"
        >
          Подбор программы
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NavigationList',
  };
</script>

<style lang="scss" scoped>
  .navigation {
    &__list {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
      }
    }

    &__item {
      display: flex;
      width: 100%;
      justify-content: center;
      border-top: 1px solid var(--color-border);
      padding-top: 20px;
      padding-bottom: 20px;

      @media (min-width: 768px) {
        border: none;
        padding-top: 10px;
        padding-bottom: 0px;
        width: max-content;
        margin-left: 36px;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    &__item:last-child {
      border-bottom: 1px solid var(--color-border);

      @media (min-width: 768px) {
        border: none;
      }
    }

    &__link {
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 18px;
        font-weight: 400;
        padding-bottom: 12px;

        //TODO: Можно сделать анимацию
        &:hover {
          opacity: 0.6;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--color-black);
        }

        &:active {
          padding-bottom: 10px;
          border-bottom: 2px solid var(--color-primary);
        }
      }

      @media (min-width: 1440px) {
        font-size: 20px;
        color: var(--color-white);

        &:hover {
          opacity: 0.6;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--color-white);
        }

        &:active {
          opacity: 1;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--color-white);
        }
      }
    }
  }
</style>
