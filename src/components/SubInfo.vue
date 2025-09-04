<template>
  <hr class="horizontal-line" />
    <div class="subinfo-text">
        <p>JavaScript</p>
        <img src="@/assets/icons/star.png" />
        <p>Tailwind CSS</p>
        <img src="@/assets/icons/star.png" />
        <p>Figma</p>
        <img src="@/assets/icons/star.png" />
        <p>GitHub</p>
        </div>
  <hr class="horizontal-line" />
</template>

<style scoped>
.horizontal-line {
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100vw; /* Full viewport width */
}
.subinfo-text {
    display: flex;
    gap: 9rem; /* Adjust the value as needed */
    font-size: 25px; /* Adjust as needed */
    margin-top: 1rem;    /* Space above */
    margin-bottom: 1rem; /* Space below */
    white-space: nowrap; /* Prevent text wrapping */
}
.subinfo-text img {
    width: 28px;   /* Set your desired width */
    height: 38px;  /* Set your desired height */
    object-fit: contain;
}
</style>