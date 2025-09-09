<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProfileMenu from '../ProfileMenu.vue' // Adjust the path if needed

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div style="position: relative; display: inline-block;">
    <button class="profile-btn" @click="toggleMenu">
      <FontAwesomeIcon :icon="faUser" />
    </button>
    <ProfileMenu v-if="showMenu" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.profile-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;

  /* Two layers: inner + border */
  background:
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB, #FFD49C) border-box;

  border: 2px solid transparent;

  background-size: 200% 100%, 200% 100%;
  background-position: left center, left center;
  background-clip: padding-box, border-box;

  transition: background-position 0.6s ease-in-out, filter 0.3s ease;
}

.profile-btn:hover {
  background-position: right center, right center;
  filter: brightness(1.08);
}
</style> 