<script setup>
import { ref, onMounted, nextTick } from 'vue'
import NavButton from './buttons/NavButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'

const activeIndex = ref(0)
const buttons = [
  { icon: faHouse, label: '' },
  { label: 'About' },
  { label: 'Projects' },
  { label: 'Contact' }
]

const navRef = ref(null)
const indicatorStyle = ref({})

const updateIndicator = () => {
  const nav = navRef.value
  if (!nav) return
  const btns = nav.querySelectorAll('button')
  const activeBtn = btns[activeIndex.value]
  if (!activeBtn) return

  const { offsetLeft, offsetWidth } = activeBtn
  indicatorStyle.value = {
    width: offsetWidth + 'px',
    left: offsetLeft + 'px'
  }
}

onMounted(() => {
  nextTick(updateIndicator)
})
</script>

<template>
  <nav class="navigation" ref="navRef">
    <div class="indicator" :style="indicatorStyle"></div>
    <NavButton
      v-for="(btn, i) in buttons"
      :key="btn.label || i"
      :label="btn.label"
      :active="activeIndex === i"
      @click="activeIndex = i; updateIndicator()"
    >
      <template v-if="btn.icon">
        <FontAwesomeIcon :icon="btn.icon" />
      </template>
    </NavButton>
  </nav>
</template>

<style scoped>
.navigation {
  position: relative;
  display: flex;
  padding: 6px 10px;
  gap: 12px;
  align-items: center;
  border-radius: 999px;
  border: 2px solid transparent;
  background: 
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
}

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  border-radius: 999px;
  background: #292929;
  transition: left 0.3s, width 0.3s; /* smooth sliding */
  z-index: 0;
}
</style>
