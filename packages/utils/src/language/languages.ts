import { Language } from './language'
import { LanguageModel } from './language-model'

export const GERMAN = new Language('de')
export const FRENCH = new Language('fr')
export const ITALIAN = new Language('it')
export const ENGLISH = new Language('en')
export const DUTCH = new Language('nl')
export const LUXEMBOURGISH = new Language('lb')

export const LanguagesOfSwitzerland: LanguageModel = new LanguageModel([GERMAN, FRENCH, ITALIAN, ENGLISH], GERMAN)
