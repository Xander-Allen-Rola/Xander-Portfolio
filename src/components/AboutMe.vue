<template>
  <div class="about-me-container">
      <div class="title-container">
        <h2 class="about-title">About Me</h2>
        <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
      </div>
    <div class="circles-container">
      <div class="circle-number">1</div>
      <div class="vertical-line"></div>
      <div class="circle-number">2</div>
      <div class="vertical-line"></div>
      <div class="circle-number">3</div>
    </div>
  </div>
</template>

<style scoped>
.about-me-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start; /* circles stay at the left */
}
.title-container {
  display: flex;
  gap: 20px;
  border: red solid 1px;
  align-items: center;
}
.about-title {
  font-size: 2rem;
}
.circle-number {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.vertical-line {
  width: 1px;
  height: 250px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2px;
}

.circles-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center circles and lines horizontally in their column */
  border: red solid 1px;
  gap: 15px;
}
</style>