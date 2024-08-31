export const getVersesByVersesInfo = (versesInfoArray, font) => {
    console.log(versesInfoArray)
    const verses = versesInfoArray.map(verseInfo => {
        fetch(`https://api.quran.com/api/v4/quran/verses/${font}?verse_key=${verseInfo?.verse_key}`)
            .then(res => res.json())
            .then(data => verses.push(data))
    })

    return verses
}