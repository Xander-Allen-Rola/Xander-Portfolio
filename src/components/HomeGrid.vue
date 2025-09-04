<template>
  <div class="grid-center-wrapper">
    <div class="grid-wrapper">
      <!-- Overlay images -->
      <img
        alt="cylinder"
        src="@/assets/images/cylinder.png"
        class="overlay-img"
        :style="{ top: '330px', left: '1120px' }"
      />
      <img
        alt="pyramid"
        src="@/assets/images/pyramid.png"
        class="overlay-img pyramid-img"
        :style="{ top: '380px', left: '-130px' }"
      />
      <img
        alt="smoothcircle"
        src="@/assets/images/smoothcircle.png"
        class="overlay-img smoothcircle-img"
        :style="{ top: '-12px', left: '30px' }"
      />
      <img
        alt="spikedcircle"
        src="@/assets/images/spikedcircle.png"
        class="overlay-img spikedcircle-img"
        :style="{ top: '-60px', left: '990px' }"
      />
      <img
        alt="surfacedcircle"
        src="@/assets/images/surfacedcircle.png"
        class="overlay-img surfacedcircle-img"
        :style="{ top: '280px', left: '530px' }"
      />

      <!-- The grid itself -->
      <div class="grid-container">
        <div
          v-for="cell in cells"
          :key="`${cell.row}-${cell.col}`"
          class="grid-cell"
          :style="cell.style"
        >
          <TitleText v-if="cell.merged" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleText from './TitleText.vue';

const mergedArea = {
  startRow: 2,
  endRow: 4,
  startCol: 2,
  endCol: 5,
};

export default {
  name: "HomeGrid",
  components: { TitleText },
  computed: {
    cells() {
      const cells = [];
      for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 6; col++) {
          // Only render merged cell once at top-left
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
          }
          // Skip other cells in merged area
          else if (
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
};
</script>

<style scoped>
.grid-center-wrapper {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85vh;
}

.grid-wrapper {
  position: relative;
  width: 1480px;
  height: 710px;
}

.overlay-img {
  position: absolute;
  width: 430px;
  z-index: 0;
  pointer-events: none;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
}

.grid-cell {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>