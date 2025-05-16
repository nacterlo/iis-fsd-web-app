import { Navigate, Outlet } from "react-router"
import { useAppSelector } from "@/shared/hooks/redux"



export const ProtectedRoute = () => {
    const isAuth = useAppSelector(state => state.auth.authUser)

    if (!isAuth) return <Navigate to="/auth/login" replace />

    return <Outlet />
}