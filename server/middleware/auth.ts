import type { IncomingMessage, ServerResponse } from 'http'
import { useCookies } from 'h3'
import { supabase } from '../lib/supabase'

export default async (req: IncomingMessage, res: ServerResponse) => {
    // @ts-expect-error: Missing properties in h3
    req.cookies = useCookies(req)
    const { user } = await supabase.auth.api.getUserByCookie(req)
    // @ts-ignore
    req.user = user
}
