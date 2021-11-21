// generated file by .scripts/pipes.index.js

export { balBlobToUrl } from './balBlobToUrl'
export { balCapitalize } from './balCapitalize'
export { balClaimNumber } from './balClaimNumber'
export { balContractNumber } from './balContractNumber'
export { balCurrency } from './balCurrency'
export { balDefaultString } from './balDefaultString'
export { balFileSize } from './balFileSize'
export { balHighlight } from './balHighlight'
export { balJoinArray } from './balJoinArray'
export { balLimit } from './balLimit'
export { balOfferNumber } from './balOfferNumber'
export { balPhoneNumber, PhoneNumber } from './balPhoneNumber'

export interface BalPipesStatic {
  balBlobToUrl: (value: Blob) => string
  balCapitalize: (value: any) => string
  balClaimNumber: (value: any) => string
  balContractNumber: (value: any) => string
  balCurrency: (value: any, currencySign: string, showZero: boolean, decimalLength: number) => string
  balDefaultString: (value: any, defaultString: string) => string
  balFileSize: (value: number) => string
  balHighlight: (value: string, search: string, cssClass: string) => string
  balJoinArray: (value: any, delimiter: string) => string
  balLimit: (value: any, limit: number) => string
  balOfferNumber: (value: any, varianteNr: string) => string
  balPhoneNumber: (value: any) => string
}
