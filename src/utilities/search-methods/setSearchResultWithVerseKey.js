import axios from "axios"

export const setSearchResultWithVerseKey = (verseKey, setSearchResults) => {

    // get the verse with api
    axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=${verseKey}`)
        .then(function (responseVerse) {

            // get the default translation with api 
            axios.get(`https://api.quran.com/api/v4/quran/translations/131?verse_key=${verseKey}`)

                .then(function (responseTranslation) {

                    if (responseTranslation.data.translations.length === 0) {
                        setSearchResults([])
                        return
                    }

                    setSearchResults([
                        {
                            searchType: 'verse key',
                            searchResult: [{
                                verseKey: verseKey,
                                arabicVerse: responseVerse.data.verses[0].text_uthmani,
                                translation: responseTranslation.data.translations[0].text,
                                translationName: responseTranslation.data.meta.translation_name
                            }]
                        }
                    ])
                })

        })

}