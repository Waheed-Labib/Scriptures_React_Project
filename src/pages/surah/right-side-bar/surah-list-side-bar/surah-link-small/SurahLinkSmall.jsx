// import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SurahLinkSmall = ({ surah }) => {

    const { id, name_simple } = surah;

    return (
        <a href={`/surah/${id}`} className="flex items-center justify-start gap-8 border border-slate-100 bg-slate-100 hover:border-cyan-700 p-2 rounded">
            <p className="text-gray-500">{id}.</p>
            <p className="text-sm text-cyan-700">{name_simple}</p>
        </a>
    );
};

export default SurahLinkSmall;