import { Language } from "./language";
import { LanguageModel } from "./language-model";

export const GERMAN = new Language("de");
export const FRENCH = new Language("fr");
export const ITALIAN = new Language("it");
export const ENGLISH = new Language("en");
export const DUTCH = new Language("nl");
export const LUXEMBOURGISH = new Language("lb");

export const LanguagesOfSwitzerland: LanguageModel = new LanguageModel(
  [GERMAN, FRENCH, ITALIAN, ENGLISH],
  GERMAN
);

export const LanguagesOfGermany: LanguageModel = new LanguageModel(
  [GERMAN, ENGLISH],
  GERMAN
);

export const LanguagesOfBelgium: LanguageModel = new LanguageModel(
  [DUTCH, FRENCH, GERMAN, ENGLISH],
  DUTCH
);

export const LanguagesOfLuxembourg: LanguageModel = new LanguageModel(
  [LUXEMBOURGISH, FRENCH, GERMAN, ENGLISH],
  LUXEMBOURGISH
);
