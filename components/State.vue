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
  { title: 'O que é Pinia', content: 'É uma ferramenta que permite centralizar e gerenciar o estado da sua aplicação Vue.js de forma eficiente. Isso significa que você pode armazenar dados globais ou locais de forma organizada e acessá-los de diferentes componentes da sua aplicação.', expanded: false },
  {
    title: 'Explique o conceito de store no Pinia', content: 'Em resumo, um store no Pinia é como um contêiner isolado que encapsula uma porção específica do estado da sua aplicação. Ele funciona como um repositório centralizado para armazenar dados que são relevantes para um determinado contexto da sua interface', expanded: false
  },

  { title: 'Como você gerencia o estado em um aplicativo Vue sem o Pinia ou Vuex', content: '<li class="font-semibold italic">Estado Local (data):</li> Utilize a propriedade "data" em cada componente para armazenar dados específicos daquele componente. <li class="font-semibold italic">Estado com Composição API (reactive refs):</li> Utilize ref para criar variáveis reativas que armazenam o estado.', expanded: false },
  {title: 'Quais são os conceitos básicos do Pinia', content: '<li class="font-semibold italic">State (Estado):</li>Representa os dados centralizados da aplicação. <li class="font-semibold italic">Getters:</li>Computa valores derivados do estado.<li class="font-semibold italic">Mutations:</li>Modificações síncronas no estado.<li class="font-semibold italic">Actions:</li> Realiza operações assíncronas e chama mutações.<li class="font-semibold italic">Modules</li>Dividem o store em partes independentes para gerenciar diferentes aspectos do estado.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
