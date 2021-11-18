<template>
    <nav class="w-full py-3 bg-blue-50 shadow-md flex justify-center">
            <ul class="list-none flex gap-4 text-center">
                <!-- <li>
                    <NuxtLink to="/">
                        <IconHome class="inline-block w-7 h-7 text-blue-600"/>
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/profile">
                        <IconUser class="w-8 h-8 inline-block text-blue-600" />
                        Profile
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/settings">
                    <IconCog class="w-8 h-8 inline-block text-blue-500" />
                        Settings
                    </NuxtLink>
                </li> -->
                <li>
                    {{props.user && props.user.email}} <button v-if="props.user" @click="$emit('signOut')">(Sign Out)</button>
                </li>
            </ul>
        </nav>
</template>

<script lang="ts" setup>
    import type { User } from '@supabase/supabase-js'
    import IconHome from '~icons/heroicons-solid/home'
    import IconUser from '~icons/heroicons-solid/user'
    import IconCog from '~icons/heroicons-solid/cog'

    type NavProps = {
        user: User
    }

    const props = defineProps<NavProps>()

        console.log(props)

    type NavEvts = {
        (e: 'signOut'): void
    }

    const emit = defineEmits<NavEvts>()

</script>
