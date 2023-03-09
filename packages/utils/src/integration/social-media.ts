import { Language } from '../language/index'
import { IntegrationType, Region, getIntegrationUrl } from './app-integration'

export interface SocialMediaLink {
  label: string
  link: string
}

export const loadSocialMediaLinks = (lang: Language, region: Region = 'CH'): Promise<SocialMediaLink[]> => {
  const url = getIntegrationUrl(lang, region, IntegrationType.SOCIAL_MEDIA, 'v1')

  return fetch(url)
    .then(res => res.json())
    .then(res => res as SocialMediaLink[])
}
