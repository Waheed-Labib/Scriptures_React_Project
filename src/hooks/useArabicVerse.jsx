import { useEffect, useState } from "react";

export const useArabicVerse = (verse_key, font) => {
    const [arabicVerse, setArabicVerse] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`https://api.quran.com/api/v4/quran/verses/${font}?verse_key=${verse_key}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (font === 'uthmani') setArabicVerse(data.verses[0].text_uthmani)
                if (font === 'indopak') setArabicVerse(data.verses[0].text_indopak)
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    }, [font, verse_key])

    return { arabicVerse, loading, error }
}