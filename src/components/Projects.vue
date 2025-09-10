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
            <Project name="Emergent Echoes"
            description="This research project developed and 
            evaluated a resource-based AI decision algorithm 
            for generating dynamic NPC behaviors in a 2D 
            simulation. We conducted A/B testing to compare 
            these procedurally generated NPCs with human-scripted 
            ones, finding no statistically significant difference 
            in player immersion or engagement between the two. 
            As a key contributor, I served as the UI/UX Designer 
            and Developer, responsible for creating a 
            standardized user interface with features like status 
            bars, an NPC prompt system, and floating text to 
            ensure a fair and unbiased evaluation. I also 
            contributed to the writing of the final paper, helping 
            to document our findings and conclude that this 
            procedural approach can match the quality of 
            human-designed content, while offering greater 
            efficiency in game development."
            :image="ProjectImgPlaceholder" />
            <Project name="Project Name"
            description="Description of the project goes here. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            :image="ProjectImgPlaceholder" />
        </div>
    </div>
</template>