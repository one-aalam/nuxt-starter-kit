import type { Alert } from './alert.type'
import { ALERT_FADE_IN } from './alert.constants'

export const alerts = reactive<Array<Alert>>([])

export const handleAlert = (alert: Alert) => {
  alerts.push(alert)
  setTimeout(() => {
    alerts.splice(0, 1)
  }, ALERT_FADE_IN)
}

export const clearAlert = () => alerts.slice(1)
export const clearAlertTimeout = () => setTimeout(clearAlert, ALERT_FADE_IN)
