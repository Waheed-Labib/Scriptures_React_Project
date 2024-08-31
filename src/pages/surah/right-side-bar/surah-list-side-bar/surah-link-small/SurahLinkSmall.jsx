import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SurahLinkSmall = ({ surah }) => {

    const { id, name_simple } = surah;

    return (
        <Link to={`/surah/${id}`} className="flex items-center justify-start gap-8 border border-slate-200 bg-slate-200 hover:border-slate-500 p-2 rounded">
            <p>{id}.</p>
            <p className="text-sm">{name_simple}</p>
        </Link>
    );
};

export default SurahLinkSmall;