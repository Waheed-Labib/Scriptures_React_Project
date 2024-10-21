import axios from "axios"

export const setSearchResultWithSurahNumber = (surahId, setSearchResults) => {
    axios.get(`https://api.quran.com/api/v4/chapters/${surahId}`)
        .then(function (response) {
            setSearchResults([
                {
                    searchType: 'chapter',
                    searchResult: [response.data.chapter]
                }
            ])
        })
}