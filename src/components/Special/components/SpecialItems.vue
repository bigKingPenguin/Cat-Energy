<template>
  <li class="special__item">
    <component
        :is="props.specItem.iconName"
        class="special__icon"
    >
    </component>
    <p class="special__description">
      {{ props.specItem.description }}
    </p>
  </li>
</template>

<script>
import IconClock from "@/components/icons/IconClock.vue";
import IconCutlery from "@/components/icons/IconCutlery.vue";
import IconLeaf from "@/components/icons/IconLeaf.vue";
import IconSolution from "@/components/icons/IconSolution.vue";

export default {
  name: "SpecialItems",
  components: {IconSolution, IconLeaf, IconCutlery, IconClock},
  props: {
    specItem: {
      type: Object
    }
  },
  setup(props) {

    return {
      props
    }
  }

}
</script>

<style scoped>

</style>