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
            :image="emergentechoes"
            githubLink="https://github.com/janrizmlibres/emergent-echoes.git" />
            <Project name="XU-NSP Information Management System"
            description="The XU-NSP Information Management System 
            (IMS) is a comprehensive, offline-based information 
            management system for Xavier University's Night 
            School Program. It was developed to replace 
            traditional spreadsheet methods and streamline 
            administrative tasks for staff and administrators, 
            providing intuitive data dashboards for metrics 
            analysis and robust management tools for student, 
            volunteer, staff, and class-related data. As a key 
            contributor to this project, I specialized in the 
            Data Dashboard and Volunteer Information Management. 
            My work on the data dashboard provided administrators 
            with at-a-glance insights into enrollment trends and 
            demographics, significantly enhancing decision-making 
            capabilities. For the volunteer management feature, 
            I designed and implemented the functionality to add, 
            view, update, and export volunteer data, which 
            streamlined administrative processes. My role was 
            essential in providing the program with powerful 
            analytical tools and efficient data management for 
            its volunteer staff."
            :image="xunspims"
            githubLink="https://github.com/janrizmlibres/nsp-ims-app.git" />
        </div>
    </div>
</template>