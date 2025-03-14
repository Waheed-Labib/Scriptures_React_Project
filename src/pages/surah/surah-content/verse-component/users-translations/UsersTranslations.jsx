import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../../../../../constants";
import SimpleSkeleton from "../../../../../components/simple-skeleton/SimpleSkeleton";

/* eslint-disable react/prop-types */
const UsersTranslations = ({ verse_key }) => {

    const [translations, setTranslations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
    }, [verse_key])

    if (loading) return (
        <SimpleSkeleton></SimpleSkeleton>
    )

    if (error) return (
        <p className="text-xs font- text-red-800">{error}</p>
    )

    if (translations.length < 1) return (
        <div className="mb-4">
            <p className="text-xs font-medium italic text-cyan-800">User Translation not available for this verse.</p>
        </div>
    )
    return (
        <div>
            <p className="text-sm font-medium italic underline underline-offset-4 text-cyan-800 mb-4">Users&apos; Translation</p>
            {
                translations.map(translation => <div
                    key={translation._id}
                    className="mb-4">
                    <p className="text-sm">{translation.content}</p>
                    <p className="text-xs">- {translation.translatorName}</p>
                </div>)
            }
        </div>
    );
};

export default UsersTranslations;