// caution for developer:
// this hook will provide correct value, only if it is called in surah page

import { useEffect, useState } from "react"

export const useSurahInfo = (surahId) => {
    const [surahInfo, setSurahInfo] = useState([]);

    useEffect(() => {
        fetch(`https://api.quran.com/api/v4/chapters/${surahId}`)
            .then(res => res.json())
            .then(data => setSurahInfo(data.chapter))
        // handle error
    }, [surahId])

    return surahInfo;
}