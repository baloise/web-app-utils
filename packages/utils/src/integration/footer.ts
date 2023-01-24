import { Language, LanguagesOfGermany, LanguagesOfSwitzerland } from '../language/index'

type Region = 'CH' | 'DE'

const MAGNOLIA_API_URL_CH = new Map<string, string>([
  ['de', 'https://www.baloise.ch/app-integration/v2/footer/de.json'],
  ['fr', 'https://www.baloise.ch/app-integration/v2/footer/fr.json'],
  ['it', 'https://www.baloise.ch/app-integration/v2/footer/it.json'],
  ['en', 'https://www.baloise.ch/app-integration/v2/footer/en.json'],
])

const MAGNOLIA_API_URL_DE = new Map<string, string>([
  ['de', 'https://www.baloise.ch/app-integration/v2/de/footer/de.json'],
])

export interface FooterLink {
  label: string
  link: string
}

export const loadFooterLinks = (lang: Language, region: Region = 'CH'): Promise<FooterLink[]> => {
  let url = MAGNOLIA_API_URL_CH.get('de')

  if (region === 'CH') {
    const effectiveLang = LanguagesOfSwitzerland.valueOfOrDefault(lang ? lang.key : undefined)
    url = MAGNOLIA_API_URL_CH.get(effectiveLang.key)
  } else if (region === 'DE') {
    const effectiveLang = LanguagesOfGermany.valueOfOrDefault(lang ? lang.key : undefined)
    url = MAGNOLIA_API_URL_DE.get(effectiveLang.key)
  }

  return fetch(url)
    .then(res => res.json())
    .then(res => res as FooterLink[])
}
