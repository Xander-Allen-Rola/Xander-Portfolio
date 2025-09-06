<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="app-container">
    <header>
      <XanderLogo />
      <NavigationButtons />
      <Profile />
    </header>
    <main>
        <HomeGrid style="margin-top: 30px;" />
        <SubInfo />
    </main>
      <AboutMe style="margin-top:70px"/>
      <Projects style="margin-top: 100px"/>
      <Contact style="margin-top: 100px"/>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 1560px;
}

header {
  display: flex;
  align-items: center;
  justify-content: center; /* Center header items horizontally */
}

main {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center main items horizontally */
}

:global(body) {
  overflow-x: hidden;
}
</style>