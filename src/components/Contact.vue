<script setup>
import { ref } from 'vue'
import CommonUseButton from './buttons/CommonUseButton.vue'
import MessageMenu from './MessageMenu.vue'

const showMessageMenu = ref(false)
</script>

<template>
  <div 
  style="display: flex;
  gap: 200px;
  align-items: center;">
    <div 
    style="display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 50%;">
      <div 
      style="display: flex;
      gap: 20px;
      align-items: center;">
          <h2>Contact</h2>
          <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
      </div>
        <p>I’m actively seeking opportunities as a Front-End 
          Developer, where I can apply my skills in JavaScript, 
          Vue.js, Tailwind CSS, and modern web technologies to 
          build responsive and engaging user experiences. 
          If you’re a recruiter or company looking for a dedicated 
          developer with a strong foundation in both design and 
          functionality, I’d be excited to connect. Feel free to 
          reach out—I’d love to discuss how I can contribute to your 
          team. </p>
      
          <p>📩 Email: rolaxanderallen2002@gmail.com <br>
          📱 Phone: +63 916 147 1367 <br>
          🌐 LinkedIn: <a href="https://linkedin.com/in/xander-allen-rola" target="_blank" rel="noopener noreferrer">linkedin.com/in/xander-allen-rola</a> <br>
          💻 GitHub: <a href="https://github.com/Xander-Allen-Rola" target="_blank" rel="noopener noreferrer">github.com/Xander-Allen-Rola</a></p>
          <CommonUseButton
            class="message-btn"
            label="Send me a message"
            @click="showMessageMenu = true;"
            width="230px"/>
          <MessageMenu v-if="showMessageMenu" @close="showMessageMenu = false" />
    </div>
    <img src="../assets/images/contactmeformal.svg" style="height: 450px;  "/>
  </div>
</template>
