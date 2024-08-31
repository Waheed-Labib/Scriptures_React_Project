export const getVersesByVersesInfo = (versesInfoArray, font) => {
    let verses = [];

    versesInfoArray.map((verseInfo) => {
        fetch(`https://api.quran.com/api/v4/quran/verses/${font}?verse_key=${verseInfo?.verse_key}`)
            .then(res => res.json())
            .then(data => verses.push(data))
    })

    return verses;
}