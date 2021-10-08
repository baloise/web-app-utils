import { ENGLISH, FRENCH, GERMAN, ITALIAN, Language } from ".";

const URLS = new Map([
  [GERMAN, 'https://www.baloise.ch/de/privatkunden.json'],
  [ENGLISH, 'https://www.baloise.ch/en/private-customers.json'],
  [FRENCH, 'https://www.baloise.ch/fr/clients-prives.json'],
  [ITALIAN, 'https://www.baloise.ch/it/clienti-privati.json']
])

export interface FooterLink {
  label: string;
  link: string;
};

export const loadFooterLinks = (lang: Language): Promise<FooterLink[]> => {
  if (URLS.has(lang)) {
    return fetch(URLS.get(lang))
    .then(res => res.json())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    .then(res => Object.values(res[0]['footer']['footerMetaList']));
  } else {
    throw new Error('Footer links can not be fetched for language: ' + JSON.stringify(lang));
  }
};
