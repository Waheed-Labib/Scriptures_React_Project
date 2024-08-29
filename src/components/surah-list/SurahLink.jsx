import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SurahLink = ({ surah }) => {

    const { id, name_simple, name_arabic, verses_count, translated_name } = surah;

    return (
        <Link className="flex items-center justify-between border border-slate-600 hover:bg-slate-200 hover:shadow-md rounded shadow p-4">
            <div className="flex justify-start items-center gap-4">
                <div className="h-10 w-8 rounded flex justify-center items-center bg-slate-600 text-cyan-200">
                    <p>{id}</p>
                </div>

                <div className="">
                    <p className="text-xl font-semibold text-cyan-600">{name_simple}</p>
                    <p className="text-sm">{translated_name.name}</p>
                </div>
            </div>

            <div>
                <p className="text-lg">{name_arabic}</p>
                <p className="text-xs">{verses_count} Ayahs</p>
            </div>
        </Link>
    );
};

export default SurahLink;