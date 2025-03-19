import axios from "axios";
import { useEffect, useState } from "react";
import SimpleSkeleton from "../../../../../components/simple-skeleton/SimpleSkeleton";
import UsersTranslationAccordion from "./UsersTranslationAccordion";

/* eslint-disable react/prop-types */
const UsersTranslations = ({ verse_key, refreshKey }) => {

    const [translations, setTranslations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const server = import.meta.env.SERVER;

    useEffect(() => {
        axios.get(`${server}/translations/get-translation?verse_key=${verse_key}`)
            .then(response => setTranslations(response.data.data))
            .catch(error => {
                const match = error.response.data.match(/<pre>Error: (.*?)<br>/);
                const errorMessage = match ? match[1] : "Unknown error";

                setError(`Failed! ${errorMessage}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [verse_key, refreshKey])

    if (loading) return (
        <SimpleSkeleton></SimpleSkeleton>
    )

    if (error) return (
        <p className="text-xs font- text-red-800">{error}</p>
    )

    if (translations.length < 1) return (
        <div className="mb-4">
            <p className="text-xs font-medium italic text-cyan-800">No user translated this verse.</p>
        </div>
    )
    return (
        <div>
            <UsersTranslationAccordion
                translations={translations}
            ></UsersTranslationAccordion>
        </div>
    );
};

export default UsersTranslations;