<template>
  <div class="grid-container">
    <div
      v-for="cell in 42"
      :key="cell"
      class="grid-cell"
      :class="{ 'no-border': isNoBorder(cell - 1) }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HomeGrid",
  methods: {
    isNoBorder(index) {
      // Convert index to (row, col)
      const row = Math.floor(index / 6) + 1;
      const col = (index % 6) + 1;
      return (
        row >= 2 && row <= 5 &&
        col >= 2 && col <= 5
      );
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 80vw; /* Reduce width for better centering */
  height: 70vh;
  max-width: 1800px;
  max-height: 900px;
  background: transparent;
  box-sizing: border-box;
  margin: 40px auto 0 auto; /* Center horizontally */
}

.grid-cell {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2); /* 20% opacity */
  min-width: 0;
  min-height: 0;
}

.no-border {
  border: none !important;
}
</style>