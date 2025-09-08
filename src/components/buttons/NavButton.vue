<script setup>
const props = defineProps({
  label: {
    type: String,
  }
})
</script>

<template>
  <button class="nav-btn">
    <slot>{{ label }}</slot>
  </button>
</template>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.nav-btn {
  height: 40px;
  font-size: 19px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  color: #fff;
  border-radius: 999px;
  font-family: 'Poppins', sans-serif;
}
.nav-btn:hover {
  cursor: pointer;
}
</style>