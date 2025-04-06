import { useMemo } from "react"
import { getHeroByPublisher } from "../helpers"
import { HeroeItem } from "./HeroeItem"

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo( ()=>  getHeroByPublisher(publisher), [publisher])

    return (
        <ul className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(item => (
                    <HeroeItem key={item.id}
                        { ...item }
                    />
                ))
            }
        </ul>
    )
}