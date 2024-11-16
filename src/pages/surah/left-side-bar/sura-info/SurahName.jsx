/* eslint-disable react/prop-types */
import { useSurahId } from "../../../../hooks/useSurahId";
import { useSurahInfo } from "../../../../hooks/useSurahInfo";

const SurahName = () => {

    const surahId = useSurahId();
    const { surahInfo } = useSurahInfo(surahId);
    const { id, name_arabic, name_simple } = surahInfo;

    return (
        <div className='m-8 lg:m-0 text-center lg:text-start'>
            <h3 className="pl-2 text-sm font-semibold text-gray-500 mb-2">Chapter {id}</h3>
            <h2 className="pl-2 text-xl my-1">{name_arabic}</h2>
            <h1 className="pl-2 text-3xl font-bold text-cyan-600"> {name_simple}</h1>
        </div>
    );
};

export default SurahName;