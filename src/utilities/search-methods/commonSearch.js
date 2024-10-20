export const commonSearch = (searchText, setSearchResults) => {
    // check if it is a surah number
    if (!isNaN(searchText)) {
        const surahNum = parseInt(searchText)
        if (surahNum < 1 || surahNum > 114) {
            setSearchResults([
                {
                    searchType: 'invalid'
                }
            ])

            return
        }
    }
}