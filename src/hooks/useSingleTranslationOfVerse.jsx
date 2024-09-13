import axios from "axios"
import { useEffect, useState } from "react"

export const useSingleTranslationOfVerse = (translationId, verse_key) => {

    const [translation, setTranslation] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/quran/translations/${translationId}?verse_key=${verse_key}`)

            .then(function (response) {
                setTranslation(response.data.translations[0].text)
                setLoading(false)
            })

            .catch(function (err) {
                setError(err.message)
                setLoading(false)
            })

    }, [translationId, verse_key])

    return { translation, loading, error }
}