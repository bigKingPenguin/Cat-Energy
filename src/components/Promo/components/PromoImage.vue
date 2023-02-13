<template>
  <img
      :src="img.src"
      :width="img.width"
      :height="img.height"
      :alt="img.alt"
      :class="img.class"
      v-for="img in promoImagesArr"
  >
</template>

<script>
export default {
  name: "PromoImage",
  // TODO: подключить, когда настанет время
  // props: {
  //   imageProp: {
  //     type: Object
  //   }
  // },
  // setup (props) {
  //   return {props}
  // }


  setup () {
    const promoImagesArr = [
      {
        src: "src/assets/img/promo/index-can-mobile@1x.png",
        width: "280",
        height: "270",
        alt: "Упаковка корма Cat Energy",
        class: "promo__img promo__img--mobile"
      },
      {
        src: "src/assets/img/promo/index-can-tablet@1x.png",
        width: "709",
        height: "609",
        alt: "Упаковка корма Cat Energy",
        class: "promo__img promo__img--tablet"
      },
      {
        src: "src/assets/img/promo/index-can-desktop@1x.png",
        width: "552",
        height: "499",
        alt: "Упаковка корма Cat Energy",
        class: "promo__img promo__img--desktop"
      }
    ]

    return {
      promoImagesArr
    }
  }
}
</script>

<style scoped>

</style>