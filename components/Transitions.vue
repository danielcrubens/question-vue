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
  { title: 'Como o Vue lida com as transiçoes', content: 'O Vue lida com transições através do sistema de transições, que permite adicionar efeitos de entrada/saída em elementos quando são adicionados, atualizados ou removidos do DOM. Isso é feito definindo transições com os elementos <transition> ou <transition-group>, usando hooks de ciclo de vida para controlar o comportamento durante a transição, aplicando classes de estilo CSS para animações e definindo animações personalizadas com CSS.', expanded: false },
  {
    title: 'Qual é a diferença entre transições e animações CSS', content: 'As transições são ideais para mudanças simples e rápidas, enquanto as animações permitem criar efeitos visuais mais elaborados e dinâmicos.', expanded: false
  }, 
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
