<script setup>
import NavButton from './buttons/NavButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'
</script>

<template>
  <nav class="navigation">
    <NavButton>
      <FontAwesomeIcon :icon="faHouse" />
    </NavButton>
    <NavButton label="About" />
    <NavButton label="Projects" />
    <NavButton label="Contact" />
  </nav>
</template>

<style scoped>
.navigation {
  display: flex;
  padding: 6px 0;
  align-items: center;
  border-radius: 999px;
  border: 2px solid transparent; /* Make border transparent */
  background: 
    linear-gradient(#1C1C1C, #1C1C1C) padding-box, /* Inner background */
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box; /* Border gradient */
  background-clip: padding-box, border-box;
}
</style>