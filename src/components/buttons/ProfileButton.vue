<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <button class="profile-btn">
    <FontAwesomeIcon :icon="faUser" />
  </button>
</template>

<style scoped>
.profile-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0; /* Prevent shrinking in flexbox */
  cursor: pointer;
  background: 
    linear-gradient(90deg, #7A87FB 0%, #FFD49C 100%) padding-box, /* inner gradient */
    linear-gradient(90deg, #FFD49C 0%, #7A87FB 100%) border-box;  /* border gradient */
  border: 1px solid transparent;
}
</style>