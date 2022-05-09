/**
 * Transforms the given text into a highlighted html content.
 *
 * ```typescript
 * balHighlightStartsWith('Some Text', 'Some') // <span class="bal-highlight">Some</span> Text
 * ```
 */
export function balHighlightStartsWith(value: string, search: string, cssClass = 'bal-highlight'): string {
  if (search && value && value.startsWith(search)) {
    return `<span class="${cssClass}">${search}</span>${value.replace(search, '')}`
  } else {
    return value
  }
}
