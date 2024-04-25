<template>
  <header class=" w-11/12 xl:w-11/12 mx-auto flex justify-end py-7">
    <div class="items-center w-full flex justify-end space-x-10">
      <IconNight v-show="colorMode.preference === 'light'" @click="toggleTheme" />
      <IconLight v-show="colorMode.preference === 'dark'" @click="toggleTheme" />
      <IconGithub />
    </div>
  </header>
</template>

<script setup>

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
