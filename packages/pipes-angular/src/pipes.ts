// generated file by .build/generator.script.js

import { Pipe, PipeTransform } from '@angular/core';
import {
  balBlobToUrl,
  balCapitalize,
  balClaimNumber,
  balContractNumber,
  balCurrency,
  balDateString,
  balDefaultString,
  balFileSize,
  balHighlight,
  balHighlightStartsWith,
  balJoinArray,
  balLimit,
  balOfferNumber,
  balPhoneNumber
} from '@baloise/web-app-pipes'

@Pipe({
  name: 'balBlobToUrl'
})
export class BalBlobToUrlPipe implements PipeTransform {
  transform = balBlobToUrl
}

@Pipe({
  name: 'balCapitalize'
})
export class BalCapitalizePipe implements PipeTransform {
  transform = balCapitalize
}

@Pipe({
  name: 'balClaimNumber'
})
export class BalClaimNumberPipe implements PipeTransform {
  transform = balClaimNumber
}

@Pipe({
  name: 'balContractNumber'
})
export class BalContractNumberPipe implements PipeTransform {
  transform = balContractNumber
}

@Pipe({
  name: 'balCurrency'
})
export class BalCurrencyPipe implements PipeTransform {
  transform = balCurrency
}

@Pipe({
  name: 'balDateString'
})
export class BalDateStringPipe implements PipeTransform {
  transform = balDateString
}

@Pipe({
  name: 'balDefaultString'
})
export class BalDefaultStringPipe implements PipeTransform {
  transform = balDefaultString
}

@Pipe({
  name: 'balFileSize'
})
export class BalFileSizePipe implements PipeTransform {
  transform = balFileSize
}

@Pipe({
  name: 'balHighlight'
})
export class BalHighlightPipe implements PipeTransform {
  transform = balHighlight
}

@Pipe({
  name: 'balHighlightStartsWith'
})
export class BalHighlightStartsWithPipe implements PipeTransform {
  transform = balHighlightStartsWith
}

@Pipe({
  name: 'balJoinArray'
})
export class BalJoinArrayPipe implements PipeTransform {
  transform = balJoinArray
}

@Pipe({
  name: 'balLimit'
})
export class BalLimitPipe implements PipeTransform {
  transform = balLimit
}

@Pipe({
  name: 'balOfferNumber'
})
export class BalOfferNumberPipe implements PipeTransform {
  transform = balOfferNumber
}

@Pipe({
  name: 'balPhoneNumber'
})
export class BalPhoneNumberPipe implements PipeTransform {
  transform = balPhoneNumber
}

export const PIPES = [
  BalBlobToUrlPipe,
  BalCapitalizePipe,
  BalClaimNumberPipe,
  BalContractNumberPipe,
  BalCurrencyPipe,
  BalDateStringPipe,
  BalDefaultStringPipe,
  BalFileSizePipe,
  BalHighlightPipe,
  BalHighlightStartsWithPipe,
  BalJoinArrayPipe,
  BalLimitPipe,
  BalOfferNumberPipe,
  BalPhoneNumberPipe
]