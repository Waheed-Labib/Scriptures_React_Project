export const searchChapter = (setSearchResult, surahList, searchText) => {
    //cancel previous result
    setSearchResult([])

    // search with new searchText
    surahList?.map(surah => {

        if (parseInt(surah.id) === parseInt(searchText)) return setSearchResult(prevResult => [...prevResult, surah]);

        else if (surah.name_simple.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, surah]);

        else if (surah.name_arabic.includes(searchText)) return setSearchResult(prevResult => [...prevResult, surah]);
    })

} 