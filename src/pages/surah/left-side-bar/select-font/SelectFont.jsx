export const SelectFont = () => {
    return (
        <form className="mt-6 bg-slate-100 rounded p-3 pb-4">
            <h3 className="mb-2 text-sm font-semibold text-gray-600">Arabic Font</h3>
            <div className="flex items-center justify-between w-full">
                <div>
                    <label className="flex items-center gap-2 text-cyan-700">
                        <input
                            type="radio"
                            value="Uthmani"
                        // style={{ accentColor: "#025858" }}
                        />
                        <p className="text-sm font-medium">Uthmani</p>
                    </label>
                </div>
                <div>
                    <label className="flex items-center gap-2 text-cyan-700">
                        <input
                            type="radio"
                            value="IndoPak"
                        // style={{ accentColor: "#025858" }}
                        />
                        <p className="text-sm font-medium">IndoPak</p>
                    </label>
                </div>
            </div>
        </form>
    )
}
