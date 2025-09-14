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

const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="nav-btn"
    :class="props.class"
    :style="props.width ? { width: props.width } : {}"
    @click="$emit('click')"
  >
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
  background:
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB, #FFD49C) border-box;
  background-size: 200% 100%, 200% 100%;
  background-position: left center, left center;
  background-clip: padding-box, border-box;
  transition:
    background-position 0.6s ease-in-out,
    filter 0.3s ease,
    transform 0.3s;
}

.nav-btn:hover {
  background-position: right center, right center;
  filter: brightness(0.9);
  transform: translateY(-2px);
}

.nav-btn:active {
  transform: translateY(2px);
}
</style>