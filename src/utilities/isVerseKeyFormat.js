import { isNumber } from "./isNumberr"

export const isVerseKeyFormat = (str) => {

    const stringSplitByColon = str.split(':');

    if (stringSplitByColon.length === 2 && isNumber(stringSplitByColon[0]) && isNumber(stringSplitByColon[1])) return true

    return false
}