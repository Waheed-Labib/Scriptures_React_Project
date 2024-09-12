export const setSelectedTranslationsIdsToLS = (selectedTranslationsIds) => {
    localStorage.setItem('aqtp-selected-translations-ids', JSON.stringify(selectedTranslationsIds))
}