import axios from "axios"

export const setSearchResultWithSurahName = (surahName, setSearchResults) => {

    axios.get('https://api.quran.com/api/v4/chapters')
        .then(function (response) {

            const results = response.data.chapters.filter(
                surah =>
                    surah.name_simple.toLowerCase().includes(surahName.toLowerCase())
                    ||
                    surah.name_complex.toLowerCase().includes(surahName.toLowerCase())
                    ||
                    surah.name_arabic.includes(surahName)
            )

            setSearchResults([
                {
                    searchType: 'multiple chapters',
                    searchResult: results
                }
            ])
        })
}