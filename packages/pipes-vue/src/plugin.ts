import { Plugin } from 'vue'
import { applyPipes } from './generated/pipes'

export const BaloisePipes: Plugin = {
  async install(app) {
    applyPipes(app)
  },
}

export const createBaloisePipes = (): Plugin => ({
  async install(app) {
    applyPipes(app)
  },
})
