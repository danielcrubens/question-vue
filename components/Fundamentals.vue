<template>
  <div class="mt-12">
    <AccordionItem v-for="(tab, index) in tabs" :key="index" :title="tab.title" :content="tab.content" :expanded="tab.expanded" :toggleAccordion="() => toggleAccordion(index)" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AccordionItem from './Accordion/AccordionItem.vue';

const tabs = ref([
  { title: 'O que é Vue', content: 'Vue.js é uma estrutura JavaScript progressiva usada principalmente para construir interfaces de usuário e aplicativos de página única. É conhecido por sua adaptabilidade, tamanho de arquivo pequeno e curva de aprendizado progressiva. ', expanded: false },
  { title: 'Life Cycle Hooks', content: 'São métodos predefinidos que são executados em momentos específicos durante a vida útil de um componente. Imagine um componente Vue como se fosse um personagem em uma peça de teatro. Ao longo da peça, o personagem passa por diversas etapas: desde sua entrada no palco até sua saída final. No Vue, os "Life Cycle Hooks" funcionam de forma similar, permitindo que você controle o "ciclo de vida" de um componente e realize ações específicas em cada etapa.<h3 class="text-md font-semibold py-2">Tipos de Life Cycle Hooks:</h3>  <li class="italic font-semibold">Criação: <span class="font-medium not-italic">(O componente está sendo configurado) beforeCreate, created, beforeMount</span></li> <li class="italic font-semibold">Montagem: <span class="font-medium not-italic">(O componente está sendo adicionado ao DOM) mounted</span></li> <li class="italic font-semibold">Atualização: <span class="font-medium not-italic">(Os dados do componente sofrem alterações) beforeUpdate, updated</span> </li> <li class="italic font-semibold">Destruição: <span class="font-medium not-italic">(O componente está sendo removido do DOM) beforeDestroy, destroyed</span> </li>', expanded: false },
  { title: 'Componentes', content: 'São elementos reutilizáveis ​​e independentes que consistem em três partes principais: <span class="italic">template</span>, <span class="italic">script</span> e um <span class="italic">style</span> . Esses blocos de construção encapsulados permitem uma separação clara de preocupações em seu aplicativo da web.', expanded: false },
  { title: 'Como você vincula os dados à visualização em Vue', content: 'O Data Binding estabelece uma conexão entre o modelo e a visualização, garantindo que as alterações em um sejam refletidas no outro. Vue oferece três tipos de ligação principais: <li class="italic font-semibold">Unico:</li> Ideal para cenários em que os dados não mudam e você deseja inicializar a visualização com eles. Usar esta opção pode aumentar o desempenho. <li class="italic font-semibold">Unidirecional:</li>As alterações de dados são propagadas do modelo para a visualização. É benéfico garantir que o modelo seja a única fonte de verdade, simplificando a compreensão do fluxo do seu aplicativo. <li class="italic font-semibold">Bidirecional:</li>Este tipo de relacionamento de ligação é mais dinâmico, permitindo que alterações feitas na visualização ou no modelo sejam refletidas na entidade oposta.', expanded: false },
  { title: 'Explique o virtual DOM em Vue', content: 'O virtual DOM é a base da otimização de desempenho do Vue, permitindo atualizações suaves e eficientes para a interface do usuário (UI) da sua aplicação web conforme seus dados evoluem.', expanded: false },
  { title: 'O que são diretivas', content: 'São atributos especiais que manipulam o Document Object Model (DOM) com base nos valores vinculados.', expanded: false },
]);

const toggleAccordion = (index) => {
  tabs.value.forEach((tab, i) => {
    tab.expanded = i === index ? !tab.expanded : false;
  });
};
</script>
