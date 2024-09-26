export const searchTranslationWithNewSearchText = (setSearchResult, translations, searchText) => {
    setSearchResult([])

    translations?.map(translation => {

        if (translation.language_name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);

        else if (translation.author_name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);

        else if (translation.name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);
    })
}