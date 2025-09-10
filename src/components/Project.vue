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
  <div class="project-card" :class="{ flipped: flipped }" @click="toggleFlip">
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
        <p>{{ description }}</p>
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

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: transform 0.6s;
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

/* Flip effect on click */
.project-card.flipped .card-front {
  transform: rotateY(180deg);
}

.project-card.flipped .card-back {
  transform: rotateY(0deg);
}

/* Floating animation */
@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
</style>
