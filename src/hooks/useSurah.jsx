import { useContext } from "react"
import { SurahContext } from "../contexts/SurahProvider"

export const useSurah = () => {
    return useContext(SurahContext)
}