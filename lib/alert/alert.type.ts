export type Alert = {
  text: string
  type: AlertType
}

export type AlertType = 'default' | 'success' | 'error'

export type AlertHandler = (alert: Alert) => void
