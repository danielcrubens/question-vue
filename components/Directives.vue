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
  { title: 'Qual é o propósito das diretivas v-if e v-for', content: 'A diretiva v-if é usada para renderizar ou não um elemento com base em uma expressão condicional. Por exemplo, você pode usar v-if para mostrar ou esconder um elemento com base em uma condição. <p>Por outro lado, a diretiva v-for é usada para renderizar uma lista de elementos com base em um array ou objeto. Por exemplo, você pode usar v-for para iterar sobre uma matriz e renderizar um elemento para cada item na matriz</p>', expanded: false },
  {
    title: 'Qual a direfença entre o v-show do v-if', content: 'A diferença principal entre v-show e v-if em Vue.js é como eles controlam a visibilidade dos elementos. <li class="italic font-semibold">v-show:</li>controla a visibilidade dos elementos alterando o estilo display do elemento HTML. Se a expressão associada a v-show for verdadeira, o elemento é exibido; caso contrário, ele é ocultado. Ele mantém o elemento no DOM, apenas alterando sua visibilidade com CSS. <li class="italic font-semibold">v-if:</li>Remove ou adiciona o elemento ao DOM com base na expressão condicional. Se a expressão for verdadeira, o elemento é renderizado no DOM; caso contrário, ele não é renderizado. Isso significa que o elemento é completamente adicionado ou removido do DOM, não apenas escondido.', expanded: false },

  { title: 'Quais as principais diferenças entre v-bind e v-on', content: '<li class="italic font-semibold">v-bind:</li>É usado para manipular atributos HTML dinamicamente com base em dados Vue <li class="italic font-semibold">v-on:</li> É usado para lidar com eventos do DOM e executar ações correspondentes em métodos Vue.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
