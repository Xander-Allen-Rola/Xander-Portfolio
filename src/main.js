import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 👇 import MotionPlugin
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

// 👇 register it globally
app.use(MotionPlugin)

app.mount('#app')
