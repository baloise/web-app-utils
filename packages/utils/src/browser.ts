export const scrollToAnchorElement = (referenceName: string): void => {
  const nodes = document.querySelectorAll(`[data-ref="${referenceName}"]`)
  if (nodes.length > 0) {
    nodes[0].scrollIntoView()
  }
}

export const scrollToTopOfBody = (): void => {
  window.scrollTo(0, 0)
}

export const open = (url: string): Window => {
  return openWindowSafely(url, '_self')
}

export const openInNewWindow = (url: string): Window => {
  return openWindowSafely(url, '_blank')
}

const openWindowSafely = (url: string, target: string): Window => {
  const newWindow = window.open(url, target)
  // prevent a security hazard: the new window is able to access window.opener (e.g. replace window.opener.location)
  if (newWindow != null && newWindow.opener != null) {
    newWindow.opener = undefined
  }
  return newWindow
}

export const getBrowserLanguage = (): string => {
  // e.g. de-CH
  const browserLocale =
    window.navigator.language ||
    // userLanguage is only for IE11
    // eslint-disable-next-line
    ((window.navigator as any)['userLanguage'] as string)

  if (browserLocale.indexOf('-') === 2) {
    return browserLocale.substr(0, 2)
  } else {
    return browserLocale
  }
}

export const disableDragAndDropFiles = (): void => {
  window.addEventListener('dragover', (e: Event) => e.preventDefault(), false)
  window.addEventListener('drop', (e: Event) => e.preventDefault(), false)
}

export interface BrowserInfo {
  cookiesEnabled?: boolean
  language?: string
  timezone?: string
  userAgent?: string
}

export const getBrowserInfo = (): BrowserInfo => {
  return {
    cookiesEnabled: window.navigator.cookieEnabled,
    language: window.navigator.language,
    userAgent: window.navigator.userAgent,
    timezone: getBrowserTimezone(),
  }
}

function getBrowserTimezone(): string {
  const timezoneOffset = new Date().getTimezoneOffset()
  return timezoneOffset >= 0 ? `+${timezoneOffset}` : `-${timezoneOffset * -1}`
}
