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
  { title: 'O que são componentes', content: 'São blocos reutilizáveis de código HTML, CSS e JavaScript que encapsulam uma parte específica da interface do usuário e sua lógica associada.', expanded: false },
  {
    title: 'Como você passa dados para um componente filho usando props', content: 'Na instância do componente pai, você define as props como um objeto dentro da tag <component>.Cada prop deve ter um nome e um valor. Você pode usar expressões JavaScript para definir valores dinâmicos para as props.', expanded: false },

  { title: 'O que são slots nos componentes', content: 'São espaços reservados em um componente que permitem que você injete conteúdo personalizado de outro componente pai. Isso facilita a criação de componentes reutilizáveis ​​com interfaces personalizáveis ​​sem duplicar código.', expanded: false },
  { title: 'Quais são os tipos de Componentes', content: '<li class="italic font-semibold">Componentes Instanciáveis:</li> Os mais comuns, podem ser criados e usados em diferentes partes da aplicação. <li class="italic font-semibold">Componentes Prop:</li> Recebem dados de outros componentes pai através de props. <li class="italic font-semibold">Componentes Com:</li> Renderizam conteúdo de outros componentes <li class="italic font-semibold">Componentes de Alto Nível:</li> Fornecem funcionalidades abstratas e reutilizáveis, como layouts, formulários e botões.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
