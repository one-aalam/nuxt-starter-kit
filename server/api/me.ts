import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    if(req.method !== 'GET') return 'method not supported'
    return {
        // @ts-ignore
        user: req.user
    }
}
