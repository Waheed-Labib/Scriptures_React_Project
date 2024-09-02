// caution for developer:
// this hook will provide correct value, only if it is called in surah page

import { useEffect, useState } from "react"

export const useSurahInfo = (surahId) => {
    const [surahInfo, setSurahInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.quran.com/api/v4/chapters/${surahId}`)
            .then(res => res.json())
            .then(data => {
                setSurahInfo(data.chapter)
                setLoading(false)
            })
        // handle error
    }, [surahId])

    return { loading, surahInfo };
}