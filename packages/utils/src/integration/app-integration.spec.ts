import { getIntegrationBaseUrl, getIntegrationUrl } from './app-integration'
import * as something from './app-integration'
import { ENGLISH, FRENCH, GERMAN, ITALIAN } from '../language'

describe('getBaseUrl', () => {
  test('should determine the base url for something.com', () => {
    spyOn(something, 'getHost' as any).and.returnValue('www.something.com')
    expect(getIntegrationBaseUrl()).toBe('https://www.baloise.ch')
  })
  test('should determine the base url for empty host', () => {
    spyOn(something, 'getHost' as any).and.returnValue('')
    expect(getIntegrationBaseUrl()).toBe('https://www.baloise.ch')
  })
  test('should determine the base url for baloise.ch', () => {
    spyOn(something, 'getHost' as any).and.returnValue('www.baloise.ch')
    expect(getIntegrationBaseUrl()).toBe('https://www.baloise.ch')
  })
  test('should determine the base url for acc-www.baloise.ch', () => {
    spyOn(something, 'getHost' as any).and.returnValue('acc-www.baloise.ch')
    expect(getIntegrationBaseUrl()).toBe('https://acc-www.baloise.ch')
  })
})

describe('getBaseUrl', () => {
  test('should determine the integration url for DE standard', () => {
    expect(getIntegrationUrl(GERMAN)).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/de.json')
  })
  test('should determine the integration url for FR standard', () => {
    expect(getIntegrationUrl(FRENCH)).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/fr.json')
  })
  test('should determine the integration url for FR standard', () => {
    expect(getIntegrationUrl(ITALIAN)).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/it.json')
  })
  test('should determine the integration url for EN standard', () => {
    expect(getIntegrationUrl(ENGLISH)).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/en.json')
  })
  test('should determine the integration url for region DE and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'DE')).toBe('https://www.baloise.ch/app-integration/v2/de/footer/de.json')
  })
  test('should determine the integration url for region DE and lang EN', () => {
    expect(getIntegrationUrl(ENGLISH, 'DE')).toBe('https://www.baloise.ch/app-integration/v2/de/footer/de.json')
  })
  test('should determine the integration url for region DE and lang FR', () => {
    expect(getIntegrationUrl(FRENCH, 'DE')).toBe('https://www.baloise.ch/app-integration/v2/de/footer/de.json')
  })
  test('should determine the integration url for region CH and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'CH')).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/de.json')
  })
  test('should determine the integration url for region CH and lang FR', () => {
    expect(getIntegrationUrl(FRENCH, 'CH')).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/fr.json')
  })
  test('should determine the integration url for region CH and lang IT', () => {
    expect(getIntegrationUrl(ITALIAN, 'CH')).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/it.json')
  })
  test('should determine the integration url for region CH and lang EN', () => {
    expect(getIntegrationUrl(ENGLISH, 'CH')).toBe('https://www.baloise.ch/app-integration/v2/ch/footer/en.json')
  })
  test('should determine the integration url for region CH and type footer and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'CH', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/ch/footer/de.json',
    )
  })
  test('should determine the integration url for region CH and type footer and lang FR', () => {
    expect(getIntegrationUrl(FRENCH, 'CH', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/ch/footer/fr.json',
    )
  })
  test('should determine the integration url for region CH and type footer and lang IT', () => {
    expect(getIntegrationUrl(ITALIAN, 'CH', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/ch/footer/it.json',
    )
  })
  test('should determine the integration url for region CH and type footer and lang EN', () => {
    expect(getIntegrationUrl(ENGLISH, 'CH', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/ch/footer/en.json',
    )
  })
  test('should determine the integration url for region DE and type footer and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'DE', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/de/footer/de.json',
    )
  })
  test('should determine the integration url for region DE and type footer and lang IT', () => {
    expect(getIntegrationUrl(ITALIAN, 'DE', something.IntegrationType.FOOTER)).toBe(
      'https://www.baloise.ch/app-integration/v2/de/footer/de.json',
    )
  })
  test('should determine the integration url for region DE and type consentmanager and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'DE', something.IntegrationType.CONSENT_MANAGER)).toBe(
      'https://www.baloise.ch/app-integration/v3/de/consent.json',
    )
  })
  test('should determine the integration url for region DE and type consentmanager and lang FR', () => {
    expect(getIntegrationUrl(FRENCH, 'DE', something.IntegrationType.CONSENT_MANAGER)).toBe(
      'https://www.baloise.ch/app-integration/v3/de/consent.json',
    )
  })
  test('should determine the integration url for region CH and type consentmanager and lang DE', () => {
    expect(getIntegrationUrl(GERMAN, 'CH', something.IntegrationType.CONSENT_MANAGER)).toBe(
      'https://www.baloise.ch/app-integration/v3/ch/consent.json',
    )
  })
  test('should determine the integration url for region CH and type consentmanager and lang DE', () => {
    expect(getIntegrationUrl(FRENCH, 'CH', something.IntegrationType.CONSENT_MANAGER)).toBe(
      'https://www.baloise.ch/app-integration/v3/ch/consent.json',
    )
  })
  test('should determine the integration url for region CH and type consentmanager and lang DE', () => {
    expect(getIntegrationUrl(ITALIAN, 'CH', something.IntegrationType.CONSENT_MANAGER)).toBe(
      'https://www.baloise.ch/app-integration/v3/ch/consent.json',
    )
  })
})
