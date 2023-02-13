<template>
  <li
      class="special__item"
      v-for="spec in specialItems"
      :key="spec.iconName"
  >
    <component
        :is="spec.iconName"
        class="special__icon"
    >
    </component>
    <p class="special__description">
      {{ spec.description }}
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
  setup() {
    const specialItems = [
      {
        iconName: "IconLeaf",
        description: "Функциональное питание содержит только полезные питательные вещества."
      },
      {
        iconName: "IconSolution",
        description: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово."
      },
      {
        iconName: "IconCutlery",
        description: "Замените один-два приема обычной еды на наше функциональное питание."
      },
      {
        iconName: "IconClock",
        description: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!"
      }
    ]
    return {
      specialItems
    }
  }

}
</script>

<style scoped>

</style>