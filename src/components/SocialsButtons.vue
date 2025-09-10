<script setup>
import NavButton from './buttons/NavButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function goTo(url) {
  window.open(url, "_blank", "noopener,noreferrer")
}
</script>

<template>
  <nav class="socials">
    <NavButton class="nav-btn" @click="goTo('https://www.linkedin.com/in/xander-allen-rola/')">
      <FontAwesomeIcon :icon="faLinkedinIn" />
    </NavButton>
    <NavButton class="nav-btn" @click="goTo('https://github.com/Xander-Allen-Rola')">
      <FontAwesomeIcon :icon="faGithub" />
    </NavButton>
    <NavButton class="nav-btn" @click="goTo('https://www.facebook.com/xander.a.r02')">
      <FontAwesomeIcon :icon="faFacebookF" />
    </NavButton>
    <NavButton class="nav-btn" @click="goTo('https://www.instagram.com/xanderola.a/')">
      <FontAwesomeIcon :icon="faInstagram" />
    </NavButton>
  </nav>
</template>

<style scoped>
.socials {
  position: relative;
  display: flex;
  padding: 5px 10px;
  gap: 12px;
  align-items: center;
  border-radius: 999px;
  border: 2px solid transparent;
  background: 
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
}

.nav-btn {
  border-radius: 999px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.nav-btn:hover {
  background: #292929;
  transform: scale(1.08);
}
</style>
