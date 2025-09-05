<script setup>
import Project from './Project.vue'
import ProjectImgPlaceholder from '@/assets/images/projectplaceholder.png'
</script>

<template>
    <div class="projects-container" style="margin-top: 100px;">
        <div class="title-container">
            <h2 style="font-size: 2rem">Featured Projects</h2>
            <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
        </div>
        <div class="project-box-container">
            <Project name="Project Name"
            description="Description of the project goes here. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :image="ProjectImgPlaceholder" />
            <Project name="Project Name"
            description="Description of the project goes here. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :image="ProjectImgPlaceholder" />
            <Project name="Project Name"
            description="Description of the project goes here. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :image="ProjectImgPlaceholder" />
        </div>
    </div>
</template>

<style scoped>
.title-container {
  display: flex;
  gap: 20px;
  align-items: center;
}
.project-box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}
</style>