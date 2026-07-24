import { children, createContext, useState } from "react";

export const UserDataContext = createContext()

export const UserContextProvider = ({children})=>{

   /*  const [profile, setProfile] = useState(false) */

   const [token, setToken] = useState(null)
   const [email, setEmail] = useState(null)

   /* const login = () => {
    setProfile(true)
    } */

    const login = async (emailInput, passwordInput) =>{
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: emailInput, password: passwordInput})
        })
        const data = await response.json()

        if(data.token){
            setToken(data.token)
            setEmail(data.email)
        } else{
            alert("Error al iniciar sesión")
        }
    }

    const register = async (emailInput, passwordInput) =>{
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: emailInput, password: passwordInput})
        })
        const data = await response.json()

        if(data.token){
            setToken(data.token)
            setEmail(data.email)
        } else{
            alert("Ocurrió un error con el registro")
        }
    }
   
   /* const logOut = () =>{
       setProfile(false)
   } */

       const logOut = () =>{
        setToken(null)
        setEmail(null)
    }

    const getProfile = async () =>{

        if(!token) return

        try{
            const response = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers:{
                    authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()
            
            if(data.email){
                setEmail(data.email)
            }
        } catch(error){
            console.error("Error al obtener el perfil:", error)
        }

    }
    
       
        

    return(
        <UserDataContext.Provider value={{token, email, logOut, login, register, getProfile}}>{children}</UserDataContext.Provider>
    )
}