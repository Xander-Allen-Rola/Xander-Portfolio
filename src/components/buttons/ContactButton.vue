<template>
  <button class="nav-btn oblong-btn">
    Send me a message
  </button>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.nav-btn {
  width: 210px;
  height: 48px;
  font-size: 16px;
  background: 
    linear-gradient(90deg, #7A87FB 0%, #FFD49C 100%) padding-box,
    linear-gradient(90deg, #FFD49C 0%, #7A87FB 100%) border-box;
  border: 1px solid transparent;
  border-radius: 24px / 50%;
  cursor: pointer;
  color: #222;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  background-clip: padding-box, border-box;
  padding: 0 20px;
  transition: filter 0.15s;
}
.nav-btn:hover {
  filter: brightness(1.08);
  cursor: pointer;
}
.oblong-btn {
  border-radius: 24px / 50%;
}
</style>