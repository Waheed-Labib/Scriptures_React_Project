import { isNumber } from "../isNumber";
import { isOneWord } from "../isOneWord";
import { isSurahNumber } from "../isSurahNumber";
import { isVerseKey } from "../isVerseKey";
import { setSearchResultWithSurahNameAndVerse } from "./setSearchResultWithSurahNameAndVerse";
import { setSearchResultWithSurahNumber } from "./setSearchResultWithSurahNumber";
import { setSearchResultWithVerse } from "./setSearchResultWithVerse";
import { setSearchResultWithVerseKey } from "./setSearchResultWithVerseKey";

export const commonSearch = (searchText, setSearchResults) => {

    if (!searchText) {
        setSearchResults([])
        return
    }

    if (isSurahNumber(searchText)) {
        setSearchResultWithSurahNumber(searchText, setSearchResults);
        return;
    }

    if (isNumber(searchText) && !isSurahNumber(searchText)) {
        setSearchResults([])
        return
    }

    if (isVerseKey(searchText)) {
        setSearchResultWithVerseKey(searchText, setSearchResults)
        return
    }

    if (!isOneWord(searchText)) {
        setSearchResultWithVerse(searchText, setSearchResults)
        return
    }

    if (isOneWord(searchText)) {
        setSearchResultWithSurahNameAndVerse(searchText, setSearchResults)
    }
}