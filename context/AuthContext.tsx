import React, { Children, createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

interface AuthContextType{
    user:any
    token:string | null
    login: (token:string, userData:any) => void
    logout:() => void
    isAuthenticated :boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const decodeToken = (token:string) =>{
    try {
        return jwtDecode<{ sub: string; exp: number }>(token);
    } catch (error) {
        console.error("Error", error)
    }
}

export const AuthProvider = ({children}:{children:React.ReactNode})=>{
    const [token,setToken] = useState<string|null>(localStorage.getItem("jwt"));
    const [user,setUser] = useState<any>(null);
    const [isAuthenticated,setAuthenticated] = useState<boolean>(false);

    useEffect(()=>{
        if(token){
            const currentTime = Math.floor(Date.now()/1000);
            const decodeUser = decodeToken(token)
            if(decodeUser && decodeUser.exp>currentTime){
                setUser({ email: decodeUser.sub }); 
                setAuthenticated(true);
            }else{
                logout()
            }
        }else{
            setAuthenticated(false)
        }
    },[token])


    const login = (token:string,userData:any) =>{
        localStorage.setItem("jwt",token)
        setUser(userData)
        setToken(token)
    }

    const logout = () =>{
        localStorage.removeItem("jwt")
        setUser(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
}

