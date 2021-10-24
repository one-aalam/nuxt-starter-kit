<template>
  <div class="progress-container" v-if="visible">
    <div class="progress" :style="{ width: `${progress * 100}%` }" />
  </div>
  <div class="fade" v-if="progress >= 0.4" />
</template>
<script lang="ts" setup>
const progress = ref<number>(0)
const visible = ref<boolean>(false)
onMounted(() => {
  visible.value = true
  function next() {
    progress.value += 0.1
    const remaining = 1 - progress.value
    if (remaining > 0.15) setTimeout(next, 500 / remaining)
  }
  setTimeout(next, 250)
})
</script>

<style>
.progress-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 999;
}
.progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #5cb85c;
  transition: width 0.4s;
}
.fade {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  z-index: 998;
  animation: fade 0.4s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
