import { Navigate, useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";
import { useContext } from "react"

export const ProtectorDeRuta = ({children}) =>{

    const {profile} = useContext(UserDataContext)

    if(!profile){
        return <Navigate to='/login' />
    }

    return children
}

export const RutaPublica = ({children}) =>{

    const {profile} = useContext(UserDataContext)

    if (profile){
        return <Navigate to='/'/>
    }
    return children
}