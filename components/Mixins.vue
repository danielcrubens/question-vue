<template>
  <div class="mt-12">
    <AccordionItem v-for="(tab, index) in tabs" :key="index" :title="tab.title" :content="tab.content"
      :expanded="tab.expanded" :toggleAccordion="() => toggleAccordion(index)" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import AccordionItem from './Accordion/AccordionItem.vue';
const tabs = ref([
  { title: 'O que são mixins e como você os usaria', content: 'São objetos reutilizáveis que contêm opções de componentes. Eles permitem que você encapsule funcionalidades comuns em um objeto e, em seguida, os reutilize em vários componentes. Isso é útil quando você precisa compartilhar lógica entre vários componentes sem ter que repetir o código.', expanded: false },
  {
    title: 'Como os mixins se fundem com as opções de componentes', content: 'As opções dos mixins são mescladas com as opções do componente. Isso significa que os dados, métodos, hooks do ciclo de vida e outras opções definidas nos mixins são adicionados ao componente. Se houver conflitos, as opções do componente têm prioridade', expanded: false
  }, 
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
