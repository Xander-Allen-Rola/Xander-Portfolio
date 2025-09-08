<script setup>
import XanderLogo from './components/XanderLogo.vue'
import NavigationButtons from './components/Navigation.vue'
import Profile from './components/Profile.vue'
import HomeGrid from './components/HomeGrid.vue'
import SubInfo from './components/SubInfo.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SocialsButtons from './components/SocialsButtons.vue'
</script>

<template>
  <div
  style="max-width: 1300px;
  position: absolute;
  left: 50%;
  top: 30px;                /* Anchor to top */
  transform: translateX(-50%);">
    <header
    style="display: flex;
    align-items: center;
    justify-content: center; /* Center header items horizontally */">
      <XanderLogo />
      <NavigationButtons />
      <Profile />
    </header>
    <main
    style="display: flex;
    flex-direction: column;
    align-items: center; /* Center main items horizontally */">
        <HomeGrid style="margin-top: 30px;" />
        <SubInfo />
    </main>
      <AboutMe style="margin-top:70px"/>
      <Projects style="margin-top: 100px"/>
      <Contact style="margin-top: 100px"/>
    <footer
    style="display: flex;
    align-items: center;
    justify-content: center; /* Center footer items horizontally */
    margin-top: 100px">
      <XanderLogo />
      <SocialsButtons />
      <Profile />
    </footer>
  </div>
</template>