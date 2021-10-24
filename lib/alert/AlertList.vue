<template>
  <ul class="alert__list" role="status" aria-live="polite">
    <alert v-for="(alert, i) in alerts" :alert="alert" :key="i" />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { alerts } from './alert.store'
import Alert from './Alert.vue'

export default defineComponent({
  components: {
    Alert,
  },
  setup() {
    return {
      alerts,
    }
  },
})
</script>
<style lang="postcss">
.alert__list {
  @apply absolute w-screen top-6 flex flex-col place-items-center justify-center z-10;
}
</style>
