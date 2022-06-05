import { Plugin } from 'vue'

import './yup/validators.yup'
import { initLocale } from './yup/locale.yup'

export const baloiseForm: Plugin = {
  async install() {
    initLocale()
  },
}
