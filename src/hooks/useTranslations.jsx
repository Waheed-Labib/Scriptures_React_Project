import axios from "axios"
import { useEffect, useState } from "react"

export const useTranslations = (languageName) => {

    const [translations, setTranslations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/resources/translations`)
            .then(function (response) {
                if (languageName) setTranslations(response.data.translations.filter(translation => translation.language_name === languageName))
                else setTranslations(response.data.translations)
                setLoading(false)
            })
            .catch(function (err) {
                setError(err.message)
                setLoading(false)
            })

    }, [languageName])

    return { translations, loading, error }
}