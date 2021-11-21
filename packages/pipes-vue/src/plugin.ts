import { Plugin } from 'vue'
import { applyPipes } from './generated/pipes'

export const BaloisePipes: Plugin = {
  async install(app) {
    applyPipes(app)
  },
}
