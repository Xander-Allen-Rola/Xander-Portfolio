<template>
  <button class="nav-btn">{{ label }}</button>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.nav-btn {
  width: 140px;
  height: 48px;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.nav-btn:hover {
  cursor: pointer;
}
</style>

<script setup>
const props = defineProps({
  label: {
    type: String,
  }
})
</script>
