<template>
  <div class="about-container">
    <!-- Static Title -->
    <div class="about-title">
      <h2>About Me</h2>
      <img src="../assets/icons/doublestar.svg" class="title-icon"/>
    </div>

    <!-- Orbiting Planets with navigation buttons -->
    <div class="orbit-wrapper-container">
      <button class="orbit-btn left" @click="switchPlanet(-1)">&#10094;</button>

      <div 
  class="orbit-wrapper"
  ref="orbitWrapper"
>
  <div
    v-for="(planet, index) in planets"
    :key="index"
    class="planet"
    :style="planetStyle(index)"
  >
    <h3>{{ planet.title }}</h3>
    <p>{{ planet.content }}</p>
  </div>
</div>

      <button class="orbit-btn right" @click="switchPlanet(1)">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const planets = ref([
  { title: "Technical Skills & Passion", content: "Skilled in .NET, SQL, Java, Python, and full-stack web technologies, with a strong focus on creating scalable, efficient, and user-friendly applications." },
  { title: "Academic Excellence & Leadership", content: "Cum Laude Computer Science graduate and consistent Dean's Lister, with leadership experience gained through research, course projects, and collaborative tech initiatives." },
  { title: "Professional Experience", content: "At Wilshire Financial Network, I contributed to enhancing financial CRM applications by developing .NET features, streamlining workflows, and building automation scripts to improve efficiency." },
  { title: "Project Experience", content: "Built software solutions such as an Information Management System for Xavier University’s Night School Program and a Resource-Based AI Decision Algorithm for procedural NPC behavior, combining technical innovation with practical applications." }
])

// Orbit state
const radius = ref(350)
function updateRadius() {
  radius.value = window.innerWidth <= 726 ? 250 : 350
}

const anglePerPlanet = 360 / planets.value.length
const rotation = ref(0)
let orbiting = true
let animationFrame = null
let currentIndex = ref(0)

function planetStyle(index) {
  const angle = ((rotation.value + index * anglePerPlanet) % 360) * Math.PI / 180
  const z = Math.cos(angle)
  const scale = 0.7 + 0.6 * z
  const zIndex = Math.round(z * 100)
  const x = Math.sin(angle) * radius.value

  return {
    transform: `translateX(${x}px) translateZ(${z * radius.value}px) scale(${scale})`,
    zIndex,
    opacity: 0.5 + 0.5 * z
  }
}

function switchPlanet(direction) {
  orbiting = false
  currentIndex.value = (currentIndex.value + direction + planets.value.length) % planets.value.length
  rotation.value = -currentIndex.value * anglePerPlanet
}

function animateOrbit() {
  if (orbiting) rotation.value += 0.05
  animationFrame = requestAnimationFrame(animateOrbit)
}

function handleScroll() {
  orbiting = true
}

// --- Swipe & Drag support ---
const orbitWrapper = ref(null)
let startX = 0
let lastX = 0
let dragging = false

function handleTouchStart(e) {
  dragging = true
  orbiting = false
  startX = e.touches[0].clientX
  lastX = startX
}

function handleTouchMove(e) {
  if (!dragging) return
  const currentX = e.touches[0].clientX
  const deltaX = currentX - lastX
  rotation.value += deltaX * 0.3 // sensitivity factor
  lastX = currentX
}

function handleTouchEnd() {
  if (!dragging) return
  dragging = false

  // Snap to nearest planet
  const nearestIndex = Math.round(-rotation.value / anglePerPlanet)
  currentIndex.value = (nearestIndex % planets.value.length + planets.value.length) % planets.value.length
  rotation.value = -currentIndex.value * anglePerPlanet
}

onMounted(() => {
  updateRadius()
  window.addEventListener('resize', updateRadius)
  animateOrbit()
  window.addEventListener('scroll', handleScroll)

  if (orbitWrapper.value) {
    orbitWrapper.value.addEventListener("touchstart", handleTouchStart)
    orbitWrapper.value.addEventListener("touchmove", handleTouchMove)
    orbitWrapper.value.addEventListener("touchend", handleTouchEnd)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', updateRadius)
  window.removeEventListener('scroll', handleScroll)

  if (orbitWrapper.value) {
    orbitWrapper.value.removeEventListener("touchstart", handleTouchStart)
    orbitWrapper.value.removeEventListener("touchmove", handleTouchMove)
    orbitWrapper.value.removeEventListener("touchend", handleTouchEnd)
  }
})
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  perspective: 1500px;
}

.about-title {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.title-icon {
  height: 35px;
}

.orbit-wrapper-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}

.orbit-wrapper {
  width: 100%;
  height: 400px;
  position: relative;
  margin: 0 50px; /* space for buttons */
  transform-style: preserve-3d;
  justify-items: center;
  /* Tilt orbit forward slightly */
  transform: rotateX(-20deg); /* 20deg forward tilt */
}

.planet {
  position: absolute;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  background: rgba(255,255,255,0.05);
  box-shadow: 0 0 15px rgba(255,255,255,0.1);
  transform-style: preserve-3d;
  transition: transform 0.4s ease, opacity 0.4s ease, z-index 0.4s ease;
}

.planet h3 {
  margin-bottom: 15px;
  text-align: center;
}

.planet p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  text-align: justify;
}

.orbit-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #fff;
  background: rgba(255,255,255,0.05);
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
  z-index: 999;
}

.orbit-btn:hover {
  background: rgba(255,255,255,0.15);
}

.orbit-btn.left {
  left: 0;
}

.orbit-btn.right {
  right: 0;
}

@media (max-width: 767px) {
  .orbit-btn {
    display: none;
  }

  .orbit-wrapper-container {
    height: 400px;
  }
  .orbit-wrapper {
    position: absolute;
    margin: 0; /* space for buttons */
    overflow-x: hidden;
    width: 128%;
  }
  .planet {
    top: 50px;
    width: 70%;
  }

  h3{
    font-size: 21px;
  }
  p{
    font-size: 14px;
  }
  .title-icon {
    height: 30px;
  }
  .about-title{
    gap: 15px;
  }
}
</style>
