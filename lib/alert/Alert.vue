<template>
  <transition name="fade">
    <li
      class="alert"
      v-if="isVisible"
      :class="{
        'alert--success': alert.type === 'success',
        'alert--error': alert.type === 'error',
      }"
    >
      <div class="alert__content">
        <IconCheck v-if="alert.type === 'success'" />
        <IconX v-else-if="alert.type === 'error'" />
        <IconInfo v-else />
        <p v-html="alert.text"></p>
        <button class="alert__action-close" @click="dismiss()">
          <IconX class="w-3 inline-block" />
        </button>
      </div>
    </li>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import IconCheck from '~icons/heroicons-solid/check-circle'
import IconInfo from '~icons/heroicons-solid/information-circle'
import IconX from '~icons/heroicons-solid/x-circle'
import { Alert } from './alert.type'
import { clearAlertTimeout } from './alert.store'

export default defineComponent({
  props: {
    alert: {
      type: Object as PropType<Alert>,
      required: true,
    },
  },
  components: {
    IconCheck,
    IconX,
    IconInfo,
  },
  setup() {
    const isVisible = ref<boolean>(true)
    return {
      isVisible,
      dismiss() {
        isVisible.value = !isVisible.value
        clearTimeout(clearAlertTimeout())
      },
    }
  },
})
</script>
<style lang="postcss">
.alert {
  @apply block shadow-md rounded px-3 py-2 transition-all mt-2 bg-gray-100 text-gray-800;
}
.alert__content {
  @apply flex gap-2;
}
.alert__content p {
  @apply max-w-xs break-words text-base;
}
.alert--success {
  @apply bg-green-300 text-gray-800;
}
.alert--error {
  @apply bg-red-500 text-white;
}
.alert__action-close {
  @apply inline-grid place-content-center rounded-full w-5 h-5 border-0 m-0 p-0 transition-colors;
}
.alert__action-close:hover {
  @apply text-gray-200 bg-gray-500;
}
.alert--success .alert__action-close {
  @apply text-gray-400 bg-green-200;
}
.alert--success .alert__action-close:hover {
  @apply bg-green-700 text-white;
}
.alert--error .alert__action-close {
  @apply text-gray-300 bg-red-600;
}
.alert--error .alert__action-close:hover {
  @apply text-red-600 bg-red-300;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
