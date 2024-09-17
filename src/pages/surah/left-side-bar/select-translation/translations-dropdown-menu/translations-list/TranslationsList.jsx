import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import { useLanguages } from "../../../../../../hooks/useLanguages";
import Language from "../language/Language";

const TranslationsList = () => {

    const { languages, loading: languagesLoading, error: languagesError } = useLanguages();

    return (
        <div className='h-72 overflow-y-scroll'>
            {
                languagesLoading &&

                <div className="flex flex-col gap-2">
                    {
                        Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>

            }
            {
                languages?.map((language, index) => <Language
                    key={index}
                    language={language}
                ></Language>)
            }
            {
                languagesError && <ErrorComponent errorType='Translations List Fetching Failed' errorText={languagesError}></ErrorComponent>
            }
        </div>
    );
};

export default TranslationsList;