import { GERMAN, Language, LanguagesOfSwitzerland } from '../language/index'
import { getIntegrationUrl, IntegrationType, Region } from './app-integration'

export const loadOneTrustBaloiseSwitzerland = (lang?: Language): Promise<void> => {
  return loadOnetrustDataSwitzerland().then((cmsData: OnetrustData[]) => {
    const win = window
    if (win && win.localStorage && win.localStorage.getItem('onetrust_debug_mode') === 'true') {
      return
    }

    const effectiveLang = LanguagesOfSwitzerland.valueOfOrDefault(lang ? lang.key : undefined)
    const oneTrustData = cmsData.find(entry => entry.lang === effectiveLang.key)
    if (oneTrustData) {
      const oneTrustScript = oneTrustData.script
      includeScriptsFromString(oneTrustScript)
    }
    return
  })
}

const includeScriptsFromString = (scriptAsString: string): void => {
  const sandbox = document.implementation.createHTMLDocument()
  sandbox.body.innerHTML = scriptAsString
  const scripts: HTMLCollectionOf<HTMLScriptElement> = sandbox.getElementsByTagName('script')
  for (let i = 0; i < scripts.length; i++) {
    const scriptElement = document.createElement('script')
    scriptElement.type = scripts[i].type
    scriptElement.src = scripts[i].src
    scriptElement.innerHTML = scripts[i].innerHTML
    for (let j = 0; j < scripts[i].attributes.length; j++) {
      scriptElement.setAttribute(scripts[i].attributes[j].name, scripts[i].attributes[j].value)
    }
    document.getElementsByTagName('head')[0].appendChild(scriptElement)
  }
}

interface OnetrustData {
  lang: string
  script: string
}

const loadOnetrustDataSwitzerland = (lang: Language = GERMAN, region: Region = 'CH'): Promise<OnetrustData[]> => {
  const url = getIntegrationUrl(lang, region, IntegrationType.ONETRUST)
  return fetch(url)
    .then(res => res.json())
    .then(res => res as OnetrustData[])
}
