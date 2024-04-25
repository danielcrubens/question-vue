<template>
  <div>
    <nav class="flex justify-center items-center gap-6 pt-14" aria-label="Tabs">
      <button v-for="tab in tabs"
        :key="tab"
        class="shrink-0 rounded-lg p-2 text-md font-medium text-white hover:bg-white hover:text-gray-700 cursor-pointer"
        :class="{ 'bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-700': activeTab === tab }"
        @click="switchTab(tab)">
        {{ tab }}
      </button>
    </nav>
    <component :is="activeComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Fundamentals from './Fundamentals.vue';
import Tab2Content from './Tab2Content.vue';

const activeTab = ref('Fundamentos');
const activeComponent = ref(Fundamentals);

const tabs = ['Fundamentos', 'Data Binding', 'Componentes', 'Eventos', 'Diretivas', 'Gerenciamento de estado', 'Roteamento'];

const components = {
  Fundamentos: Fundamentals,
  'Data Binding': Tab2Content,
  Componentes: Tab2Content,
  Eventos: Tab2Content,
  Diretivas: Tab2Content,
  'Gerenciamento de estado': Tab2Content,
  Roteamento: Tab2Content,
};

function switchTab(tabName) {
  activeTab.value = tabName;
  activeComponent.value = components[tabName];
}
</script>
