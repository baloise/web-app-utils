const CMS_CH_API = 'https://www.baloise.ch/.rest/mt/baloise-ch@nodes';
const ONETRUST_KEY = 'onetrust-de';

export const loadOneTrustBaloiseSwitzerland = (): void => {
  void loadCMSDataSwitzerland().then((cmsData: CMSData[]) => {
    const oneTrustData = cmsData.find(entry => entry.name === ONETRUST_KEY);
    if (oneTrustData) {
      const oneTrustScript = oneTrustData.content;
      includeScriptsFromString(oneTrustScript);
    }
  });
};

const includeScriptsFromString = (scriptAsString: string): void => {
  const sandbox = document.implementation.createHTMLDocument();
  sandbox.body.innerHTML = scriptAsString;
  const scripts: HTMLCollectionOf<HTMLScriptElement> = sandbox.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const scriptElement = document.createElement('script');
    scriptElement.type = scripts[i].type;
    scriptElement.src = scripts[i].src;
    scriptElement.innerHTML = scripts[i].innerHTML;
    for (let j = 0; j < scripts[i].attributes.length; j++) {
      scriptElement.setAttribute(scripts[i].attributes[j].name, scripts[i].attributes[j].value);
    }
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  }
}

interface CMSData {
  name: string;
  content: string;
}

const loadCMSDataSwitzerland = (): Promise<CMSData[]> => {
  return fetch(CMS_CH_API)
  .then(res => res.json())
  .then(res => {
    return res as CMSData[];
  });
}
