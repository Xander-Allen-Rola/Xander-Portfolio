<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const STAR_COUNT = 200
const stars = ref([])
let lastScrollY = window.scrollY
let width = window.innerWidth
let height = window.innerHeight
const fov = 300
const MAX_DEPTH = 1200

// Small constant forward drift
const BASE_FORWARD_SPEED = 0.5

// Generate stars
function generateStars() {
  stars.value = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width - width / 2,
    y: Math.random() * height - height / 2,
    z: Math.random() * 1000 + 200,
    size: 2 + Math.random() * 2,
    zSpeed: BASE_FORWARD_SPEED // initial base forward speed
  }))
}

// Animate stars per frame
function animateStars() {
  stars.value.forEach(star => {
    star.z -= star.zSpeed
    star.zSpeed *= 0.9
    // Always add base forward speed
    star.zSpeed += BASE_FORWARD_SPEED * 0.05

    // Reset star if too close or too far
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
  requestAnimationFrame(animateStars)
}

// Scroll accelerates stars
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
  </div>
</template>

<style scoped>
.stars-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
</style>
