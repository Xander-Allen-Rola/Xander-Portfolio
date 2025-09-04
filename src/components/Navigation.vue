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
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 350px;
  margin-right: 350px;
  padding: 0.5rem 2.5rem 0.5rem 0rem; /* top right bottom left */
  min-height: 56px;
  border-radius: 999px;
  background: #1C1C1C; /* or transparent if you prefer */
  z-index: 1;
}

.navigation::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  padding: 2px; /* thickness of the outline */
  background: linear-gradient(to right, #FFD49C, #7A87FB);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
</style>