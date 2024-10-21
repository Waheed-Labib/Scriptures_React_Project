import axios from "axios"

export const setSearchResultWithVerse = (searchText, setSearchResults) => {
    axios.get(`https://api.quran.com/api/v4/search?q=${searchText}`)
        .then(function (response) {
            setSearchResults([{
                searchType: 'verse',
                searchResult: [response.data.search]
            }])
        })
}