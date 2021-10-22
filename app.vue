<script lang="ts" setup>
    import '@fontsource/work-sans'
    import './assets/css/tailwind.css'
</script>

<template>
    <div class="antialiased">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>
      <NuxtPage />
    </div>
</template>
