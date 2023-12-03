import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.tsx";

interface IProps {
    routeType: string
}
export default function ProtectedRoute({routeType}: IProps) {

    const auth = useAuth()
    const evaluatePass = () => {
        switch (routeType) {
            case "admin":
                return auth?.jwtToken !== "" && auth?.jwtToken !== undefined;
            case "auth":
                return auth?.jwtToken === "" || auth?.jwtToken === undefined;
        }
    }
    const path = () => {
        return routeType === "admin" ? "/register" : "/";
    }

    return (
        evaluatePass() ? <Outlet></Outlet> : <Navigate to={path()}></Navigate>
    )
}