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
    align-items: center;
    margin-left: 60px;
    margin-right: 60px;
  }

</style>