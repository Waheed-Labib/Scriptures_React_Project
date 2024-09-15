import { useVersesInfo } from "../../../../../hooks/useVersesInfo";

const VersesPerPage = () => {

    const { state } = useVersesInfo();
    const { versesInfo } = state;
    const perPage = versesInfo?.pagination?.per_page;

    return (
        <div className="text-xs text-slate-600">
            Per Page : <span className="">{perPage} Verses</span>
        </div>
    );
};

export default VersesPerPage;