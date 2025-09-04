<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
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
      <HomeGrid>
        
      </HomeGrid>
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