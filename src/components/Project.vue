<script setup>
import CommonUseButton from './buttons/CommonUseButton.vue';
defineProps({
  name: String,
  description: String,
  image: String
})
</script>

<template>
    <div 
    style="background: #151515;
    border-radius: 8px;
    padding: 20px;
    height: 500px;
    width: 95%;">
        <div 
        style="display: flex;
        align-items: center;
        height: 100%;
        gap: 90px;">
            <img :src="image" style="height:95%; margin-left: 30px;"/>
            <div 
            style="display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 600px;">
                <h1 style="font-weight: bold;">{{ name }}</h1>
                <p>{{ description }}</p>
                <CommonUseButton label="View Project" width="160px" />
            </div>
        </div>
    </div>
</template>