<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SocialsButtons from './components/SocialsButtons.vue'

const isSticky = ref(false)
const sentinel = ref(null)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isSticky.value = !entry.isIntersecting
    },
    { threshold: 0 }
  )
  if (sentinel.value) observer.observe(sentinel.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div
    style="max-width: 1480px;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);">
    <!-- Sentinel element to detect when header becomes sticky -->
    <div ref="sentinel" style="height: 1px;"></div>
    <header
      style="display: flex;
      align-items: center;
      justify-content:space-between;
      width: 100%;
      position: sticky;
      top: 15px;
      z-index: 10;">
      <div :class="['swipe-anim', { 'swipe-hide': isSticky }]">
        <XanderLogo />
      </div>
      <NavigationButtons />
      <div :class="['swipe-anim', { 'swipe-hide': isSticky }]">
        <Profile />
      </div>
    </header>
    <main
      style="display: flex;
      flex-direction: column;
      align-items: center;">
      <HomeGrid style="margin-top: 30px;" />
      <SubInfo />
    </main>
    <AboutMe style="margin: 70px 0 0 90px;"/>
    <Projects style="margin: 100px 0 0 90px;"/>
    <Contact style="margin: 100px 0 0 90px;"/>
    <footer
      style="display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 100px">
      <XanderLogo />
      <SocialsButtons />
      <Profile />
    </footer>
  </div>
</template>

<style scoped>
.swipe-anim {
  transition: transform 0.50s cubic-bezier(.55,0,.1,1), opacity 0.3s cubic-bezier(.55,0,.1,1);
  will-change: transform, opacity;
}
.swipe-hide {
  transform: translateY(-80px);
  opacity: 0;
  pointer-events: none;
}
</style>