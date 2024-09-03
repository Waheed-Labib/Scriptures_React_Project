// caution for developer:
// this hook will provide correct value, only if it is called in surah page

import axios from "axios";
import { useEffect, useState } from "react"

export const useSurahInfo = (surahId) => {
    const [surahInfo, setSurahInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        axios.get(`https://api.quran.com/api/v4/chapters/${surahId}`)
            .then(function (response) {
                setSurahInfo(response.data.chapter)
                setLoading(false)
            })
            .catch(function (error) {
                setError(error.message)
                setLoading(false)
            })

    }, [surahId])

    return { loading, error, surahInfo };
}