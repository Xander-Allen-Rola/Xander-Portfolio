<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import NavButton from './buttons/NavButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-regular-svg-icons'

const activeIndex = ref(0)
const buttons = [
  { icon: faHouse, label: '', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' }
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

// Scroll to a section when clicking a button
const scrollToSection = (target) => {
  if (target === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const section = document.getElementById(target)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Update activeIndex based on scroll position
const updateActiveOnScroll = () => {
  let closestIndex = 0
  let minDistance = Infinity

  buttons.forEach((btn, i) => {
    const section = document.getElementById(btn.target)
    if (!section) return

    const distance = Math.abs(section.getBoundingClientRect().top)
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = i
    }
  })

  activeIndex.value = closestIndex
  updateIndicator()
}

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('scroll', updateActiveOnScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveOnScroll)
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
      @click="() => { activeIndex = i; updateIndicator(); scrollToSection(btn.target) }"
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
  transition: left 0.3s, width 0.3s;
  z-index: 0;
}
</style>
