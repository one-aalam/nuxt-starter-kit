import { defineNuxtPlugin } from '#app'
import { handleAlert } from './alert.store'

export default defineNuxtPlugin((nuxtApp) => {
  return {
      provide: {
        alert: handleAlert
      }
  }
})
