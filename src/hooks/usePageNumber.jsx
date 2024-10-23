export const usePageNumber = () => {
    const location = window.location;
    const pageNumber = parseInt(location.pathname.split('/')[4])
    return pageNumber;
}