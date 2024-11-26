/* eslint-disable react/prop-types */
import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahInfo } from "../../../../hooks/useSurahInfo";
import { capitalizeFirstLetter } from "../../../../utilities/capitalizeFirstLetter";
import Links from "../links/Links";
import SurahName from "./SurahName";

const SuraInfo = ({ chapterNum }) => {

    const { loading, surahInfo, error } = useSurahInfo(chapterNum);
    const { revelation_place, revelation_order, verses_count } = surahInfo;

    if (loading) return (
        <div className="flex flex-col gap-2">
            {
                Array.from({ length: 5 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
            }
        </div>

    )

    if (error) return <ErrorComponent errorType={'Feetching Chapter Info Failed'} errorText={error}></ErrorComponent>

    return (
        <div>
            <SurahName></SurahName>
            <div className="mt-4">
                <Links
                    chapterNum={chapterNum}
                ></Links>
            </div>

            <table className="mt-4 border-collapse w-full">
                <tbody>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-sm font-semibold text-gray-500">Verses :</div>
                        </td>
                        <td className="font-medium text-sm text-cyan-600 border border-gray-100 p-2"> {verses_count}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-xs font-semibold text-gray-500">Revelation Place :</div>
                        </td>
                        <td className="text-xs text-cyan-700 border border-gray-100 p-2"> {capitalizeFirstLetter(revelation_place)}</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-100 p-2">
                            <div className="text-xs font-semibold text-gray-500">Revelation Order :</div>
                        </td>
                        <td className="text-xs text-cyan-700 border border-gray-100 p-2"> {revelation_order}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SuraInfo;