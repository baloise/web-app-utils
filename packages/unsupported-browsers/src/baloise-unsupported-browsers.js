(function () {
  function isSupportedBrowser() {
    const isIe11 = !!window.MSInputMethodContext && !!document.documentMode;
    const isEdgeLegacy = navigator.userAgent.indexOf("Edge/") > -1;
    return !isIe11 && !isEdgeLegacy;
  }

  function includes(array, search) {
    return array.indexOf(search) >= 0;
  }

  function getLanguage(scriptLang) {
    if (!scriptLang) {
      return navigator.language.substring(0, 2).toLowerCase();
    }
    return scriptLang.toLowerCase();
  }

  function getLocation(scriptLocation) {
    let location = (scriptLocation || "ch").toLowerCase();

    const allowedLocations = ["ch", "de", "be", "lu"];
    if (!includes(allowedLocations, location)) {
      return "ch";
    }

    return location;
  }

  function validateLanguage(language, location) {
    const allowedLangsBe = ["fr", "nl"];
    if (location === "be" && !includes(allowedLangsBe, language)) {
      return "fr";
    }

    const allowedLangsDe = ["de"];
    if (location === "de" && !includes(allowedLangsDe, language)) {
      return "de";
    }

    const allowedLangsCh = ["de", "fr", "it", "en"];
    if (location === "ch" && !includes(allowedLangsCh, language)) {
      return "de";
    }

    const allowedLangsLu = ["fr", "de", "en"];
    if (location === "lu" && !includes(allowedLangsLu, language)) {
      return "fr";
    }

    return language;
  }

  function main() {
    if (!isSupportedBrowser()) {
      const scriptElement = document.querySelector(
        "[src$='baloise-unsupported-browsers.js']"
      );
      if (scriptElement) {
        const location = getLocation(scriptElement.dataset.location);
        const language = validateLanguage(
          getLanguage(scriptElement.dataset.language),
          location
        );

        window.location.href = `https://baloise.com/unsupported-browsers/${location}/${language}`;
      }
    }
  }

  main();
})();
