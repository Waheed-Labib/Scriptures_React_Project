/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const value = {
        loggedInUser,
        setLoggedInUser
    }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;