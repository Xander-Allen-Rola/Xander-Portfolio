<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
</script>

<template>
  <div class="app-container">
    <header>
      <div>
        <XanderLogo />
      </div>
      <NavigationButtons />
      <Profile />
    </header>
    <main>
        <HomeGrid />
        <SubInfo />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0px;
  height: 50rem;
  margin: auto;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>