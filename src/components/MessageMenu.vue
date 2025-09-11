<template>
  <teleport to="body">
    <!-- Transition wrapper -->
    <transition name="fade-overlay" @after-leave="emitClose">
      <div
        v-if="show"
        class="hireme-overlay"
        @click.self="startClose"
        role="dialog"
        aria-modal="true"
      >
        <div class="hireme-card">
          <button class="close-btn" @click="startClose" aria-label="Close">✕</button>

          <h3 class="title">Send a Message</h3>

          <form class="form" @submit.prevent="sendEmail">
            <!-- Email -->
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" class="input" required />
            </div>

            <!-- Subject -->
            <div class="form-group">
              <label for="subject">Subject *</label>
              <input type="text" id="subject" name="subject" class="input" required />
            </div>

            <!-- Message -->
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" rows="3" class="input" required></textarea>
            </div>

            <!-- Submit -->
            <div class="submit-btn">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const emit = defineEmits(['close'])
const show = ref(true)

function startClose() {
  show.value = false
}

function emitClose() {
  emit('close')
}

// Replace these with your EmailJS credentials
const SERVICE_ID = 'service_22s53fh'
const TEMPLATE_ID = 'template_349zpsk'
const PUBLIC_KEY = '55lj-utl5r10SoUxs'

function sendEmail(e) {
  const form = e.target

  emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value
    },
    PUBLIC_KEY
  )
  .then(() => {
    alert('✅ Your message was sent successfully!')
    form.reset()
    startClose()
  })
  .catch((error) => {
    console.error('Email send error:', error)
    alert('❌ Failed to send the message. Please try again later.')
  })
}
</script>

<style scoped>
/* Overlay */
.hireme-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(6px);
  z-index: 9999;
}

/* Card */
.hireme-card {
  position: relative;
  width: 450px;
  border-radius: 20px;
  padding: 24px;
  color: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  background:
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
  border: 2px solid transparent;
  transform-origin: center;
  animation: popIn 160ms ease;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  padding: 6px;
}

/* Fade transition */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.25s ease;
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

/* Pop in for card */
@keyframes popIn {
  from { opacity: 0; transform: translateY(-6px) scale(.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Form styling */
.title { 
  font-size: 20px; 
  font-weight: bold; 
  margin-bottom: 4px; 
  text-align: center; 
}
.subtitle { 
  font-size: 13px; 
  color: #bbb; 
  margin-bottom: 16px; 
  text-align: center; 
}
.form { 
  display:flex; 
  flex-direction:column; 
  gap:12px; 
}
.form-group label { 
  font-size:13px; 
  margin-bottom:4px; 
  display:block; 
  color:#ccc; 
}
.input { 
  width:100%; 
  padding:8px 10px; 
  border-radius:8px; 
  border:1px solid #444; 
  background:#2a2a2a; 
  color:#fff; 
  font-size:14px; 
  outline:none; 
  transition:border 0.2s; 
}
.input:focus { 
  border: 1px solid #FFD49C; 
}
textarea.input { resize: none; }
.submit-btn { 
  display:flex; 
  justify-content:flex-end; 
  margin-top:10px; 
}
.submit-btn button { 
  padding:10px 18px; 
  background:linear-gradient(90deg,#FFD49C,#7A87FB); 
  color:#1C1C1C; 
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 24px / 50%;
  cursor: pointer;

  /* Two layers: inner + border */
  background:
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB, #FFD49C) border-box;

  background-size: 200% 100%, 200% 100%; /* both layers movable */
  background-position: left center, left center; /* start position */
  background-clip: padding-box, border-box;

  transition:
    background-position 0.6s ease-in-out,
    filter 0.3s ease,
    transform 0.3s;
  
}
.submit-btn button:hover { 
  background-position: right center, right center;
  filter: brightness(0.9);
  transform: translateY(-2px);
}
</style>
