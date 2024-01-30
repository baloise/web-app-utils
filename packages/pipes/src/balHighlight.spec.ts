import { balHighlight } from './balHighlight'

describe('balHighlight', () => {
  test('should highlight search query in the text', () => {
    const highlightedSearchText = 'search <span class="bal-highlight">text</span>'
    expect(balHighlight('search text', 'text', 'bal-highlight')).toBe(highlightedSearchText)
  })
  test('should return same text without search query', () => {
    expect(balHighlight('search text', '')).toBe('search text')
  })
  test('should highlight only text, not the text inside href', () => {
    expect(
      balHighlight(
        `<a href="localhost:4200/mybaloise-api/api/documents/v1/12345678-1234-4321-1234-123456789012-12345678?filename=Vertrag" target="_blank">Vertrag</a>`,
        'Vertrag',
      ),
    ).toBe(
      `<a href="localhost:4200/mybaloise-api/api/documents/v1/12345678-1234-4321-1234-123456789012-12345678?filename=Vertrag" target="_blank"><span class="bal-highlight">Vertrag</span></a>`,
    )
  })
  test('should return the same text without highlighting when searching <', () => {
    expect(balHighlight(`<b style="font-weight: 700;">Vertrag</b>`, '<')).toBe(
      `<b style="font-weight: 700;">Vertrag</b>`,
    )
  })
  test('should return the same text without highlighting when searching html props', () => {
    expect(balHighlight(`<b style="font-weight: 700;">Vertrag</b>`, 'font-weight')).toBe(
      `<b style="font-weight: 700;">Vertrag</b>`,
    )
  })
})
