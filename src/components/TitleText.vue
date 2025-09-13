<script setup>
import { ref } from 'vue'
import CommonUseButton from './buttons/CommonUseButton.vue';
import HireMeMenu from './HireMeMenu.vue'
const showHireMeMenu = ref(false)
</script>

<template>
  <div 
  style="display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  text-align: center;">
    <h1>Xander Allen Rola</h1>
    <p>Front-End Developer | Passion for Clean Code and Creative Solutions</p>
    <CommonUseButton
      label="Hire Me"
      @click="showHireMeMenu = true"
      :width="'160px'"
      style="font-size: 1.1rem;"
    />
    <HireMeMenu v-if="showHireMeMenu" @close="showHireMeMenu = false" />
  </div>
</template>

<style scoped>
h1{
  font-size: 2.5rem;
  color: #fff;
}

p{
  font-size: 1.25rem;
  color: #ddd;
}

@media (max-width: 767px) {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>