<script setup>
import Project from './Project.vue'
import ProjectImgPlaceholder from '@/assets/images/projectplaceholder.png'
import xunspims from '@/assets/images/xunspims.png' 
import emergentechoes from '@/assets/images/emergentechoes.png'
</script>

<template>
    <div class="projects-container">
        <div 
        style="display: flex;
        gap: 20px;
        align-items: center;">
            <h2>Projects</h2>
            <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
        </div>
        <div 
        style="display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        margin-top: 50px;
        border: blue 1px solid;
        justify-items: center;">
            <Project name="Emergent Echoes"
            description="This project developed and evaluated a 
            resource-based AI algorithm for dynamic NPC behaviors 
            in a 2D simulation. A/B testing showed no significant 
            difference in player immersion between AI-generated 
            and human-scripted NPCs. As UI/UX Designer and 
            Developer, I created a standardized interface with 
            status bars, an NPC prompt system, and floating text 
            for fair evaluation, and contributed to the final 
            paper, demonstrating that procedural NPC generation 
            can match human-designed content while improving 
            development efficiency."
            :image="emergentechoes"
            githubLink="https://github.com/janrizmlibres/emergent-echoes.git"
            :tools="['Godot', 'C#']" />
            <Project name="Information Management System"
            description="The XU-NSP Information Management System (IMS) is an offline system for Xavier University’s Night School Program that replaces spreadsheets and streamlines administrative tasks. I worked on the Data Dashboard and Volunteer Management modules, enabling quick enrollment insights and CRUD on volunteer data, improving efficiency in managing students, staff, volunteers, and classes."
            :image="xunspims"
            githubLink="https://github.com/janrizmlibres/nsp-ims-app.git"
            :tools="['JavaScript', 'Vue', 'Tailwind CSS', 'express.js', 'MariaDB']" />
        </div>
    </div>
</template>