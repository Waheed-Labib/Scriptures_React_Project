import axios from "axios";
import { useEffect, useState } from "react";

export const useArabicVerse = (verse_key, font) => {
    const [arabicVerse, setArabicVerse] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {

        axios.get(`https://api.quran.com/api/v4/quran/verses/${font}?verse_key=${verse_key}`)
            .then(function (response) {
                if (font === 'uthmani') setArabicVerse(response.data.verses[0].text_uthmani)
                if (font === 'indopak') setArabicVerse(response.data.verses[0].text_indopak)
                setLoading(false)
            })
            .catch(function () {
                setError(true)
                setLoading(false)
            })

    }, [font, verse_key])

    return { arabicVerse, loading, error }
}