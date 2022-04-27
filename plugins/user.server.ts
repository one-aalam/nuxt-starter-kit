import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const user = useState(
        'user',
        () => nuxtApp.ssrContext?.req.user
    )
})
