

export const SelectFont = () => {

    const handleFontChange = () => {

    }

    return (
        <form className="mt-6 bg-slate-100 rounded p-3 pb-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-500">Arabic Font</h3>
            <div className="flex items-center justify-between w-full">
                <div>
                    <label className="flex items-center gap-2 text-cyan-700">
                        <input
                            type="radio"
                            value="uthmani"
                            // checked={font === 'uthmani'}
                            onChange={handleFontChange}
                        />
                        <p className="text-xs font-medium">Uthmani</p>
                    </label>
                </div>
                <div>
                    <label className="flex items-center gap-2 text-cyan-700">
                        <input
                            type="radio"
                            value="indopak"
                            // checked={font === 'indopak'}
                            onChange={handleFontChange}
                        />
                        <p className="text-xs font-medium">IndoPak</p>
                    </label>
                </div>
            </div>
        </form>
    )
}
