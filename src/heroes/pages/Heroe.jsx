import { Navigate, useParams, useNavigate } from "react-router"
import { getHeroById } from "../helpers"
import { Hero } from '../components'
import { useMemo } from "react"

export const Heroe = () => {

    const navigate = useNavigate()

    const onReturn = ()=>{
        navigate(-1)
    }

    const { id } = useParams()

    const hero = useMemo(() => getHeroById(id), [id])

    if (!hero) return <Navigate to='/marvel' />

    return (
        <>
            <Hero key={hero.id} {...hero} />

            <button className="btn btn-outline-primary mt-2"
                onClick={onReturn}
            >
                Regresar
            </button>
        </>
    )
}