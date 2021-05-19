export const scrollToAnchorElement = (referenceName) => {
    const nodes = document.querySelectorAll(`[data-ref="${referenceName}"]`);
    if (nodes.length > 0) {
        nodes[0].scrollIntoView();
    }
};
export const scrollToTopOfBody = () => {
    window.scrollTo(0, 0);
};
export const open = (url) => {
    return openWindowSafely(url, "_self");
};
export const openInNewWindow = (url) => {
    return openWindowSafely(url, "_blank");
};
const openWindowSafely = (url, target) => {
    let newWindow = window.open(url, target);
    // prevent a security hazard: the new window is able to access window.opener (e.g. replace window.opener.location)
    if (newWindow != null && newWindow.opener != null) {
        newWindow.opener = undefined;
    }
    return newWindow;
};
export const getBrowserLanguage = () => {
    // e.g. de-CH
    // userLanguage is only for IE11
    let browserLocale = window.navigator.language || window.navigator["userLanguage"];
    if (browserLocale.indexOf("-") === 2) {
        return browserLocale.substr(0, 2);
    }
    else {
        return browserLocale;
    }
};
export const disableDragAndDropFiles = () => {
    window.addEventListener("dragover", (e) => e.preventDefault(), false);
    window.addEventListener("drop", (e) => e.preventDefault(), false);
};
export const getBrowserInfo = () => {
    return {
        cookiesEnabled: window.navigator.cookieEnabled,
        language: window.navigator.language,
        userAgent: window.navigator.userAgent,
        timezone: getBrowserTimezone(),
    };
};
function getBrowserTimezone() {
    let timezoneOffset = new Date().getTimezoneOffset();
    return timezoneOffset >= 0 ? `+${timezoneOffset}` : `-${timezoneOffset * -1}`;
}
//# sourceMappingURL=index.js.map