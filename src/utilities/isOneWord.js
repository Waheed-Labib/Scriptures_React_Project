export const isOneWord = (text) => {

    if (text.length > 0 && text.split(' ').length === 1) return true

    else return false
}