import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () =>{
    const auth = useContext(AuthContext)
    if(!auth?.isAuthenticated || !auth.user){
        return <Navigate to="/save" replace/>
    }
    return <Outlet/>
}
