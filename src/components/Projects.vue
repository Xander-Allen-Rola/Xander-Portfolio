<script setup>
import Project from './Project.vue'
import ProjectImgPlaceholder from '@/assets/images/projectplaceholder.png'
</script>

<template>
    <div class="projects-container">
        <div 
        style="display: flex;
        gap: 20px;
        align-items: center;">
            <h2>Featured Projects</h2>
            <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
        </div>
        <div 
        style="display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        margin-top: 50px;">
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