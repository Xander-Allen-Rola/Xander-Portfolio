<template>
  <div class="hireme-card">
    <h3 class="title">Hire Me</h3>
    <p class="subtitle">Please provide your details so I can understand your opportunity better.</p>

    <form class="form">
      <!-- Name -->
      <div class="form-group">
        <label for="name">Full Name *</label>
        <input type="text" id="name" class="input" required />
      </div>

      <!-- Company -->
      <div class="form-group">
        <label for="company">Company / Organization *</label>
        <input type="text" id="company" class="input" required />
      </div>

      <!-- Position -->
      <div class="form-group">
        <label for="position">Role / Position *</label>
        <input type="text" id="position" class="input" required />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Contact Email *</label>
        <input type="email" id="email" class="input" required />
      </div>

      <!-- Optional Message -->
      <div class="form-group">
        <label for="message">Message (Optional)</label>
        <textarea id="message" rows="3" class="input"></textarea>
      </div>

      <!-- Submit -->
      <div class="submit-btn">
        <button type="submit">Send Request</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.hireme-card {
  border: 2px solid transparent;
  background:
    linear-gradient(#1C1C1C, #1C1C1C) padding-box,
    linear-gradient(90deg, #FFD49C, #7A87FB) border-box;
  background-clip: padding-box, border-box;
  width: 450px;
  position: absolute;
  top: 80px;
  right: 40px;
  z-index: 20;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  color: #fff;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 13px;
  color: #bbb;
  margin-bottom: 16px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group label {
  font-size: 13px;
  margin-bottom: 4px;
  display: block;
  color: #ccc;
}

.input {
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #2a2a2a;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
}

.input:focus {
  border: 1px solid #FFD49C;
}

textarea.input {
  resize: none;
}

.submit-btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.submit-btn button {
  padding: 10px 18px;
  background: linear-gradient(90deg, #FFD49C, #7A87FB);
  color: #1C1C1C;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
