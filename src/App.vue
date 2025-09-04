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
      <div class="main-content">
        <HomeGrid />
        <SubInfo />
      </div>
    </main>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0px;
  width: 100rem;
  height: 50rem;
  max-width: 500vw;
  max-height: 100dvh;
  margin: auto;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100vw; /* Make it full viewport width */
  align-items: stretch; /* Ensure children stretch */
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>