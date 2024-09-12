import { useContext } from "react"
import { SelectedTranslationsContext } from "../contexts/SelectedTranslationsProvider"

export const useSelectedTranslations = () => {
    return useContext(SelectedTranslationsContext)
}