import axios from "axios"
import { useEffect, useState } from "react"

export const useLanguages = () => {

    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`https://api.quran.com/api/v4/resources/languages`)
            .then(function (response) {
                setLanguages(response.data.languages)
                setLoading(false)
            })
            .catch(function (err) {
                setError(err.message)
                setLoading(false)
            })

    }, [])

    return { languages, loading, error }
}