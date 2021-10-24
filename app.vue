<script lang="ts" setup>
import '@fontsource/work-sans'
import './assets/css/tailwind.css'
import AlertList from '~/lib/alert/AlertList.vue'
</script>

<template>
  <div class="antialiased">
    <AlertList />
    <NuxtPage />
  </div>
</template>
