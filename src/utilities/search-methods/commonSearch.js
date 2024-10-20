import { isNumber } from "../isNumberr";
import { isValidSurahNumber } from "../isValidSurahNumber"
import { setSearchResultInvalid } from "./setSearchResultInvalid";
import { setSearchResultWithSurahNumber } from "./setSearchResultWithSurahNumber";

export const commonSearch = (searchText, setSearchResults) => {

    if (isNumber(searchText) && !isValidSurahNumber(parseInt(searchText))) {
        setSearchResultInvalid(setSearchResults);
        return;
    }

    if (isNumber(searchText) && isValidSurahNumber(parseInt(searchText))) {
        setSearchResultWithSurahNumber(parseInt(searchText), setSearchResults);
        return;
    }

}