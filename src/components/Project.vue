<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

defineProps({
  name: String,
  description: String,
  image: String,
  githubLink: String,         // GitHub link prop
  tools: {                     // Array of tools
    type: Array,
    default: () => []
  }
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
          <div class="title-text">
            <h1 style="max-width: 400px;">{{ name }}</h1>
            <!-- GitHub Button -->
            <a 
              :href="githubLink" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="github-btn"
              @click.stop
            >
              <FontAwesomeIcon :icon="faGithubAlt" />
            </a>
          </div>
          <div class="tools">
            <div class="tool" v-for="tool in tools" :key="tool">{{ tool }}</div>
          </div>
          <p style="text-align: justify;">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  width: 100%;
  max-width: 550px;
  height: 620px;
  min-width: 450px;
  perspective: 1000px;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  animation: float 6s ease-in-out infinite;
  box-sizing: border-box;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
}

.project-card:hover .card-inner {
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.3), 0 0 30px rgba(0, 255, 255, 0.2);
}

.project-card:hover .card-inner.flipped {
  transform: rotateY(180deg) translateY(-10px) rotate(-1deg);
}

.project-card:hover .card-inner:not(.flipped) {
  transform: translateY(-10px) rotate(-1deg);
}

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
  text-align: center;
  flex-direction: column;
  background: linear-gradient(145deg, #1b1b1b, #111);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.1);
  padding: 30px;
  box-sizing: border-box;
}

.project-image {
  height: 80%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  width: 100%;
  margin-bottom: 20px;
}

.project-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
}

.tools{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.tool{
  background: #292929;
  border-radius: 999px;
  padding: 5px 20px;
  border: grey 1px solid;
  white-space: nowrap;
}

.project-text h1 {
  font-weight: bold;
  font-size: 2rem;
}

.card-back {
  transform: rotateY(180deg);
}

.title-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-align: center;
}

/* GitHub button styles */
.github-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  min-width: 48px;
  min-height: 48px;
  border-radius: 12px; /* rounded square */
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 28px;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
  flex-shrink: 0;
  overflow: hidden;
}

.github-btn .fa-icon, .github-btn svg {
  width: 1em;
  height: 1em;
  min-width: 28px;
  min-height: 28px;
  max-width: 36px;
  max-height: 36px;
  margin: auto;
  display: block;
}

.github-btn:hover {
  background: rgba(0, 255, 255, 0.15);
  color: #00ffff;
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}
</style>
