import { Navigate, useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";
import { useContext } from "react"

export const ProtectorDeRuta = ({children}) =>{

    const {token} = useContext(UserDataContext)

    if(!token){
        return <Navigate to='/login' />
    }

    return children
}

export const RutaPublica = ({children}) =>{

    const {token} = useContext(UserDataContext)

    if (token){
        return <Navigate to='/'/>
    }
    return children
}