<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CommonUseButton from './buttons/CommonUseButton.vue'
import MessageMenu from './MessageMenu.vue'

const showMessageMenu = ref(false)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="contact-container">
    <!-- Desktop / Tablet view -->
    <template v-if="!isMobile">
      <div class="contact-content">
        <div class="contact-title">
          <h2>Contact</h2>
          <img src="../assets/icons/doublestar.svg" class="title-icon"/>
        </div>

        <p>
          I’m actively seeking opportunities as a Front-End Developer, where I can apply my
          skills in JavaScript, Vue.js, Tailwind CSS, and modern web technologies to build
          responsive and engaging user experiences. If you’re a recruiter or company looking
          for a dedicated developer with a strong foundation in both design and functionality,
          I’d be excited to connect. Feel free to reach out—I’d love to discuss how I can
          contribute to your team.
        </p>

        <p>
          📩 Email: rolaxanderallen2002@gmail.com <br>
          📱 Phone: +63 916 147 1367 <br>
          🌐 LinkedIn:
          <a href="https://linkedin.com/in/xander-allen-rola" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/xander-allen-rola
          </a> <br>
          💻 GitHub:
          <a href="https://github.com/Xander-Allen-Rola" target="_blank" rel="noopener noreferrer">
            github.com/Xander-Allen-Rola
          </a>
        </p>

        <CommonUseButton
          class="message-btn"
          label="Send me a message"
          @click="showMessageMenu = true"
          width="230px"
        />
        <MessageMenu v-if="showMessageMenu" @close="showMessageMenu = false" />
      </div>

      <img src="../assets/images/contactmeformal.svg" class="contact-image"/>
    </template>

    <!-- Mobile view -->
    <template v-else>
      <div class="contact-content">
        <div class="contact-title">
          <h2>Contact</h2>
          <img src="../assets/icons/doublestar.svg" class="title-icon"/>
        </div>

        <p>
          I’m actively seeking opportunities as a Front-End Developer, where I can apply my
          skills in JavaScript, Vue.js, Tailwind CSS, and modern web technologies to build
          responsive and engaging user experiences. If you’re a recruiter or company looking
          for a dedicated developer with a strong foundation in both design and functionality,
          I’d be excited to connect. Feel free to reach out—I’d love to discuss how I can
          contribute to your team.
        </p>

        <img src="../assets/images/contactmeformal.svg" class="contact-image"/>

        <p style="text-align: center;">
          📩 Email: rolaxanderallen2002@gmail.com <br>
          📱 Phone: +63 916 147 1367 <br>
          🌐 LinkedIn:
          <a href="https://linkedin.com/in/xander-allen-rola" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/xander-allen-rola
          </a> <br>
          💻 GitHub:
          <a href="https://github.com/Xander-Allen-Rola" target="_blank" rel="noopener noreferrer">
            github.com/Xander-Allen-Rola
          </a>
        </p>

        <CommonUseButton
          class="message-btn"
          label="Send me a message"
          @click="showMessageMenu = true"
        />
        <MessageMenu v-if="showMessageMenu" @close="showMessageMenu = false" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  gap: 15%;
  align-items: center;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 50%;
}

.contact-title {
  display: flex;
  gap: 20px;
  align-items: center;
}

.title-icon {
  height: 35px;
}

.contact-image {
  max-height: 450px;
  max-width: 450px;
  height: 50%;
  width: 50%;
}

.mssage-btn {
  width: 100%;
}

@media (max-width: 767px) {
  .contact-container {
    flex-direction: column;
    gap: 20px;
  }

  p{
    text-align: justify;
  }

  .message-btn {
    align-self: center;
  }

  .contact-image {
    max-height: 450px;
    max-width: 450px;
    height: 100%;
    width: 100%;
    align-self: center;
  }

  .contact-content {
    max-width: 100%;
  }

  .title-icon {
    height: 30px;
  }
  .contact-title{
    gap: 15px;
  }
}
</style>
