/* eslint-disable react/prop-types */
const VerseWithVerseKeyResults = ({ searchResult }) => {

    return (
        <div>
            {
                searchResult.map((verse, idx) =>
                    <div
                        key={idx}
                        className="w-full border rounded p-2 flex flex-col items-center">
                        <div
                            className="w-full flex"
                        >
                            <div className="border-r pr-2">
                                <p>{verse.verseKey}</p>
                            </div>

                            <div className="w-full pl-2">

                                <p className="text-end text-xl font-medium text-slate-800">
                                    {verse.arabicVerse}
                                </p>

                                <p className="mt-2 mb-1 font-semibold text-2xl text-cyan-700">
                                    {verse.translation.replace(/<sup[^>]*>.*?<\/sup>/g, "")}
                                </p>

                                <p className="text-xs text-slate-400">
                                    {verse.translationName}
                                </p>
                            </div>
                        </div>
                        <button className="bg-gray-300 h-8 px-2 rounded-md text-cyan-900 mt-2 w-48 hover:bg-gray-200 hover:font-medium">Go to Chapter</button>
                    </div>)
            }
        </div>
    );
};

export default VerseWithVerseKeyResults;