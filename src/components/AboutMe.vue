<template>
  <div class="legend-container">
      <div class="title-container">
        <h2 class="about-title">About Me</h2>
        <img src="../assets/icons/doublestar.svg" style="height: 35px;"/>
      </div>

    <div class="description-container">
      <div class="circles-container">
        <div class="circle-number">1</div>
        <div class="vertical-line"></div>
        <div class="circle-number">2</div>
        <div class="vertical-line"></div>
        <div class="circle-number">3</div>
        <div class="vertical-line"></div>
        <div class="circle-number">4</div>
        <div class="vertical-line"></div>
      </div>
      <div class="text-container">
        <img class="description-icon" src="../assets/icons/descriptionicon1.svg"/>
        <h3>Technical Skills & Passion</h3>
          <p style="margin-bottom: 40px;">
            Skilled in .NET, SQL, Java, Python, and 
            full-stack web technologies, 
            with a strong focus on creating 
            scalable, efficient, and user-friendly applications.
          </p>
        <img class="description-icon" src="../assets/icons/descriptionicon2.svg"/>
        <h3>Academic Excellence & Leadership</h3>
          <p style="margin-bottom: 40px;">
            Cum Laude Computer Science graduate and consistent 
            Dean’s Lister, with leadership experience gained through 
            research, course projects, and collaborative tech 
            initiatives.
          </p>
        <img class="description-icon" src="../assets/icons/descriptionicon3.svg"/>
        <h3>Professional Experience</h3>
          <p style="margin-bottom: 10px;">
            At Wilshire Financial Network, I contributed to 
            enhancing financial CRM applications by developing 
            .NET features, streamlining workflows, and building 
            automation scripts to improve efficiency.
          </p>
        <img class="description-icon" src="../assets/icons/descriptionicon4.svg"/>
        <h3>Project Experience</h3>
          <p>
            Built software solutions such as an Information 
            Management System for Xavier University’s Night School 
            Program and a Resource-Based AI Decision Algorithm 
            for procedural NPC behavior, combining technical 
            innovation with practical applications.
          </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description-container {
  display: flex;
  gap: 20px;
}
.legend-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start; /* circles stay at the left */
}
.title-container {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 65px;
}
.text-container {
  display: flex;
  flex-direction: column;
  max-width: 550px; /* Adjust as needed */
  margin-left: 60px;
  gap: 20px;
}
.description-icon {
  width: 50px;
  height: 50px;
}
.about-title {
  font-size: 2rem;
}
.circle-number {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.vertical-line {
  width: 1px;
  height: 183px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2px;
}

.circles-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* center circles and lines horizontally in their column */
  gap: 15px;
}
h3 {
  font-size: 24px;
}
p{
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8); /* 80% opacity */
}
</style>