<script setup>
import NavButton from './buttons/NavButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <nav class="socials">
    <NavButton>
      <FontAwesomeIcon :icon="faLinkedinIn" />
    </NavButton>
    <NavButton>
      <FontAwesomeIcon :icon="faGithub" />
    </NavButton>
    <NavButton>
      <FontAwesomeIcon :icon="faFacebookF" />
    </NavButton>
    <NavButton>
      <FontAwesomeIcon :icon="faInstagram" />
    </NavButton>
  </nav>
</template>

<style scoped>
.socials {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 350px;
  margin-right: 350px; /* top right bottom left */
  min-height: 56px;
  border-radius: 999px;
  background: #1C1C1C; /* or transparent if you prefer */
  z-index: 1;
}

.socials::before {
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