import { useContext } from "react"
import { SurahListContext } from "../contexts/SurahListProvider"

export const useSurahList = () => {
    return useContext(SurahListContext)
}