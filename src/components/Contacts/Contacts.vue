<template>
  <section class="contacts">
    <div class="contacts__data">
      <p class="contacts__invite">
        Приглашаем к&nbsp;сотрудничеству дилеров!
      </p>
      <p class="contacts__address">
        ул. Большая Конюшенная, д. 19/8
        <span class="contacts__city">
          Санкт-Петербург
        </span>
      </p>
    </div>
    <ContactsMap class="contacts__map">
    </ContactsMap>
  </section>
</template>

<script>
  import ContactsMap from '@/components/Contacts/components/ContactsMap.vue';

  export default {
    name: 'Contacts',
    components: {ContactsMap},
  };
</script>

<style lang="scss" scoped>
  .contacts {
    padding-top: 28px;

    @media (min-width: 768px) {
      padding-top: 63px;
    }

    @media (min-width: 1440px) {
      position: relative;
      padding-top: 0;
    }

    &__data {
      display: flex;
      width: 100%;
      margin-bottom: 26px;

      @media (min-width: 768px) {
        justify-content: space-between;
        padding-left: 41px;
        padding-right: 41px;
        margin-bottom: 58px;
      }

      @media (min-width: 1440px) {
        width: 46.7%;
        position: absolute;
        top: 94px;
        left: 0;
        background-color: var(--color-white);
        padding-top: 63px;
        padding-left: 76px;
        margin-bottom: 0;
        z-index: 2;
      }
    }

    &__invite {
      width: 50%;
      line-height: 20px;
      text-transform: uppercase;

      @media (min-width: 768px) {
        width: 30%;
        font-size: 20px;
        line-height: 26px;
      }

      @media (min-width: 1440px) {
        width: 50%;
        margin-right: 96px;
      }
    }

    &__address {
      width: 50%;
      font-family: var(--font-family-additional);
      font-size: 14px;
      line-height: 20px;

      @media (min-width: 768px) {
        display: flex;
        width: 27%;
        min-height: 80px;
        flex-direction: column;
        justify-content: space-between;
        text-align: right;
        align-items: flex-end;
        font-size: 16px;
      }

      @media (min-width: 1440px) {
        width: 50%;
        align-items: flex-start;
        margin-right: 48px;
        margin-bottom: 58px;
        text-align: left;
      }
    }
  }
</style>