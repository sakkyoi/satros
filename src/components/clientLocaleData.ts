declare global {
    interface Window {
        localeData: { [key: string]: string }
        locale: string
    }
}

export const locale = window.locale;

export const getLocalString = (key: string): string => {
    return window.localeData[key] || key;
}
