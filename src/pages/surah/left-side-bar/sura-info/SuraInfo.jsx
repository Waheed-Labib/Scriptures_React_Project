/* eslint-disable react/prop-types */
import { useSurahInfo } from "../../../../hooks/useSurahInfo";

const SuraInfo = ({ surahId }) => {

    const surahInfo = useSurahInfo(surahId);
    const { id, revelation_place, revelation_order, name_simple, verses_count } = surahInfo;

    return (
        <div>
            <h3 className="text-sm font-semibold text-gray-600">Chapter Name</h3>
            <h1 className="text-3xl font-bold text-cyan-600">{name_simple}</h1>

            <table className="mt-4 border-collapse w-full">
                <tr>
                    <td className="border border-gray-200 pl-2">
                        <div className="text-sm font-semibold text-gray-600">Chapter Number</div>
                    </td>
                    <td className="pl-2 font-semibold text-cyan-800 border border-gray-200"> {id}</td>
                </tr>
                <tr>
                    <td className="border border-gray-200 pl-2">
                        <div className="text-sm font-semibold text-gray-600">Verses Count</div>
                    </td>
                    <td className="pl-2 font-semibold text-cyan-800 border border-gray-200"> {verses_count}</td>
                </tr>
                <tr>
                    <td className="border border-gray-200 pl-2">
                        <div className="text-sm font-semibold text-gray-600">Revelation Place</div>
                    </td>
                    <td className="pl-2 font-semibold text-cyan-800 border border-gray-200"> {revelation_place}</td>
                </tr>
                <tr>
                    <td className="border border-gray-200 pl-2">
                        <div className="text-sm font-semibold text-gray-600">Revelation Order</div>
                    </td>
                    <td className="pl-2 font-semibold text-cyan-800 border border-gray-200"> {revelation_order}</td>
                </tr>
            </table>
        </div>
    );
};

export default SuraInfo;