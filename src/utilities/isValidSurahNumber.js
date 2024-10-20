export const isValidSurahNumber = (surahNum) => {
    if (surahNum > 0 && surahNum < 115) {
        return true
    }

    return false
}