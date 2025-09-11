<script>
import TitleText from './TitleText.vue';

const mergedArea = {
  startRow: 2,
  endRow: 4,
  startCol: 2,
  endCol: 5,
};

// number of stars
const STAR_COUNT = 20;

export default {
  name: "HomeGrid",
  components: { TitleText },
  data() {
    return {
      stars: Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * 1480, // random X in container
        y: Math.random() * 710,  // random Y in container
        size: 2 + Math.random() * 3, // random size 2-5px
        delay: Math.random() * 5, // random animation delay
      })),
    };
  },
  computed: {
    cells() {
      const cells = [];
      for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 6; col++) {
          if (
            row === mergedArea.startRow &&
            col === mergedArea.startCol
          ) {
            cells.push({
              row,
              col,
              merged: true,
              style: {
                gridRow: `${mergedArea.startRow} / ${mergedArea.endRow + 1}`,
                gridColumn: `${mergedArea.startCol} / ${mergedArea.endCol + 1}`,
              },
            });
          } else if (
            row >= mergedArea.startRow &&
            row <= mergedArea.endRow &&
            col >= mergedArea.startCol &&
            col <= mergedArea.endCol
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
    const imgs = document.querySelectorAll(".overlay-img");
    imgs.forEach(img => {
      const duration = 15 + Math.random() * 10; // 15–25s
      const delay = Math.random() * 5; // stagger start
      img.style.animationDuration = `${duration}s`;
      img.style.animationDelay = `${delay}s`;
    });
  }
};
</script>

<template>
    <div 
      style="position: relative; 
      display: flex; 
      justify-content: center; 
      width: 1480px; 
      height: 710px;">

      <!-- Shimmering stars -->
      <div
        v-for="(star, index) in stars"
        :key="index"
        class="star"
        :style="{
          top: star.y + 'px',
          left: star.x + 'px',
          width: star.size + 'px',
          height: star.size + 'px',
          animationDelay: star.delay + 's'
        }"
      ></div>

      <!-- Overlay images -->
      <img alt="cylinder" src="@/assets/images/cylinder.png" class="overlay-img float" style="top: 330px; left: 1120px;" />
      <img alt="pyramid" src="@/assets/images/pyramid.png" class="overlay-img float" style="top: 380px; left: -130px;" />
      <img alt="smoothcircle" src="@/assets/images/smoothcircle.png" class="overlay-img float" style="top: -12px; left: 30px;" />
      <img alt="spikedcircle" src="@/assets/images/spikedcircle.png" class="overlay-img float" style="top: -60px; left: 990px;" />
      <img alt="surfacedcircle" src="@/assets/images/surfacedcircle.png" class="overlay-img float" style="top: 280px; left: 530px;" />

      <!-- The grid itself -->
      <div 
        style="display: grid; 
        grid-template-columns: repeat(6, 1fr); 
        grid-template-rows: repeat(7, 1fr);
        width: 100%; 
        height: 100%; 
        background: transparent; 
        position: relative; 
        z-index: 1;">
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
.overlay-img {
  position: absolute;
  width: 430px;
  z-index: 0;
  pointer-events: none;
}

/* Floating random movement for images */
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
