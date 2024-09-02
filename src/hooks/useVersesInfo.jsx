import { useContext } from "react"
import { VersesInfoContext } from "../contexts/VersesInfoProvider"

export const useVersesInfo = () => {
    return useContext(VersesInfoContext)
}