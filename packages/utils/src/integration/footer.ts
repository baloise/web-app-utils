import { Language, LanguagesOfSwitzerland } from '../language/index'

const MAGNOLIA_API_URL = new Map([
  ['de', 'https://www.baloise.ch/app-integration/v2/footer/de.json'],
  ['fr', 'https://www.baloise.ch/app-integration/v2/footer/fr.json'],
  ['it', 'https://www.baloise.ch/app-integration/v2/footer/it.json'],
  ['en', 'https://www.baloise.ch/app-integration/v2/footer/en.json'],
])

export interface FooterLink {
  label: string
  link: string
}

export const loadFooterLinks = (lang: Language): Promise<FooterLink[]> => {
  const effectiveLang = LanguagesOfSwitzerland.valueOfOrDefault(lang ? lang.key : undefined)
  const url = MAGNOLIA_API_URL.get(effectiveLang.key)
  return fetch(url)
    .then(res => res.json())
    .then(res => res as FooterLink[])
}
