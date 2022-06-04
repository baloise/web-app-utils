import { App, Plugin } from 'vue'
import BalFormGrid from './BalFormGrid.vue'
import BalFormCol from './BalFormCol.vue'
import BalFormField from './BalFormField.vue'

import './yup/validators.yup'
import { initLocale } from './yup/locale.yup'

export * from './useBalField'
export * from './yup/types.yup'

export const BaloiseForm: Plugin = {
  async install(app: App) {
    initLocale()
    app.component('bal-form-grid', BalFormGrid)
    app.component('bal-form-col', BalFormCol)
    app.component('bal-form-field', BalFormField)
  },
}
