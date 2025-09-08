<script setup>
import ProfileButton from './buttons/HireMeButton.vue';
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
    <ProfileButton 
    label="Hire Me" 
    style="margin-top: 2rem;
    width: 160px;
    font-size: 1.1rem;" />
  </div>
</template>