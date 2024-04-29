<template>
  <div class="mt-12">
    <AccordionItem v-for="(tab, index) in tabs" :key="index" :title="tab.title" :content="tab.content" :expanded="tab.expanded" :toggleAccordion="() => toggleAccordion(index)" />
  </div>
</template>


<script setup>
import { ref } from 'vue';
import AccordionItem from './Accordion/AccordionItem.vue';
const tabs = ref([
  { title: 'Explique a diferença entre v-bind e v-model', content: ' <li class="italic font-semibold">v-bind:</li> Vincula variáveis ​​do modelo às visualizações.  <li class="italic font-semibold">v-model:</li> Direciona a ligação bidirecional, permitindo atualizações em tempo real entre as entradas e o modelo de dados do aplicativo.', expanded: false },

  { title: 'O que são propriedades computadas e como são usadas', content: 'São elementos de dados derivados que são atualizados automaticamente sempre que suas dependências "observadas" mudam.Eles eliminam a necessidade de rastreamento e atualização manual de dados, oferecendo uma ferramenta de gerenciamento de dados mais simples e eficiente.', expanded: false },
  { title: 'Diferença entre propriedades e métodos computados', content: ' <li class="italic font-semibold">Propriedades computadas:</li> São como campos de dados derivados de outros dados com base em lógica específica . Você define propriedades computadas usando a computedopção em um componente Vue. <li class="italic font-semibold">Métodos:</li> São como funções, ou seja, são chamados sob demanda . Você define métodos usando a methodsopção em um componente Vue.', expanded: false },
  { title: 'O que são observadores', content: 'São recursos importantes que rastreiam alterações de dados e permitem que os desenvolvedores executem lógicas ou tarefas específicas em resposta a essas alterações.Esses observadores são definidos dentro dos componentes Vue e servem como uma ferramenta indispensável para construir um comportamento reativo. Eles trabalham em conjunto com a instância Vue para monitorar propriedades de dados, métodos ou até mesmo opções de componentes específicos.', expanded: false },
  { title: 'Como você vincula estilos enbutidos em um modelo Vue', content: 'Você pode vincular estilos embutidos a um elemento por meio de vários métodos, como modelos com "v-bind" (:style), ligações de classe dinâmicas e declarações de estilo de objeto JS.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
