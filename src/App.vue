
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
import StarsOverlay from './components/StarsOverlay.vue'

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
    <div ref="sentinel" style="height: 1px;"></div>
    <header class="app-header" v-motion-slide-visible-top>
      <div class="logo-container swipe-anim" :class="{ 'swipe-hide': isSticky }">
        <XanderLogo />
        <ProfileButton />
      </div>
      <div class="swipe-anim left" :class="{ 'swipe-hide': isSticky }">
        <XanderLogo />
      </div>
      <NavigationButtons />
      <div class="swipe-anim right" :class="{ 'swipe-hide': isSticky }">
        <ProfileButton />
      </div>
    </header>
    <main class="main-content">
      <HomeGrid
        id="home"
        v-motion
        :initial="{ opacity: 0, y: 50, scale: 0.95 }"
        :visible="{ opacity: 1, y: 0, scale: 1 }"
        :duration="600"
      />
      <SubInfo />
    </main>
    <AboutMe
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.95 }"
      :visible="{ opacity: 1, y: 0, scale: 1 }"
      :duration="600"
      id="about"
      style="margin-top: 90px;"
    />
    <Projects
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.95 }"
      :visible="{ opacity: 1, y: 0, scale: 1 }"
      :duration="600"
      id="projects"
      style="margin-top: 90px;"
    />
    <Contact
      v-motion
      :initial="{ opacity: 0, y: 50, scale: 0.95 }"
      :visible="{ opacity: 1, y: 0, scale: 1 }"
      :duration="600"
      id="contact"
      style="margin-top: 90px;"
    />
    <footer class="app-footer">
      <SocialsButtons />
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
  .logo-container {
    display: none;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
  .app-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
  }
  @media (max-width: 767px) {
    .app-header {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: stretch;
      top: -47px;
      align-items: center;
    }
    .logo-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .app-header > .left,
    .app-header > .right {
      display: none;
    }
    .app-header > NavigationButtons {
      display: flex;
      justify-content: center;
    }
  }
</style>
