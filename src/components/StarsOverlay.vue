<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const STAR_COUNT = 80
const SHOOTING_STAR_CHANCE = 0.005 // chance per frame
const stars = ref([])
const shootingStars = ref([])
let animationFrame = null

function generateStars() {
  stars.value = Array.from({ length: STAR_COUNT }, () => {
    const depth = Math.random()
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1 + depth * 3,
      vx: (Math.random() - 0.5) * 0.2 * (0.5 + depth),
      vy: (Math.random() - 0.5) * 0.2 * (0.5 + depth),
      delay: Math.random() * 5,
      opacity: 0.2 + depth * 0.8,
    }
  })
}

function animateStars() {
  stars.value.forEach(star => {
    star.x += star.vx
    star.y += star.vy
    if (star.x < 0 || star.x > window.innerWidth - star.size) star.vx *= -1
    if (star.y < 0 || star.y > window.innerHeight - star.size) star.vy *= -1
  })

  // Occasionally spawn shooting stars
  if (Math.random() < SHOOTING_STAR_CHANCE) {
    const startX = Math.random() * window.innerWidth * 0.8
    const startY = Math.random() * window.innerHeight * 0.5
    const length = 150 + Math.random() * 100
    const speed = 6 + Math.random() * 4
    shootingStars.value.push({
      x: startX,
      y: startY,
      length,
      vx: speed,
      vy: speed,
      life: 0
    })
  }

  // Animate shooting stars
  shootingStars.value = shootingStars.value.filter(star => {
    star.x += star.vx
    star.y += star.vy
    star.life += 1
    return star.life < 30 // remove after short distance
  })

  animationFrame = requestAnimationFrame(animateStars)
}

function handleResize() {
  generateStars()
}

onMounted(() => {
  generateStars()
  animateStars()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="stars-overlay">
    <!-- Normal stars -->
    <div
      v-for="(star, index) in stars"
      :key="'star-' + index"
      class="star"
      :style="{
        top: star.y + 'px',
        left: star.x + 'px',
        width: star.size + 'px',
        height: star.size + 'px',
        opacity: star.opacity,
        animationDelay: star.delay + 's'
      }"
    ></div>

    <!-- Shooting stars -->
    <div
      v-for="(star, index) in shootingStars"
      :key="'shoot-' + index"
      class="shooting-star"
      :style="{
        top: star.y + 'px',
        left: star.x + 'px',
        width: star.length + 'px',
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
  z-index: -1;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: shimmer 2s infinite alternate;
}

@keyframes shimmer {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
  100% { transform: scale(0.8); }
}

.shooting-star {
  position: absolute;
  height: 2px;
  background: linear-gradient(45deg, white, rgba(255,255,255,0));
  transform: rotate(45deg);
  opacity: 0.8;
}
</style>
