import { Language } from '../language'

export type Region = 'CH' | 'DE'
const INTEGRATION_BASE_URL = 'https://www.baloise.ch'
const INTEGRATION_BASE_PATH = '/app-integration'

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
  version: 'v1' | 'v2' | 'v3' = 'v2',
) => {
  let langPath: string = lang.key
  if (type === IntegrationType.CONSENT_MANAGER) {
    return `${getIntegrationBaseUrl()}${INTEGRATION_BASE_PATH}/v3/${region.toLowerCase()}/consent.json`
  } else {
    if (region === 'DE') {
      langPath = 'de'
    }
  }
  return `${getIntegrationBaseUrl()}${INTEGRATION_BASE_PATH}/${version}/${region.toLowerCase()}/${type}/${langPath}.json`
}

export const getHost = () => window?.location?.host || undefined

export enum IntegrationType {
  FOOTER = 'footer',
  SOCIAL_MEDIA = 'socialmediachannels',
  CONSENT_MANAGER = 'onetrust',
}
