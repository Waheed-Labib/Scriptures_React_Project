import { isNumber } from "../isNumberr";
import { isValidSurahNumber } from "../isValidSurahNumber"
import { isVerseKeyFormat } from "../isVerseKeyFormat";
import { setSearchResultInvalid } from "./setSearchResultInvalid";
import { setSearchResultWithSurahNumber } from "./setSearchResultWithSurahNumber";
import { setSearchResultWithVerseKey } from "./setSearchResultWithVerseKey";

export const commonSearch = (searchText, setSearchResults) => {

    if (isNumber(searchText) && !isValidSurahNumber(parseInt(searchText))) {
        setSearchResultInvalid(setSearchResults);
        return;
    }

    if (isNumber(searchText) && isValidSurahNumber(parseInt(searchText))) {
        setSearchResultWithSurahNumber(parseInt(searchText), setSearchResults);
        return;
    }

    if (isVerseKeyFormat(searchText)) {
        setSearchResultWithVerseKey(searchText, setSearchResults)
        return
    }
}