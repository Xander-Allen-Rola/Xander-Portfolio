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
  height: 48px;
  font-size: 16px;
  color: #222;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  padding: 0 20px;
  border: 2px solid transparent;
  border-radius: 24px / 50%;
  cursor: pointer;

  /* Inner gradient (animated) + static border gradient */
  background:
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;

  background-size: 200% 100%, 100% 100%;
  background-position: left center, center;
  background-clip: padding-box, border-box;

  transition: background-position 0.6s ease-in-out, filter 0.3s ease;
}

.nav-btn:hover {
  background-position: right center, center; /* only inner animates */
  filter: brightness(1.08);
}
</style>