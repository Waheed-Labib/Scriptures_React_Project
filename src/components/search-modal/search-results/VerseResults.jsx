/* eslint-disable react/prop-types */
const VerseResults = ({ searchResult }) => {

    const results = searchResult[0].results

    return (
        <div>
            {
                results.map((result, idx) =>
                    <div
                        key={idx}
                        className="w-full border border-slate-500 rounded flex my-2 p-4"
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
                                    <p className="mt-2 mb-1 font-semibold text-2xl text-cyan-700">
                                        {translation.text.replace(/<sup[^>]*>.*?<\/sup>/g, "")}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {translation.name}
                                    </p>
                                </div>)
                            }

                        </div>
                    </div>)
            }
        </div>
    );
};

export default VerseResults;