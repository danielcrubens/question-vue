<template>
  <div>
    <ChevronDown color="white":size="22" v-if="!expanded"  />
    <ChevronUp v-else color="white":size="22" />
  </div>
</template>
<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import {  ChevronUp } from 'lucide-vue-next';
import { defineProps } from 'vue';


const props = defineProps({
    expanded: {
        type: Boolean,
        default: false
    }
});
</script>

