import { ENGLISH, Language } from '../language/index'

const MAGNOLIA_API_URL = new Map([
  ['de', 'https://baloise.ch/app-integration/footer-links/de.json'],
  ['fr', 'https://baloise.ch/app-integration/footer-links/fr.json'],
  ['it', 'https://baloise.ch/app-integration/footer-links/it.json'],
  ['en', 'https://baloise.ch/app-integration/footer-links/en.json'],
])

export interface FooterLink {
  label: string
  link: string
}

export const loadFooterLinks = (lang: Language): Promise<FooterLink[]> => {
  const url = MAGNOLIA_API_URL.has(lang.key) ? MAGNOLIA_API_URL.get(lang.key) : MAGNOLIA_API_URL.get(ENGLISH.key)
  return (
    fetch(url)
      .then(res => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .then(res => Object.values(res[0]['footer']['footerMetaList']))
  )
}
