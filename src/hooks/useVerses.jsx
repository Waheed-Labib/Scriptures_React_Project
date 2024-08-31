import { useContext } from "react"
import { VersesContext } from "../contexts/VersesProvider"

export const useVerses = () => {
    return useContext(VersesContext)
}