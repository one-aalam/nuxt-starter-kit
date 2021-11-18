<template>
    <div class="header">
        <Nav :user="user" @signOut="handleSignOut" />
    </div>
    <div class="container mx-auto">
        <slot />
    </div>
</template>
<script lang="ts" setup>
    import type { User, Subscription } from '@supabase/supabase-js'
    const subscription = ref<{ data: Subscription | null }>()
    const { $supabase } = useNuxtApp()
    const router = useRouter()

    // wanna to get the state on the server ?
    // const user = useState('user')
    // if(process.server && !user.value) { /* on server, not authenticated */ }

    // wanna get state on the client? Populate a ref on `onMounted`
    const user = ref<User|null>(null)

    // you can also use the API routes to retreive the logged-in user
    // @ts-ignore
    // const { data } = await useAsyncData('user', () => $fetch<{user: User}>('/api/me'), { server: true }) // on server + client , not authenticated

    const handleSignOut = async () => {
        await $supabase.auth.signOut()
        router.replace('/auth')
    }

    onMounted(() => {
        user.value = $supabase.auth.user()
        if(!user.value) {
            router.replace('/auth')
        }
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
