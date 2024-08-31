import { useLocation } from "react-router-dom"

// caution: this hook will provide correct value, only if it is called in surah page
export const useSurahId = () => {
    const location = useLocation();
    const surahId = parseInt(location.pathname.split('/')[2])
    return surahId;
}