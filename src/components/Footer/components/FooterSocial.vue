<template>
  <li class="social__item">
    <a :href="props.socIcon.link">
      <component :is="props.socIcon.icon"></component>
    </a>
  </li>
</template>

<script>

import IconInst from '@/components/icons/IconInst.vue';
import IconFb from '@/components/icons/IconFb.vue';
import IconVk from '@/components/icons/IconVk.vue';

export default {
  name: 'FooterSocial',
  components: {IconVk, IconFb, IconInst},
  props: {
    socIcon: {
      type: Object,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>

</style>