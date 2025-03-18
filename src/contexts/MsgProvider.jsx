/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MsgContext = createContext();

const MsgProvider = ({ children }) => {

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const value = {
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg
    }

    return (
        <MsgContext.Provider
            value={value}
        >
            {children}
        </MsgContext.Provider>
    )
}

export default MsgProvider;