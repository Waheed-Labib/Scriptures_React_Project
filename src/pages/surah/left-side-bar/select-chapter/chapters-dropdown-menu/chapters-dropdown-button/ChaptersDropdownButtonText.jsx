import { FaBars } from "react-icons/fa";
import { useSurahInfo } from "../../../../../../hooks/useSurahInfo";
import { useParams } from "react-router-dom";

const ChaptersDropdownButtonText = () => {

    const { surahId } = useParams();

    const { loading: surahInfoLoading, surahInfo, error: surahInfoError } = useSurahInfo(surahId);

    const { id, name_simple } = surahInfo;

    return (
        <>
            <p className=''>
                {
                    surahInfoLoading && '...'
                }
                {
                    surahInfoError && '!'
                }
                {
                    surahInfo && `${id}. ${name_simple}`
                }
            </p>
            <div className=''>
                <FaBars></FaBars>
            </div>
        </>
    );
};

export default ChaptersDropdownButtonText;