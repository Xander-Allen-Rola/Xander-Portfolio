<script setup>
import ViewProject from './buttons/ViewProject.vue';``
defineProps({
  name: String,
  description: String,
  image: String
})
</script>

<template>
    <div class="project-box">
        <div class="content-container">
            <img :src="image" style="height:95%; margin-left: 30px;"/>
            <div class="text-container">
                <h1>{{ name }}</h1>
                <p>{{ description }}</p>
                <ViewProject />
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-box {
  background: #151515;
  border-radius: 8px;
  padding: 20px;
  height: 500px;
  width: 95%;
}
.content-container {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 90px;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
}
h1{
    font-weight: bold;
}
</style>