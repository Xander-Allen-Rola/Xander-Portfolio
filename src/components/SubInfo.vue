<template>
  <hr style="border: 1px solid rgba(255, 255, 255, 0.2); width: 100vw;" />
  <div class="scrolling-container">
    <div class="scrolling-track">
      <!-- One full row -->
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
        <!-- last star with extra spacing -->
        <img src="@/assets/icons/star.png" class="star-icon" style="margin-right: 9rem;" />
      </div>

      <!-- duplicate row -->
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
        <!-- last star with extra spacing -->
        <img src="@/assets/icons/star.png" class="star-icon" style="margin-right: 9rem;" />
      </div>
    </div>
  </div>
  <hr style="border: 1px solid rgba(255, 255, 255, 0.2); width: 100vw;" />
</template>

<style scoped>
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
  gap: 9rem;           /* consistent spacing between items */
  font-size: 25px;
  white-space: nowrap;
  align-items: center;
}

.star-icon {
  width: 28px;
  height: 38px;
  object-fit: contain;
}

/* Marquee effect */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* move exactly half since we duplicated */
  }
}
</style>
