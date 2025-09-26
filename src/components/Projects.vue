<script setup>
import Project from './Project.vue'
import ProjectImgPlaceholder from '@/assets/images/projectplaceholder.png'
import xunspims from '@/assets/images/xunspims.png' 
import emergentechoes from '@/assets/images/emergentechoes.png'
import SwipeShelf from '@/assets/images/SwipeShelf.png'
</script>

<template>
    <div class="projects-container">
        <div 
        class ="projects-title">
            <h2>Projects</h2>
            <img class="title-icon" src="../assets/icons/doublestar.svg"/>
        </div>
        <div class="projects-grid">
            <Project name="SwipeShelf (Coming Soon)"
            description="A modern book discovery and 
            recommendation platform that makes exploring new reads 
            simple and engaging. Users can swipe through book 
            suggestions, save favorites to their personal shelf, 
            and skip titles they’re not interested in. The app 
            comes preloaded with book data and reviews from the 
            web, ensuring a rich experience from day one, with 
            planned features for friend-based recommendations and 
            social reviews."
            :image="SwipeShelf"
            githubLink="https://github.com/Xander-Allen-Rola/swipeshelf.git"
            :tools="['TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL']" />
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
            description="The XU-NSP Information Management System 
            (IMS) is an offline system for Xavier University’s 
            Night School Program that replaces spreadsheets and 
            streamlines administrative tasks. I worked on the Data 
            Dashboard and Volunteer Management modules, enabling 
            quick enrollment insights and CRUD on volunteer data, 
            improving efficiency in managing students, staff, 
            volunteers, and classes."
            :image="xunspims"
            githubLink="https://github.com/janrizmlibres/nsp-ims-app.git"
            :tools="['JavaScript', 'Vue', 'Tailwind CSS', 'express.js', 'MariaDB']" />
        </div>
    </div>
</template>

<style scoped>
.title-icon {
  height: 35px;
}

.projects-title{
    display: flex;
    gap: 20px;
    align-items: center;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    margin-top: 50px;
    justify-items: center;
}

@media (max-width: 1044px) {
    .projects-grid {
        grid-template-columns: 1fr !important;
    }
}
@media (max-width: 767px) {
    .title-icon {
        height: 30px;
    }
    .projects-title {
        gap: 15px;
    }
}
</style>