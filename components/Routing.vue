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
  { title: 'O que é o Vue Router e porque ele é usado', content: 'È uma biblioteca oficial para Vue.js que permite a navegação entre diferentes páginas em um aplicativo Vue de forma fácil e intuitiva. Ele é usado para criar rotas em um aplicativo Vue, definindo como diferentes URLs devem corresponder a componentes Vue específicos.', expanded: false },
  {
    title: 'Como configurar o roteamento em um aplicativo Vue', content: '<li>Instale o Vue Router no seu projeto usando npm ou yarn.</li><li>Defina as rotas do seu aplicativo em um arquivo de configuração separado.</li><li>Configure o Vue Router no ponto de entrada do seu aplicativo, como no arquivo main.js.</li><li>Use router-link para criar links para diferentes rotas e router-view para renderizar o componente correspondente à rota atual nos seus componentes Vue.</li>', expanded: false
  },

  { title: 'O que é uma rota dinâmica e como você cria uma no Vue Router', content: 'As rotas dinâmicas no Vue Router são rotas que permitem incluir parâmetros na URL para personalizar a experiência do usuário e exibir informações específicas. Imagine uma aplicação de e-commerce onde você deseja exibir a página de detalhes de um produto específico. Através de rotas dinâmicas, você pode criar URLs como "/products/:id", onde ":id" representa o identificador único do produto.', expanded: false },
  
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
