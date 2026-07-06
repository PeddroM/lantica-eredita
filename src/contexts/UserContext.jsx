import { children, createContext, useState } from "react";

export const UserDataContext = createContext()

export const UserContextProvider = ({children})=>{

    const [profile, setProfile] = useState(false)

    const logOut = () =>{
        setProfile(false)
    }

    const login = () => {
        setProfile(true)
    }

    return(
        <UserDataContext.Provider value={{profile, logOut, login}}>{children}</UserDataContext.Provider>
    )
}