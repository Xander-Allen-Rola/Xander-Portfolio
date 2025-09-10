<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  description: String,
  image: String
})

const flipped = ref(false)

function toggleFlip() {
  flipped.value = !flipped.value
}
</script>

<template>
  <div class="project-card" @click="toggleFlip">
    <div class="card-inner" :class="{ flipped: flipped }">
      <!-- Front -->
      <div class="card-front">
        <img :src="image" class="project-image" />
        <div class="project-text">
          <h1>{{ name }}</h1>
        </div>
      </div>

      <!-- Back -->
      <div class="card-back">
        <div class="project-text">
          <h1>{{ name }}</h1>
          <p style="text-align: justify;">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  width: 550px;
  height: 620px;
  perspective: 1000px;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  /* Floating animation */
  animation: float 6s ease-in-out infinite;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
}

/* Hover goes with the flipping */
.project-card:hover .card-inner {
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.2);
}

.project-card:hover .card-inner.flipped {
  transform: rotateY(180deg) translateY(-10px) rotate(-1deg);
}

.project-card:hover .card-inner:not(.flipped) {
  transform: translateY(-10px) rotate(-1deg);
}

/* Flip effect on click */
.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(145deg, #1b1b1b, #111);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.1);
  padding: 30px;
  box-sizing: border-box;
}

/* Front content */
.project-image {
  height: 80%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  width: 100%;
}

.project-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  color: #fff;
}

.project-text h1 {
  font-weight: bold;
  font-size: 2rem;
}

/* Back card content */
.card-back {
  transform: rotateY(180deg);
}

/* Floating animation */
@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
</style>
