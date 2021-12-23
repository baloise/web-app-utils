import { Language } from './language'

export class LanguageModel {
  public default: Language

  constructor(public all: Language[], defaultLanguage: Language) {
    this.default = defaultLanguage
  }

  public valueOf(key: string): Language | undefined {
    return this.all.find(language => language.key === key)
  }

  public valueOfOrDefault(key: string): Language {
    return this.valueOf(key) || this.default
  }

  public isValidKey(key: string): boolean {
    return this.valueOf(key) !== null
  }
}
