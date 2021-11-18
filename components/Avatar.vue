<template>
    <div class="avatar relative flex flex-col place-items-center">
            <label class="mb-8 w-36 h-36 mask mask-hexagon shadow-lg bg-gray-200" for="single">
                <img :src="props.src" :alt="props.title" />
            </label>
            <input
                class="sr-only"
                type="file"
                id="single"
                accept="image/*"
                @change="$emit('change', $event)"
                :disabled="props.loading"
            />
    </div>
</template>
<script lang="ts" setup>

    type AvatarProps = {
        loading: boolean
        src: string
        title: string
    }

    const props = withDefaults(defineProps<AvatarProps>(), {
        loading: false,
        src: '',
        title: '',
    })

    type AvatarEvts = {
        (e: 'change', event: any): void
    }

    const emit = defineEmits<AvatarEvts>()

</script>
