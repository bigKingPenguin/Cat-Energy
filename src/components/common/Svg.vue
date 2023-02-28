<template>
  <svg aria-hidden="true" :width="props.width" :height="props.height">
    <use :href="symbolId" :fill="color"/>
  </svg>
</template>

<script>
  import {computed} from 'vue';

  export default {
    name: 'Svg',
    props: {
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: null,
      },
      width: {
        type: [String, Number],
      },
      height: {
        type: [String, Number],
      },
    },
    setup(props) {
      const symbolId = computed(() => `#${props.name}`);
      return {
        symbolId, props,
      };
    },
  };
</script>