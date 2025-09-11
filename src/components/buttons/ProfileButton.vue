<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProfileMenu from '../ProfileMenu.vue'

const showMenu = ref(false)
const menuWrapper = ref(null) // reference for the wrapper

function toggleMenu() {
  showMenu.value = !showMenu.value
}

// Close popup if clicking outside
function handleClickOutside(event) {
  if (menuWrapper.value && !menuWrapper.value.contains(event.target)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="menuWrapper" style="position: relative; display: inline-block;">
    <button class="profile-btn" @click.stop="toggleMenu">
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
    opacity 0.35s,
    transform 0.35s;
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

.profile-btn:active {
  transform: translateY(2px);
}

@media (max-width: 767px) { 
  .profile-popup-enter-active,
.profile-popup-leave-active {
  transition: transform 0.35s;
}

.profile-popup-enter-from {
  transform: translateX(100%); /* Start off-screen to the right */
}

.profile-popup-enter-to {
  transform: translateX(-50%); /* Slide into place */
}

.profile-popup-leave-from {
  transform: translateX(0); /* Start from visible position */
}

.profile-popup-leave-to {
  transform: translateX(100%); /* Slide out to the right */
}

}
</style>
