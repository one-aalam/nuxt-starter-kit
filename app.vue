<script lang="ts" setup>
import './assets/css/tailwind.css'
</script>

<template>
    <div class=" text-2xl">
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/about">
        About
      </NuxtLink>

      <NuxtPage />
    </div>
</template>
