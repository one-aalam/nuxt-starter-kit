<template>
  <button
    :type="type"
    class="btn"
    :class="[
      `btn-${size} btn-${variant}`,
      {
        loading: loading,
        'btn-wide': wide,
        'btn-circle': circle,
        'btn-outline': outline,
      },
    ]"
    :disabled="disabled"
    :="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
type ButtonType = 'submit' | 'button' | 'reset'
type ButtonVariant = 'primary' | 'secondary' | 'accent'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

type ButtonProps = {
  type?: ButtonType
  variant?: ButtonVariant
  size?: ButtonSize
  wide?: boolean
  circle?: boolean
  outline?: boolean
  loading?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  wide: false,
  circle: false,
  outline: false,
  loading: false,
  disabled: false,
})
</script>
