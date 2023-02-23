<template>
  <img
    :srcset="`${props.imageProp.srcset} 2x`"
    :src="props.imageProp.src"
    :width="props.imageProp.width"
    :height="props.imageProp.height"
    :alt="props.imageProp.alt"
    :class="props.imageProp.class"
  >
</template>

<script>
  export default {
    name: 'PromoImage',
    props: {
      imageProp: {
        type: Object,
      },
    },
    setup(props) {
      return {props};
    },
  };
</script>

<style scoped>

</style>
