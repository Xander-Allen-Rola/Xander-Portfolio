<template>
  <div class="profile-card">
    <!-- Profile Image -->
    <div class="profile-left">
      <div class="profile-photo-border">
        <img 
        src="@/assets/images/profilephoto.png" 
        alt="Profile photo"
        class="profile-photo"/>
      </div>
    </div>

    <!-- Text Section -->
    <div class="profile-right">
      <h3 class="name">Xander Allen M. Rola</h3>
      <h4 class="subtitle">
        Bachelor of Science in Computer Science | Cum Laude <br />
        Xavier University – Ateneo de Cagayan
      </h4>
      <p class="description">
        Hi, I’m Xander! I love building clean, responsive, and 
        user-friendly websites that bring ideas to life. With a 
        background in Computer Science and a growing passion for 
        front-end development, I enjoy turning designs into 
        smooth digital experiences. I’m always excited to learn 
        new tools, explore creative solutions, and collaborate on 
        projects that make a real impact.
      </p>

      <!-- Resume Button -->
      <div class="resume-btn">
        <button @click="window.open('/resume.pdf', '_blank')">View Resume</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  background:
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
  width: 650px;
  position: absolute;
  top: 56px;
  right: 30px;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

.profile-left {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo-border {
  background: linear-gradient(90deg, #7A87FB, #FFD49C);
  padding: 3px;
  border-radius: 50%;
  display: inline-block;
}

.profile-photo {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: #fff; /* fallback for image area */
  display: block;
  object-fit: cover;
}

.profile-right {
  flex: 1;
  padding-left: 20px;
}

.name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #fff;
}

.subtitle {
  font-size: 13px;
  line-height: 1.4;
  color: #bbb;
  margin-bottom: 12px;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 16px;
}

.resume-btn button {
  height: 42px;
  font-size: 14px;
  color: #222;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  padding: 0 18px;
  border: 2px solid transparent;
  border-radius: 24px / 50%;
  cursor: pointer;

  /* Two layers: inner + border */
  background:
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB, #FFD49C) border-box;

  background-size: 200% 100%, 200% 100%;
  background-position: left center, left center;
  background-clip: padding-box, border-box;

  transition:
    background-position 0.6s ease-in-out,
    filter 0.3s ease,
    transform 0.3s;
}

.resume-btn button:hover {
  background-position: right center, right center;
  filter: brightness(0.9);
  transform: translateY(-2px);
}
</style>
