export const useSelectedTranslations = () => {
    const selectedTranslations = JSON.parse(localStorage.getItem('aqtp-selected-translations'))
    return selectedTranslations;
}