import { ENGLISH, FRENCH, GERMAN, ITALIAN, Language } from ".";

const URLS = new Map([
  [GERMAN.key, 'https://www.baloise.ch/de/privatkunden.json'],
  [ENGLISH.key, 'https://www.baloise.ch/en/private-customers.json'],
  [FRENCH.key, 'https://www.baloise.ch/fr/clients-prives.json'],
  [ITALIAN.key, 'https://www.baloise.ch/it/clienti-privati.json']
])

export interface FooterLink {
  label: string;
  link: string;
};

export const loadFooterLinks = (lang: Language): Promise<FooterLink[]> => {
  if (URLS.has(lang.key)) {
    return fetch(URLS.get(lang.key))
    .then(res => res.json())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .then(res => Object.values(res[0]['footer']['footerMetaList']));
  } else {
    throw new Error('Footer links can not be fetched for language: ' + JSON.stringify(lang));
  }
};
