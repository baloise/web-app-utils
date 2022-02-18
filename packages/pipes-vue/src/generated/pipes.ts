// generated file by .build/generator.script.js

import { App } from 'vue'
import {
  balBlobToUrl,
  balCapitalize,
  balClaimNumber,
  balContractNumber,
  balCurrency,
  balDataString,
  balDefaultString,
  balFileSize,
  balHighlight,
  balJoinArray,
  balLimit,
  balOfferNumber,
  balPhoneNumber
} from '@baloise/web-app-pipes'

export const applyPipes = (app: App) => {
  app.config.globalProperties.$balBlobToUrl = balBlobToUrl
  app.config.globalProperties.$balCapitalize = balCapitalize
  app.config.globalProperties.$balClaimNumber = balClaimNumber
  app.config.globalProperties.$balContractNumber = balContractNumber
  app.config.globalProperties.$balCurrency = balCurrency
  app.config.globalProperties.$balDataString = balDataString
  app.config.globalProperties.$balDefaultString = balDefaultString
  app.config.globalProperties.$balFileSize = balFileSize
  app.config.globalProperties.$balHighlight = balHighlight
  app.config.globalProperties.$balJoinArray = balJoinArray
  app.config.globalProperties.$balLimit = balLimit
  app.config.globalProperties.$balOfferNumber = balOfferNumber
  app.config.globalProperties.$balPhoneNumber = balPhoneNumber

}
