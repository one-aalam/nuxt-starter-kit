<template>
    <div class="min-h-screen flex justify-center">
        <div class="cont mt-28">
            <StarterKit/>
            <AuthForm @submit="onSubmit"/>
            <div class="w-full flex justify-center py-6">
                <Spinner v-if="loading"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Form from '~~/components/AuthForm.vue'

    const { $supabase, $alert } = useNuxtApp()
    const router = useRouter()
    const loading = ref<boolean>(false)

    const onSubmit = async (creds: { email: string, password: string }, isSignIn: boolean) => {
        try {
            loading.value = true
            const { user, error } = isSignIn ? await $supabase.auth.signIn(creds) : await $supabase.auth.signUp(creds)
            loading.value = false
            if(error) {
                return $alert({ type: 'error', text: error.message })
            }
            if(isSignIn) {
                $alert({ type: 'success', text: 'Logging you in shortly....' })
                return router.push('/profile')
            } else {
                return $alert({ type: 'success', text: 'Please check your inbox to activate your account!' })
            }
        } catch(err) {}
    }
</script>
<style lang="postcss">
    .cont {
        @apply w-full sm:w-3/4 md:w-8/12 lg:w-6/12 xl:w-4/12
    }
</style>
