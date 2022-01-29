<template>
  <div class="min-h-screen flex flex-col justify-center">
      <StarterKit/>
      <p class="text-center">Nuxt3 with components like alert/toast, button, separator, modal/dialog, spinner, etc. For Supabase integration as a plugin, and full-stack authentication support checkout the <strong>main</strong> branch</p>
      <Sep/>
      <div class="text-center">
        <NuxtLink class="btn btn-primary btn-outline" to="/gallery">Browse Components</NuxtLink>&nbsp;
        <NuxtLink class="btn btn-primary" to="/auth">See Supabase in action &rarr;</NuxtLink>
      </div>
  </div>
</template>
