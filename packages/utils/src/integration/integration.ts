import { Language, LanguagesOfSwitzerland } from '../language/index'

const CMS_CH_API = 'https://www.baloise.ch/app-integration/v2/onetrust/all.json'

export const loadOneTrustBaloiseSwitzerland = (lang?: Language): void => {
  void loadOnetrustDataSwitzerland().then((cmsData: OnetrustData[]) => {
    const effectiveLang = LanguagesOfSwitzerland.valueOfOrDefault(lang ? lang.key : undefined)
    const oneTrustData = cmsData.find(entry => entry.lang === effectiveLang.key)
    if (oneTrustData) {
      const oneTrustScript = oneTrustData.script
      includeScriptsFromString(oneTrustScript)
    }
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

const loadOnetrustDataSwitzerland = (): Promise<OnetrustData[]> => {
  return fetch(CMS_CH_API)
    .then(res => res.json())
    .then(res => res as OnetrustData[])
}
