import { balHighlightStartsWith } from './balHighlightStartsWith'

describe('balHighlightStartsWith', () => {
  test('should highlight search query in the text', () => {
    const highlightedSearchText = '<span class="bal-highlight">search</span> text'
    expect(balHighlightStartsWith('search text', 'search', 'bal-highlight')).toBe(highlightedSearchText)
  })
  test('should return same text without search query', () => {
    expect(balHighlightStartsWith('search text', 'text')).toBe('search text')
  })
})
