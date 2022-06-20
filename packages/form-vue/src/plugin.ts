import { App, Plugin } from 'vue'

import './yup/validators.yup'
import { initLocale } from './yup/locale.yup'
import { LocaleObject } from 'yup/lib/locale'

export const baloiseForm: Plugin = {
  async install(app: App, options: { locale: LocaleObject }) {
    initLocale(options.locale)
  },
}
