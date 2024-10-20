import { isNumber } from "./isNumber"

export const isSurahNumber = (surahNum) => {
    if (isNumber(surahNum) && parseInt(surahNum) > 0 && parseInt(surahNum) < 115) {
        return true
    }

    else return false
}