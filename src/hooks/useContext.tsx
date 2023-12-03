import React, {createContext, useContext, useState} from 'react';
import {IAuth} from "../@types/auth";

export const AuthContext = createContext<IAuth | null>(null);

interface IAuthProviderProps {
    token: string,
    children: React.ReactNode
}
export const AuthProvider = ({token, children}:IAuthProviderProps) => {

    const [jwtToken, setJwtToken] = useState(token);

    return <AuthContext.Provider value={{jwtToken, setJwtToken}}>
        {children}
    </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);
