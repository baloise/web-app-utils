import { ENGLISH, Language } from '../language/index'

const MAGNOLIA_API_URL = new Map([
  ['de', 'https://www.baloise.ch/de/privatkunden.json'],
  ['fr', 'https://www.baloise.ch/fr/clients-prives.json'],
  ['it', 'https://www.baloise.ch/it/clienti-privati.json'],
  ['en', 'https://www.baloise.ch/en/private-customers.json'],
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
