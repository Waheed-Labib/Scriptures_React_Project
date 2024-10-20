import { useState } from "react";
import { useSurahInfo } from "../useSurahInfo";
import { useSurahList } from "../useSurahList";
import { useArabicVerse } from "../useArabicVerse";
import axios from "axios";

const useSearchResult = ({ searchText }) => {

    const [result, setResult] = useState([]);

    // result 1: check by surah number
    const result1 = useSurahInfo(parseInt(searchText))

    if (result1) {
        setResult([{
            resultType: 'chapter',
            result: result1
        }])
    }

    // result 2 : check by verse key
    const arabicVerse = useArabicVerse(searchText, 'uthmani');

    if (arabicVerse) setResult([{
        resultType: 'arabic verse',
        result: arabicVerse
    }])

    // result 3 : check by surah name
    const surahList = useSurahList();

    const chapters = surahList.filter(surah => {
        if (surah.name_simple.includes(searchText)) return {
            resultType: 'chapter',
            result: surah
        }
        if (surah.name_complex.includes(searchText)) return {
            resultType: 'chapter',
            result: surah
        }
        if (surah.name_arabic.includes(searchText)) return {
            resultType: 'chapter',
            result: surah
        }
    })

    if (chapters) setResult(chapters)

    // result 4 : check by part of verse
    axios.get(`https://api.quran.com/api/v4/search?q=${searchText}`)


    return result;
};

export default useSearchResult;