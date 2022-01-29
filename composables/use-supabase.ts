import { inject } from 'vue'
import type { SupabaseClient } from '@supabase/supabase-js'

export const useSupabase = () : SupabaseClient => {
    const supabase = inject<SupabaseClient>('supabase')
    if(!supabase) {
        throw new Error('Cant find a Supabase provider')
    }
    return supabase as SupabaseClient
}

export const useAuth = (): SupabaseClient['auth'] => {
    const supabase = useSupabase()
    return supabase.auth
}

export const useStorage = (): SupabaseClient['storage'] => {
    const supabase = useSupabase()
    return supabase.storage
}

export const useFrom = (): SupabaseClient['from'] => {
    const supabase = useSupabase()
    return supabase.from
}
