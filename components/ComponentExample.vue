<template>
    <div class="text-center">
        <h3 v-if="heading" class="inline-block my-8 px-2 py-1 rounded-md uppercase bg-gray-600 text-white">{{props.heading}}</h3>
        <div class="components text-center flex place-content-center gap-20 min-h-80">
            <slot/>
        </div>
    </div>
</template>
<script lang="ts" setup>
    const props = withDefaults(defineProps<{ heading?: string }>(), {
      heading: '',
    })
</script>
