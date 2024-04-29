<template>
  <div class="px-5 py-2 mb-4 border border-white/40 rounded">
    <div @click="toggle" class="flex justify-between items-center cursor-pointer">
      <h2 class="font-semibold text-white text-lg">{{ title }}</h2>
      <div>
        <AccordionIcon :expanded="expanded" />
      </div>
    </div>
    <div v-if="expanded" class="py-2 text-white">
      <p class="text-base" v-html="content"></p>
    </div>
  </div>
</template>

<script setup>
import AccordionIcon from '../icons/AccordionIcon.vue';

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  expanded: { type: Boolean, required: true },
  toggleAccordion: { type: Function, required: true }
});

const toggle = () => {
  props.toggleAccordion();
};
</script>
