<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SocialsButtons from './components/SocialsButtons.vue'
import ProfileButton from './components/buttons/ProfileButton.vue'
import HireMeMenu from './components/HireMeMenu.vue'
import CommonUseButton from './components/buttons/CommonUseButton.vue'
import StarsOverlay from './components/StarsOverlay.vue'

const showHireMeMenu = ref(false)
const isSticky = ref(false)
const sentinel = ref(null)
let observer

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isSticky.value = !entry.isIntersecting
  }, { threshold: 0 })

  if (sentinel.value) observer.observe(sentinel.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <StarsOverlay />

  <div class="app-container">
    <!-- Sentinel for sticky header -->
    <div ref="sentinel" style="height: 1px;"></div>

    <!-- HEADER -->
    <header class="app-header">
  <!-- Mobile-only top row: Logo + Profile -->
  <div class="logo-container swipe-anim" :class="{ 'swipe-hide': isSticky }">
    <XanderLogo />
    <ProfileButton />
  </div>

  <!-- Desktop elements -->
  <div class="swipe-anim left" :class="{ 'swipe-hide': isSticky }">
    <XanderLogo />
  </div>

  <NavigationButtons />

  <div class="swipe-anim right" :class="{ 'swipe-hide': isSticky }">
    <ProfileButton />
  </div>
</header>



    <!-- MAIN CONTENT -->
    <main class="main-content">
      <HomeGrid id="home" />
      <SubInfo />
    </main>

    <AboutMe id="about" />
    <Projects id="projects" />
    <Contact id="contact" />

    <!-- FOOTER -->
    <footer class="app-footer">
      <XanderLogo />
      <SocialsButtons />
      <CommonUseButton label="Hire Me" @click="showHireMeMenu = true"/>
      <HireMeMenu v-if="showHireMeMenu" @close="showHireMeMenu = false" />
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  width: 78%;
  max-width: 1480px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
}

/* HEADER */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  top: 15px;
  z-index: 2;
}

.swipe-anim {
  transition: transform 0.5s cubic-bezier(.55,0,.1,1), opacity 0.3s cubic-bezier(.55,0,.1,1);
  will-change: transform, opacity;
}

.swipe-hide {
  transform: translateY(-80px);
  opacity: 0;
  pointer-events: none;
}

/* Hide mobile wrapper on desktop */
.logo-container {
  display: none;
}

/* MAIN CONTENT */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

/* FOOTER */
.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;
}

/* MOBILE LAYOUT */
@media (max-width: 767px) {
  .app-header {
    display: flex;
    flex-direction: column; /* stack vertically */
    gap: 10px;
    align-items: stretch;
    top: -47px;
    align-items: center
  }

  /* Show mobile top row: Logo left, Profile right */
  .logo-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  /* Hide desktop Logo/Profile */
  .app-header > .left,
  .app-header > .right {
    display: none;
  }

  /* Navigation below top row, centered */
  .app-header > NavigationButtons {
    display: flex;
    justify-content: center;
  }
}

</style>
