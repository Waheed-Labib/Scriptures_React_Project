import { isNumber } from "./isNumber"

export const isVerseKey = (str) => {

    const stringSplitByColon = str.split(':');

    if (stringSplitByColon.length === 2 && isNumber(stringSplitByColon[0]) && isNumber(stringSplitByColon[1])) return true

    else return false
}