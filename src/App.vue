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
      <XanderLogo />
      <NavigationButtons />
      <Profile />
    </header>
    <main>
        <HomeGrid style="margin-top: 50px;" />
        <SubInfo />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto; /* Center horizontally */
  padding: 0;
  border: red solid 1px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center; /* Center header items horizontally */
  gap: 16px;
  margin-top: 50px;
  border: red solid 1px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center main items horizontally */
  border: red solid 1px;
}
</style>