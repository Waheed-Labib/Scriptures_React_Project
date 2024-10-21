import axios from "axios"

export const setSearchResultWithSurahNameAndVerse = (searchText, setSearchResults) => {

    axios.get('https://api.quran.com/api/v4/chapters')
        .then(function (responseSurahNames) {

            const surahNames = responseSurahNames.data.chapters.filter(
                surah =>
                    surah.name_simple.toLowerCase().includes(searchText.toLowerCase())
                    ||
                    surah.name_complex.toLowerCase().includes(searchText.toLowerCase())
                    ||
                    surah.name_arabic.includes(searchText)
            )

            axios.get(`https://api.quran.com/api/v4/search?q=${searchText}`)
                .then(function (responseVerses) {
                    setSearchResults([
                        {
                            searchType: 'chapter',
                            searchResult: surahNames
                        },
                        {
                            searchType: 'verse',
                            searchResult: [responseVerses.data.search]
                        }
                    ])
                })

        })
}