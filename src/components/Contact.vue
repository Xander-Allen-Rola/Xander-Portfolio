<script setup>
import CommonUseButton from './buttons/CommonUseButton.vue'
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
          🌐 LinkedIn: linkedin.com/in/xander-allen-rola <br>
          💻 GitHub: github.com/Xander-Allen-Rola</p>
          <CommonUseButton label="Send me a message" width="230px"/>
    </div>
    <img src="../assets/images/contactmeformal.svg" style="height: 450px;  "/>
  </div>
</template>