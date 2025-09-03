<script setup>
import ProfileButton from './buttons/ProfileButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
</script>

<template>
    <ProfileButton label="Hire Me" class="oblong-btn" />
    <ProfileButton class="circle-btn">
      <FontAwesomeIcon :icon="faUser" />
    </ProfileButton>
</template>