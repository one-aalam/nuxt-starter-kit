<template>
    <div class="container mx-auto">
        <slot />
    </div>
</template>
<script lang="ts" setup>
    import type { Subscription } from '@supabase/supabase-js'

    const { $supabase } = useNuxtApp()
    const subscription = ref<{ data: Subscription | null }>()

    onMounted(() => {
        subscription.value = $supabase.auth.onAuthStateChange(async(event, session) => {
            await $fetch('/api/auth', {
                method: 'POST',
                body: { event, session }
            })
        })
    })

    onUnmounted(() => {
        if(subscription.value) subscription.value?.data?.unsubscribe()
    })
</script>
