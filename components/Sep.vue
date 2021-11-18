<template>
    <div :class="SEPERATOR_SIZES[props.size]" />
</template>
<script lang="ts" setup>
    const SEPERATOR_SIZES = {
        'xs': 'my-1',
        'sm': 'my-2',
        'md': 'my-4',
        'lg': 'my-8',
        'xl': 'my-16'
    }
    type SeparatorSize = keyof typeof SEPERATOR_SIZES

    const props = withDefaults(defineProps<{ size?: SeparatorSize }>(), {
      size: 'md',
    })
</script>
