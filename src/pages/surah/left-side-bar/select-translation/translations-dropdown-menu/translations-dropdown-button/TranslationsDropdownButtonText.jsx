import { FaBars } from "react-icons/fa";
import { useSelectedTranslationsIds } from "../../../../../../hooks/useSelectedTranslationsIds";

const TranslationsDropdownButtonText = () => {

    const { selectedTranslationsIds } = useSelectedTranslationsIds();

    return (
        <>
            <p className=''>{selectedTranslationsIds?.length || 1} selected</p>
            <div className=''>
                <FaBars></FaBars>
            </div>
        </>
    );
};

export default TranslationsDropdownButtonText;