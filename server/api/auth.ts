import type { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'
import { supabase } from '../lib/supabase'

export default async (req: IncomingMessage, res: ServerResponse) => {
    if(req.method !== 'POST') return 'method not supported'
    // @ts-expect-error: Missing properties in h3
    req.body = await useBody(req)
    // @ts-expect-error: Missing properties in h3
    res.status = (p) => ({ json: (p) => ({}) });
    // Set auth cookies
    await supabase.auth.api.setAuthCookie(req, res)

    // @ts-expect-error: Missing properties in h3
    delete req.body
    // @ts-expect-error: Missing properties in h3
    delete res.status

    return {
        updated: true
    }
}
