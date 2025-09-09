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
  text-align: center;">
    <h1 
    style="font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;">Xander Allen Rola</h1>
    <p 
    style="font-size: 1.25rem;
    color: #ddd;">Front-End Developer | Passion for Clean Code and Creative Solutions</p>
    <CommonUseButton
      label="Hire Me"
      @click="showHireMeMenu = true"
      :width="'160px'"
      style="margin-top: 2rem; font-size: 1.1rem;"
    />
    <HireMeMenu v-if="showHireMeMenu" @close="showHireMeMenu = false" />
  </div>
</template>