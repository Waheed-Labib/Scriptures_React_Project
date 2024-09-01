// caution for developer: 
// this hook will provide correct value, only if it is called in surah page
export const useSurahId = () => {
    const location = window.location;
    const surahId = parseInt(location.pathname.split('/')[2])
    return surahId;
}