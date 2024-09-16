import { FaBars } from "react-icons/fa";
import { useSurahInfo } from "../../../../../../hooks/useSurahInfo";
import { useSurahId } from "../../../../../../hooks/useSurahId";

const ChaptersDropdownButtonText = () => {

    const { loading: surahInfoLoading, surahInfo, error: surahInfoError } = useSurahInfo(useSurahId());
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