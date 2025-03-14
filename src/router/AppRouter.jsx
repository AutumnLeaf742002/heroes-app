import { Route, Routes } from "react-router"
import { Login } from '../auth/pages'
import { HeroesRoutes } from "../heroes/routes/"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}