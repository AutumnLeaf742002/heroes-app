import { getHeroByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroeItem } from "./HeroeItem"

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher)

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