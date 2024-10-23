/* eslint-disable react/prop-types */
const VerseResults = ({ searchResult }) => {

    const results = searchResult[0].results

    return (
        <div>
            {
                results.map((result, idx) =>
                    <div
                        key={idx}
                        className="flex flex-col items-center w-full border border-slate-500 rounded my-2 p-4">
                        <div
                            className="flex w-full"
                        >
                            <div className="border-r pr-2">
                                <p>{result.verse_key}</p>
                            </div>

                            <div className="w-full pl-2">

                                <p className="text-end text-xl font-medium text-slate-800 mb-2">
                                    {result.text}
                                </p>

                                {
                                    result.translations.map((translation, idx) => <div key={idx} className="mb-2">

                                        <p
                                            className="mt-2 mb-1 font-semibold text-2xl text-cyan-700"

                                            dangerouslySetInnerHTML={{ __html: translation.text.replace(/<em>/g, '<strong><em>').replace(/<\/em>/g, '</em></strong>') }}>

                                        </p>

                                        <p className="text-xs text-slate-400">
                                            {translation.name}
                                        </p>
                                    </div>)
                                }

                            </div>
                        </div>
                        <button className="bg-gray-300 h-8 px-2 rounded-md text-cyan-900 mt-2 w-48 hover:bg-gray-200 hover:font-medium">Go to Chapter</button>
                    </div>)
            }
        </div>
    );
};

export default VerseResults;