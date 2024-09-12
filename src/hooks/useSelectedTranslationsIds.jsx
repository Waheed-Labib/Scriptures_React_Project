import { useContext } from "react"
import { SelectedTranslationsIdsContext } from "../contexts/SelectedTranslationsIdsProvider"

export const useSelectedTranslationsIds = () => {
    return useContext(SelectedTranslationsIdsContext)
}