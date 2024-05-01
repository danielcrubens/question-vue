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
  { title: 'O que são eventos no Vue.js e como eles funcionam', content: 'Eventos são ações que acionam uma resposta dentro de um componente Vue.js. Eles permitem que os componentes interajam com o usuário, com outros componentes ou com dados externos. O Vue.js usa um sistema de escuta de eventos baseado em diretivas, onde os eventos são declarados usando a diretiva v-on e as funções de manipulação de eventos são definidas no objeto de métodos do componente.', expanded: false },
  {
    title: 'Quais são os diferentes tipos de eventos no Vue.js', content: 'Existem diversos tipos de eventos no Vue.js, abrangendo interações do usuário, eventos do DOM, eventos do ciclo de vida do componente e eventos personalizados. Alguns exemplos comuns incluem: <li class="italic font-semibold">Eventos do mouse:</li>click, dblclick, mousedown, mouseup, mousemove, <li class="italic font-semibold">Eventos do teclado:</li>keydown, keyup, keypress <li class="italic font-semibold">Eventos do formulário</li> submit, input, change <li class="italic font-semibold">Eventos do ciclo de vida:</li>created, mounted, updated, beforeDestroy <li class="italic font-semibold">Eventos personalizados:</li>Você pode criar seus próprios eventos usando o sistema de emissão de eventos do Vue.js.', expanded: false },

  { title: 'Como podemos prevenir o comportamento padrão de um evento?', content: 'Para prevenir o comportamento padrão de um evento, como impedir o envio de um formulário ou cancelar a propagação de um clique, você pode usar o modificador .prevent na diretiva v-on.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
