<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  class: {
    type: String,
    default: ''
  },
  width: {
    type: String
  }
})
</script>

<template>
  <button class="nav-btn" :class="props.class" :style="props.width ? { width: props.width } : {}">
    <slot>{{ label }}</slot>
  </button>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
.nav-btn {
  /* width is now customizable via prop */
  height: 48px;
  font-size: 16px;
  background: 
    linear-gradient(90deg, #7A87FB 0%, #FFD49C 100%) padding-box, /* inner gradient */
    linear-gradient(90deg, #FFD49C 0%, #7A87FB 100%) border-box;  /* border gradient */
  border: 1px solid transparent;
  border-radius: 24px / 50%;
  cursor: pointer;
  color: #222;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  background-clip: padding-box, border-box;
  padding: 0 20px;   /* Added for more spacing */
}
.nav-btn:hover {
  cursor: pointer;
  filter: brightness(1.08);
}
</style>