import { App, Plugin } from 'vue'
import BalFormGrid from './components/BalFormGrid.vue'
import BalFormCol from './components/BalFormCol.vue'
import BalFormField from './components/BalFormField.vue'

import './yup/validators.yup'
import { initLocale } from './yup/locale.yup'

export const baloiseForm: Plugin = {
  async install(app: App) {
    initLocale()
    app.component('BalFormGrid', BalFormGrid)
    app.component('BalFormCol', BalFormCol)
    app.component('BalFormField', BalFormField)
  },
}
