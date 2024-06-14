<template>
  <div>
    <nav class="flex justify-center items-center gap-6 pt-14 mx-auto relative  px-16" aria-label="Tabs">
      <swiper class="w-full" :space-between="20" @swiper="onSwiper" :breakpoints="breakpoints">
        <swiper-slide v-for="tab in tabs" :key="tab"
          class=" shrink-0 rounded-lg p-2 text-md text-center bg-white font-medium text-gray-700 hover:brightness-95 hover:text-gray-700 cursor-pointer"
          :class="{ 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white hover:text-white': activeTab === tab }"
          @click="switchTab(tab)">
          {{ tab }}
        </swiper-slide>
      </swiper>
      <MoveLeft color="white" class="swiper-button-prev" @click="prevSlide" />
      <MoveRight color="white" class="swiper-button-next" @click="nextSlide" />
    </nav>
    <component :is="activeComponent" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'swiper/css';
import { MoveLeft } from 'lucide-vue-next';
import { MoveRight } from 'lucide-vue-next';
import Fundamentals from './Fundamentals.vue';
import DataBinding from './DataBinding.vue';
import Components from './Components.vue';
import Events from './Events.vue';
import Directives from './Directives.vue';
import State from './State.vue';
import Routing from './Routing.vue';
import Mixins from './Mixins.vue';
import Transitions from './Transitions.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
const activeTab = ref('Fundamentos');
const activeComponent = ref(Fundamentals);

const tabs = ['Fundamentos', 'Data Binding', 'Componentes', 'Eventos', 'Diretivas', 'Gerenciamento de estado', 'Roteamento', 'Mixins', 'Transitions'];

const components = {
  Fundamentos: Fundamentals,
  'Data Binding': DataBinding,
  Componentes: Components,
  Eventos: Events,
  Diretivas: Directives,
  'Gerenciamento de estado': State,
  Roteamento: Routing,
  Mixins: Mixins,
  Transitions: Transitions,
};
function switchTab(tabName) {
  activeTab.value = tabName;
  activeComponent.value = components[tabName];
}

let swiperInstance;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const prevSlide = () => {
  if (swiperInstance) swiperInstance.slidePrev();
};

const nextSlide = () => {
  if (swiperInstance) swiperInstance.slideNext();
};
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  700: {
    slidesPerView: 2,
  },
  1000: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 4,
  },
};
</script>

<style>
.swiper-button-prev {
  position: absolute;
  left: 0rem;
  top: 80%;
}

.swiper-button-next {
  position: absolute;
  right: 0rem;
  top: 80%;
}
</style>