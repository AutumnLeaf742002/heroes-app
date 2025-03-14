import { Navigate, Routes, Route } from "react-router"
import { Navbar } from '../../ui/components'
import { Marvel, Dc, Search, Heroe } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<Dc />} />
                    <Route path="search" element={<Search />} />
                    <Route path="heroe" element={<Heroe />} />
                    <Route path="/" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    )
}