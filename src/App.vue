<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
import AboutMe from './components/AboutMe.vue'
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
    <abt>
      <AboutMe style="margin-top:70px"/>
    </abt>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1480px;
  border: red solid 1px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 470px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center; /* Center header items horizontally */
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