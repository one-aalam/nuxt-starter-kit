import { defineNuxtPlugin, NuxtApp, useState } from '#app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    const user = useState(
        'user',
        () => nuxtApp.ssrContext?.req.user
    )
})
