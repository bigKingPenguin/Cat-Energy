<template>
  <li class="social__item">
    <a
      :href="props.SocIcon.link"
    >
      <component
        :is="props.SocIcon.icon">
      </component>
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
    SocIcon: {
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