import { BrowserType } from '@/types'

export default (): BrowserType | null => {
    if (usesBraveBrowser()) {
        return BrowserType.Brave
    }

    if (usesFirefoxBrowser()) {
        return BrowserType.Firefox
    }

    if (usesEdgeBrowser()) {
        return BrowserType.Edge
    }

    if (usesChromeBrowser()) {
        return BrowserType.Chrome
    }

    return null
}

function usesBraveBrowser(): boolean {
    // @ts-ignore
    return navigator.brave !== undefined
}

function usesFirefoxBrowser(): boolean {
    return navigator.userAgent.includes("Firefox")
}

function usesEdgeBrowser(): boolean {
    return navigator.userAgent.includes("Edge")
}

function usesChromeBrowser(): boolean {
    return navigator.userAgent.includes("Chrome")
}