import { defineNuxtPlugin, NuxtApp } from '#app'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const supabase = createClient(config.supabaseUrl, config.supabaseKey)

    nuxtApp.vueApp.provide('supabase', supabase)
    nuxtApp.provide('supabase', supabase)
})

declare module '#app' {
    // @ts-ignore
    interface NuxtApp {
        $supabase: SupabaseClient
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $supabase: SupabaseClient
    }
}

declare module '@nuxt/kit' {
    interface PublicRuntimeConfig {
        supabaseUrl: string
        supabaseKey: string
    }
    interface PrivateRuntimeConfig {
        supabaseUrl: string
        supabaseKey: string
    }
}
