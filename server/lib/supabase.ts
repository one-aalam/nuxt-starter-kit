import config from '#config'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(config.supabaseUrl, config.supabaseKey)
