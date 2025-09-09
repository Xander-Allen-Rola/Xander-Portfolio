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
    <transition name="hireme-swipe">
  <HireMeMenu v-if="showHireMeMenu" @close="showHireMeMenu = false" />
</transition>
  </div>
</template>

<style scoped>
.hireme-swipe-enter-active,
.hireme-swipe-leave-active {
  transition:
    opacity 0.4s cubic-bezier(.4,2,.6,1),
    transform 0.4s cubic-bezier(.4,2,.6,1);
}
.hireme-swipe-enter-from,
.hireme-swipe-leave-to {
  opacity: 0;
  transform: translateY(60px) scale(0.98);
}
.hireme-swipe-enter-to,
.hireme-swipe-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style> 