<template>
  <div
    class="map"
    :class="{'map__invisible-controls' : !isVisible && isDesktop}"
    @mouseenter="isVisible = true"
    @mouseleave="isVisible = false"
  >
    <img
      srcset="@/assets/img/contacts/location-mobile@2x.png 2x"
      src="@/assets/img/contacts/location-mobile@1x.png"
      width="320"
      height="362"
      class="map__img map__img--mobile"
      alt="Мы находимся по адресу: Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"
      v-if="isMobile"
    >
    <img
      srcset="@/assets/img/contacts/location-tablet@2x.png 2x"
      src="@/assets/img/contacts/location-tablet@1x.png"
      width="768"
      height="400"
      class="map__img map__img--tablet"
      alt="Мы находимся по адресу: Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"
      v-if="isTablet"
    >
    <img
      srcset="@/assets/img/contacts/location-desktop@2x.png 2x"
      src="@/assets/img/contacts/location-desktop@1x.png"
      width="1440"
      height="400"
      class="map__img map__img--desktop"
      alt="Мы находимся по адресу: Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"
      v-else
    >
    <GMapMap
      class="map__gmap"
      :center="centerPosition"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: inherit; min-width: 320px"
      :key="mapKey"
      aria-label="мы находимся по адресу: Санкт-Петербург, ул. Большая Конюшенная, д. 19/8"
    >
      <GMapMarker
        v-if="!isMobile"
        class="map__pin map__pin--tablet"
        :position="{lat: 59.938819, lng: 30.323015}"
        :icon="pinTablet"
      />
      <GMapMarker
        v-else
        class="map__pin map__pin--mobile"
        :position="{lat: 59.938819, lng: 30.323015}"
        :icon="pinMobile"
      />
    </GMapMap>
  </div>
</template>

<script>

  import {onBeforeUnmount, onMounted, ref, watch} from 'vue';
  import pinTablet from '@/assets/img/contacts/map-pin-tablet.png';
  import pinMobile from '@/assets/img/contacts/map-pin-mobile.png';


  export default {
    name: 'ContactsMap',
    setup() {
      const isVisible = ref(false);

      const CENTER_MOBILE = {lat: 59.9391, lng: 30.323};
      const CENTER_DESKTOP = {lat: 59.9391, lng: 30.3193};
      const ZOOM_MOBILE = 14.5;
      const ZOOM_DESKTOP = 16.5;

      const centerPosition = ref(CENTER_MOBILE);
      const zoom = ref(ZOOM_MOBILE);
      const mapKey = ref(0);

      const isDesktop = ref(false);
      const isTablet = ref(false);
      const isMobile = ref(true);

      const onResize = () => {
        isDesktop.value = window.innerWidth >= 1440;
        isTablet.value = window.innerWidth >= 768 && window.innerWidth < 1440;
        isMobile.value = window.innerWidth < 768;
      };

      watch([isDesktop, isMobile], () => {
        centerPosition.value = isDesktop.value ? CENTER_DESKTOP : CENTER_MOBILE;
        zoom.value = isDesktop.value ? ZOOM_DESKTOP : ZOOM_MOBILE;
        mapKey.value++;
      }, {immediate: true});

      onMounted(() => {
        window.addEventListener('resize', onResize);
        onResize();
      });

      onBeforeUnmount(() => {
        window.removeEventListener('resize', onResize);
      });

      return {
        isVisible,
        pinTablet,
        pinMobile,
        CENTER_MOBILE,
        CENTER_DESKTOP,
        centerPosition,
        zoom,
        ZOOM_MOBILE,
        ZOOM_DESKTOP,
        isDesktop,
        isTablet,
        isMobile,
        onResize,
        mapKey,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .map {
    position: relative;
    width: 100vw;
    height: 362px;
    line-height: 0;
    margin-left: calc(-1 * var(--padding-mobile));
    margin-right: calc(-1 * var(--padding-mobile));

    @media (min-width: 768px) {
      max-width: 1000px;
      height: 400px;
      margin-left: calc(-1 * var(--padding-tablet));
      margin-right: calc(-1 * var(--padding-tablet));
    }

    @media (min-width: 1440px) {
      max-width: 1600px;
      margin-left: calc(-1 * var(--padding-desktop));
      margin-right: calc(-1 * var(--padding-desktop));
    }

    &__gmap {
      width: 100%;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &__img {
      object-fit: cover;
      width: 100%;
      z-index: -1;

      &--mobile {
        max-height: 362px;

        @media (min-width: 768px) {
          display: none;
        }
      }

      &--tablet {
        display: none;

        @media (min-width: 768px) {
          max-height: 400px;
          display: block;
        }

        @media (min-width: 1440px) {
          display: none;
        }
      }

      &--desktop {
        display: none;

        @media (min-width: 1440px) {
          display: block;
          max-height: 400px;
        }
      }
    }
  }

  .map {
    &__invisible-controls::v-deep(.gmnoprint) {
      display: none;
    }

    &__invisible-controls::v-deep(.gm-fullscreen-control) {
      display: none;
    }
  }
</style>