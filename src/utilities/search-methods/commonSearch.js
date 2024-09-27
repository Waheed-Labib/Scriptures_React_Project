export const commonSearch = (searchText) => {
    if (isNaN(searchText)) return 'string'
    else return 'number'
}