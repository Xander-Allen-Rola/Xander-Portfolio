<template>
  <div v-motion
    :initial="{ opacity: 0, y: 50, scale: 0.95 }"
    :visible="{ opacity: 1, y: 0, scale: 1 }"
    :duration="600">
  <hr/>
  <div class="scrolling-container">
    <div class="scrolling-track">
      <div class="scrolling-row">
        <h3>JavaScript</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Tailwind CSS</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Figma</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>GitHub</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Vue.js</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Node.js</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>UI/UX</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
      </div>

      <div class="scrolling-row">
        <h3>JavaScript</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Tailwind CSS</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Figma</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>GitHub</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Vue.js</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>Node.js</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
        <h3>UI/UX</h3>
        <img src="@/assets/icons/star.png" class="star-icon" />
      </div>
    </div>
  </div>
  <hr/>
  </div>
</template>

<style scoped>
hr{
  border: 1px solid rgba(255, 255, 255, 0.2); 
  width: 100vw;
}
.scrolling-container {
  width: 100vw;
  overflow: hidden;
  margin: 1rem 0;
}

.scrolling-track {
  display: flex;
  width: max-content;
  animation: scroll-left 20s linear infinite;
}

.scrolling-row {
  display: flex;
  gap: 9rem;
  font-size: 25px;
  white-space: nowrap;
  align-items: center;
  margin-right: 9rem;
}

.star-icon {
  width: 28px;
  height: 38px;
  object-fit: contain;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* MOBILE LAYOUT */
@media (max-width: 767px) {
  .scrolling-row {
    gap: 3rem;
    margin-right: 3rem;
  }
  h3{
    font-size: 20px;
  }
  .star-icon {
    width: 20px;
    height: 30px;
  }
}
</style>
