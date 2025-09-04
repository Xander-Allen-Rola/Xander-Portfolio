<script setup>
import ProfileButton from './buttons/ProfileButton.vue';
</script>

<template>
  <div class="title-text">
    <h1>Xander Allen Rola</h1>
    <p>Full-Stack Developer | Passion for Clean Code and Creative Solutions</p>
    <ProfileButton label="Hire Me" class="oblong-btn" />
  </div>
</template>

<style scoped>
.title-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.title-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.title-text p {
  font-size: 1.25rem;
  color: #ddd;
}

.title-text .oblong-btn {
  margin-top: 2rem;
  width: 160px;
  font-size: 1.1rem;
}
</style>