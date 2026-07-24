import { Language } from '../language/index'
import { IntegrationType, Region, getIntegrationUrl } from './app-integration'

export interface FooterLink {
  label: string
  link: string
}

export const loadFooterLinks = (lang: Language, region: Region = 'CH'): Promise<FooterLink[]> => {
  const url = getIntegrationUrl(lang, region, IntegrationType.FOOTER)

  return fetch(url)
    .then(res => res.json())
    .then(res => res as FooterLink[])
}
