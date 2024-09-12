export const setSelectedTranslationsToLS = (selectedTranslations) => {
    localStorage.setItem('aqtp-selected-translations', JSON.stringify(selectedTranslations))
}