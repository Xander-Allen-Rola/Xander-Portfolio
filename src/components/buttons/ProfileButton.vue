<template>
  <button class="nav-btn">
    <slot>{{ label }}</slot>
  </button>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.nav-btn {
  width: 100px;
  height: 48px;
  font-size: 1.1rem;
  background: linear-gradient(90deg, #7A87FB 0%, #FFD49C 100%);
  border: none;
  cursor: pointer;
  color: #222;
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
