<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProfileMenu from '../ProfileMenu.vue'

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
    <transition name="profile-popup">
      <ProfileMenu v-if="showMenu" />
    </transition>
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

  transition:
    background-position 0.6s ease-in-out,
    filter 0.3s ease,
    transform 0.3s;
}

.profile-btn:hover {
  background-position: right center, right center;
  filter: brightness(0.9);
  transform: translateY(-2px);
}

/* Popup animation */
.profile-popup-enter-active,
.profile-popup-leave-active {
  transition:
    opacity 0.35s cubic-bezier(.4,2,.6,1),
    transform 0.35s cubic-bezier(.4,2,.6,1);
  transform-origin: top right;
}
.profile-popup-enter-from,
.profile-popup-leave-to {
  opacity: 0;
  transform: scale(0.7) translateY(-10px);
}
.profile-popup-enter-to,
.profile-popup-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>