const KOSSY_CLAIM_NUMBER = 11
const CLAIM_CENTER_CLAIM_NUMBER = 12

/**
 * Transforms the given string into the correct claim-number format.
 *
 * ```typescript
 * balClaimNumber('73001217169') // 73/001217/16.9
 * balClaimNumber('412345678221') // 4.12345678.22.1 // L.NNNNNNNN.JJ.P
 * balClaimNumber('400045678221') // 4.45678.22.1
 * balClaimNumber('400045678021') // 4.45678.2.1
 * ```
 */
export function balClaimNumber(value: string | undefined | null | number): string {
  if (!value) {
    return ''
  }
  value = `${value}`.trim()
  console.log('domi balClaimNumber value:', value.length)
  if (value.length === KOSSY_CLAIM_NUMBER) {
    return handleKossyClaimNumber(value)
  } else if (value.length === CLAIM_CENTER_CLAIM_NUMBER) {
    return handleClaimCenterClaimNumber(value)
  }
  return value
}

function handleKossyClaimNumber(value: string): string {
  const parts = value.match(/^(\d{2})(\d{6})(\d{2})(\w{1})$/)
  console.log('domi handle kossy:', value.length)
  if (!parts) {
    return value
  }
  return `${parts[1]}/${parts[2]}/${parts[3]}.${parts[4]}`
}

function handleClaimCenterClaimNumber(value: string): string {
  const parts = value.match(/^(\d)(\d{8})(\d{2})(\d)$/)
  console.log('domi handle claimcenter:', value.length)
  if (!parts) {
    return value
  }
  return (
    removeLeadingZeros(parts[1]) +
    '.' +
    removeLeadingZeros(parts[2]) +
    '.' +
    removeLeadingZeros(parts[3]) +
    '.' +
    removeLeadingZeros(parts[4])
  )
}

function removeLeadingZeros(str: string): string {
  return str.replace(/^0+/, '')
}
