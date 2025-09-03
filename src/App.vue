<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
</script>

<template>
  <header>
    <div style="margin-left: 200px;">
      <XanderLogo />
    </div>
    <NavigationButtons />
    <Profile />
  </header>
</template>

<style scoped>
body {
  margin: 0;
}
header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
