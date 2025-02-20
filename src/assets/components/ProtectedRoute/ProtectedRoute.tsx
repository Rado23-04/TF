import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () =>{
    const auth = useContext(AuthContext)
    return auth?.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}
