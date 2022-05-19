// generated file by .build/pipes.index.js

export { balBlobToUrl } from './balBlobToUrl'
export { balCapitalize } from './balCapitalize'
export { balClaimNumber } from './balClaimNumber'
export { balContractNumber } from './balContractNumber'
export { balCurrency } from './balCurrency'
export { balDateString } from './balDateString'
export { balDefaultString } from './balDefaultString'
export { balFileSize } from './balFileSize'
export { balHighlight } from './balHighlight'
export { balHighlightStartsWith } from './balHighlightStartsWith'
export { balJoinArray } from './balJoinArray'
export { balLimit } from './balLimit'
export { balOfferNumber } from './balOfferNumber'
export { balPhoneNumber, PhoneNumber } from './balPhoneNumber'

export interface BalPipesStatic {
  balBlobToUrl: (value: Blob) => string
  balCapitalize: (value: any) => string
  balClaimNumber: (value: any) => string
  balContractNumber: (value: any) => string
  balCurrency: (value: any, currencySign: any, showZero: any, decimalLength: any) => string
  balDateString: (value: any) => string
  balDefaultString: (value: any, defaultString: any) => string
  balFileSize: (value: number) => string
  balHighlight: (value: string, search: string, cssClass: any) => string
  balHighlightStartsWith: (value: string, search: string, cssClass: any) => string
  balJoinArray: (value: any, delimiter: any) => string
  balLimit: (value: any, limit: any) => string
  balOfferNumber: (value: any, varianteNr: string) => string
  balPhoneNumber: (value: any) => string
}
