<script setup>
function openResume() {
  window.open('https://drive.google.com/file/d/1-DFpphPW5lBp0xDHNhBt113Xz2H2kKvO/view?usp=sharing', '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="profile-card">
    <div class="profile-left">
      <div class="profile-photo-border">
        <img 
        src="@/assets/images/profilephoto.png" 
        alt="Profile photo"
        class="profile-photo"/>
      </div>
    </div>
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
      <div class="resume-btn">
        <button @click="openResume">View Resume</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  align-items: center;
  border: 3px solid transparent;
  background:
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
  background-size: 300% 300%;
  background-position: 0% 50%;
  width: 650px;
  position: absolute;
  top: 56px;
  right: 30px;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  animation: move-border 6s linear infinite;
}

  

.profile-left {
  flex: 0 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo-border {
  border: 3px solid transparent;
  background:
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #7A87FB, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
  border-radius: 50%;
  display: inline-block;
  background-size: 300% 300%;
  background-position: 0% 50%;
  animation: move-photo-border 4s linear infinite;
}

.profile-photo {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: #fff;
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

.resume-btn:active {
  transform: translateY(2px);
}

@keyframes move-photo-border {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes move-border {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

  
@media (max-width: 767px) {
  .profile-card {
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    right: auto;
    min-width: 400px;
    width:100%;
    padding: 10px;
    position: fixed;
  }
}
</style>