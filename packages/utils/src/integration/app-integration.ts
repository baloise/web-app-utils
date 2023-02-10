import { Language } from '../language'

export type Region = 'CH' | 'DE'
const INTEGRATION_BASE_URL = 'https://www.baloise.ch'
const INTEGRATION_BASE_PATH = '/app-integration/v2'

export const getIntegrationBaseUrl = () => {
  const host = getHost()
  if (host && host.indexOf('www.baloise.ch') >= 0) {
    return `https://${host}`
  }
  return INTEGRATION_BASE_URL
}

export const getIntegrationUrl = (
  lang: Language,
  region: Region = 'CH',
  type: IntegrationType = IntegrationType.FOOTER,
) => {
  let langPath: string = lang.key
  if (type === IntegrationType.ONETRUST) {
    langPath = 'all'
  } else {
    if (region === 'DE') {
      langPath = 'de'
    }
  }
  return `${getIntegrationBaseUrl()}${INTEGRATION_BASE_PATH}/${region.toLowerCase()}/${type}/${langPath}.json`
}

export const getHost = () => window?.location?.host || undefined

export enum IntegrationType {
  FOOTER = 'footer',
  ONETRUST = 'onetrust',
}
