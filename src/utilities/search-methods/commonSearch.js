import { isOneWord } from "../isOneWord";
import { isSurahNumber } from "../isSurahNumber";
import { isVerseKey } from "../isVerseKey";
import { setSearchResultWithSurahName } from "./setSearchResultWithSurahName";
import { setSearchResultWithSurahNumber } from "./setSearchResultWithSurahNumber";
import { setSearchResultWithVerseKey } from "./setSearchResultWithVerseKey";

export const commonSearch = (searchText, setSearchResults) => {

    if (isSurahNumber(searchText)) {
        setSearchResultWithSurahNumber(searchText, setSearchResults);
        return;
    }

    if (isVerseKey(searchText)) {
        setSearchResultWithVerseKey(searchText, setSearchResults)
        return
    }

    if (isOneWord(searchText)) {
        setSearchResultWithSurahName(searchText, setSearchResults)
    }
}