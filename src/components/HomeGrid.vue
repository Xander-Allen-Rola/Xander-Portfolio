<script>
import TitleText from './TitleText.vue';
import cylinder from '@/assets/images/cylinder.png';
import pyramid from '@/assets/images/pyramid.png';
import smoothcircle from '@/assets/images/smoothcircle.png';
import spikedcircle from '@/assets/images/spikedcircle.png';
import surfacedcircle from '@/assets/images/surfacedcircle.png';

const STAR_COUNT = 20;

export default {
  name: "HomeGrid",
  components: { TitleText },
  data() {
    return {
      stars: Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        size: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      })),
      images: [
        { src: cylinder, top: 55, left: 82 },
        { src: pyramid, top: 61, left: -2 },
        { src: smoothcircle, top: 11, left: 8 },
        { src: spikedcircle, top: 0, left: 73 },
        { src: surfacedcircle, top: 46, left: 41 },
      ],
      mergedArea: {
        startRow: 2,
        endRow: 4,
        startCol: 2,
        endCol: 5,
      },
      isMobile: window.innerWidth <= 767,
    };
  },
  computed: {
    cells() {
      const merged = { ...this.mergedArea };

      // Extend merged area for mobile view
      if (this.isMobile) {
        merged.endRow = 5; // include row 5 in mobile
      }

      const cells = [];
      for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 6; col++) {
          if (row === merged.startRow && col === merged.startCol) {
            cells.push({
              row,
              col,
              merged: true,
              style: {
                gridRow: `${merged.startRow} / ${merged.endRow + 1}`,
                gridColumn: `${merged.startCol} / ${merged.endCol + 1}`,
              },
            });
          } else if (
            row >= merged.startRow &&
            row <= merged.endRow &&
            col >= merged.startCol &&
            col <= merged.endCol
          ) {
            continue;
          } else {
            cells.push({
              row,
              col,
              merged: false,
              style: {
                gridRow: row,
                gridColumn: col,
              },
            });
          }
        }
      }
      return cells;
    },
  },
  mounted() {
    // Floating images animation setup
    const imgs = document.querySelectorAll(".overlay-img");
    imgs.forEach(img => {
      const duration = 15 + Math.random() * 10;
      const delay = Math.random() * 5;
      img.style.animationDuration = `${duration}s`;
      img.style.animationDelay = `${delay}s`;
    });

    // Resize listener to detect mobile
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 767;
    });
  }
};
</script>

<template>
  <div class="homegrid-container">
    <!-- Stars -->
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="star"
      :style="{ top: star.y, left: star.x, width: star.size + 'px', height: star.size + 'px', animationDelay: star.delay + 's' }"
    ></div>

    <!-- Overlay images -->
    <img
      v-for="(img, index) in images"
      :key="index"
      :src="img.src"
      class="overlay-img float"
      :style="{ top: img.top + '%', left: img.left + '%' }"
      alt="floating overlay"
    />

    <!-- Grid -->
    <div class="grid-container">
      <div
        v-for="cell in cells"
        :key="`${cell.row}-${cell.col}`"
        style="background: transparent; border: 1px solid rgba(255, 255, 255, 0.2);"
        :style="cell.style"
      >
        <TitleText v-if="cell.merged" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.homegrid-container {
  position: relative;
  width: 100%;
  max-width: 1480px;
  height: 710px;
  margin: 0 auto;
}

/* Overlay images */
.overlay-img {
  position: absolute;
  width: 18%;
  z-index: 0;
  pointer-events: none;
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

/* Floating animation */
@keyframes floatRandom {
  0%   { transform: translate(0, 0) rotate(0deg); }
  25%  { transform: translate(40px, -50px) rotate(5deg); }
  50%  { transform: translate(-30px, 30px) rotate(-3deg); }
  75%  { transform: translate(50px, 40px) rotate(4deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

.float {
  animation-name: floatRandom;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

/* Stars */
.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 0;
  animation: shimmer 2s infinite alternate;
}

@keyframes shimmer {
  0% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(0.8); }
}
</style>
