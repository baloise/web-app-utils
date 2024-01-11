/**
 * Transforms the given text into a highlighted html content.
 *
 * ```typescript
 * balHighlight('Some Text') // <span class="bal-highlight">Some Text</span>
 * ```
 */
export function balHighlight(value: string, search: string, cssClass = 'bal-highlight'): string {
  if (search && value) {
    let hrefTag = '(href=\"[^>]+\")|('
    let pattern = hrefTag
      .concat(search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'))
      .concat(')')
    pattern = pattern
      .split(' ')
      .filter(t => {
        return t.length > 0
      })
      .join('|')
    const regex = new RegExp(pattern, 'gi')
    return value.replace(regex, match => {
      return match.includes('href') ? match : `<span class="bal-highlight">${match}</span>`
    })
  } else {
    return value
  }
}
