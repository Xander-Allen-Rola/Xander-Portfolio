<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import planets
import planet1 from '@/assets/images/planets/planet1.svg'
import planet2 from '@/assets/images/planets/planet2.svg'
import planet3 from '@/assets/images/planets/planet3.svg'
import planet4 from '@/assets/images/planets/planet4.svg'

const planetImages = [planet1, planet2, planet3, planet4]

const STAR_COUNT = 200
const stars = ref([])
const currentPlanet = ref(null)
const planetOpacity = ref(0) // fade-in opacity

let planetIndex = 0
let lastScrollY = window.scrollY
let width = window.innerWidth
let height = window.innerHeight
const fov = 300
const MAX_DEPTH = 1200
const BASE_FORWARD_SPEED = 0.5

// exclusion zone radius (circular around center)
const exclusionRadius = 350

// Generate stars + initial planet
function generateStars() {
  stars.value = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    z: Math.random() * 1000 + 200,
    size: 2 + Math.random() * 2,
    zSpeed: BASE_FORWARD_SPEED
  }))

  spawnPlanet()
}

// Spawn a new planet with opacity reset
function spawnPlanet() {
  planetIndex = (planetIndex + 1) % planetImages.length

  let x, y
  do {
    x = Math.random() * width - width / 2
    y = Math.random() * height - height / 2
  } while (Math.sqrt(x * x + y * y) < exclusionRadius)

  currentPlanet.value = {
    img: planetImages[planetIndex],
    x,
    y,
    z: 1000,
    size: 500 + Math.random() * 300,
    driftX: (Math.random() - 0.5) * 0.2,
    driftY: (Math.random() - 0.5) * 0.2,
    rotation: 0,
    rotationSpeed: (Math.random() - 0.5) * 0.1
  }

  planetOpacity.value = 0 // reset opacity for fade-in
}

// Animate stars and planet
function animateStars() {
  // stars
  stars.value.forEach(star => {
    star.z -= star.zSpeed
    star.zSpeed *= 0.9
    star.zSpeed += BASE_FORWARD_SPEED * 0.05

    if (star.z < 1) {
      star.z = MAX_DEPTH
      star.x = Math.random() * width - width / 2
      star.y = Math.random() * height - height / 2
      star.zSpeed = BASE_FORWARD_SPEED
    }
    if (star.z > MAX_DEPTH) {
      star.z = 1
      star.x = Math.random() * width - width / 2
      star.y = Math.random() * height - height / 2
      star.zSpeed = BASE_FORWARD_SPEED
    }
  })

  // planet
  if (currentPlanet.value) {
    currentPlanet.value.z -= BASE_FORWARD_SPEED * 0.5

    // drift + rotation
    currentPlanet.value.x += currentPlanet.value.driftX
    currentPlanet.value.y += currentPlanet.value.driftY
    currentPlanet.value.rotation += currentPlanet.value.rotationSpeed

    // fade-in effect
    if (planetOpacity.value < 1) {
      planetOpacity.value += 0.002 // very slow fade-in
    }

    // respawn
    if (currentPlanet.value.z < 50 || currentPlanet.value.z > MAX_DEPTH + 200) {
      spawnPlanet()
    }
  }

  requestAnimationFrame(animateStars)
}

// Scroll accelerates stars + planet
function onScroll() {
  const scrollDelta = window.scrollY - lastScrollY
  lastScrollY = window.scrollY
  if (scrollDelta === 0) return

  const forwardFactor = 0.12
  const backwardFactor = 0.04

  stars.value.forEach(star => {
    if (scrollDelta > 0) {
      star.zSpeed += scrollDelta * forwardFactor * Math.random()
    } else {
      star.zSpeed += scrollDelta * backwardFactor * Math.random()
    }
  })

  if (currentPlanet.value) {
    if (scrollDelta > 0) {
      currentPlanet.value.z -= scrollDelta * 0.3
    } else {
      currentPlanet.value.z += Math.abs(scrollDelta) * 0.2
    }
  }
}

function handleResize() {
  width = window.innerWidth
  height = window.innerHeight
  generateStars()
}

onMounted(() => {
  generateStars()
  animateStars()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="stars-overlay">
    <div
      v-for="(star, i) in stars"
      :key="i"
      class="star"
      :style="{
        left: `${width / 2 + (star.x * fov / star.z)}px`,
        top: `${height / 2 + (star.y * fov / star.z)}px`,
        width: `${star.size * fov / star.z}px`,
        height: `${star.size * fov / star.z}px`,
        opacity: `${1 - star.z / MAX_DEPTH}`
      }"
    ></div>

    <img
      v-if="currentPlanet"
      class="planet"
      :src="currentPlanet.img"
      :style="{
        left: `${width / 2 + (currentPlanet.x * fov / currentPlanet.z)}px`,
        top: `${height / 2 + (currentPlanet.y * fov / currentPlanet.z)}px`,
        width: `${currentPlanet.size * fov / currentPlanet.z}px`,
        height: `${currentPlanet.size * fov / currentPlanet.z}px`,
        opacity: planetOpacity,
        transform: `rotate(${currentPlanet.rotation}deg)`
      }"
    />
  </div>
</template>

<style scoped>
.stars-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; /* 👈 accounts for mobile browser UI changes */
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  background: black;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
}

.planet {
  position: absolute;
  object-fit: contain;
}
</style>
