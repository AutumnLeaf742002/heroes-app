import { heroes } from "../data"

export const getHeroById = ( id )=>{
    return heroes.find(item=>item.id === id)
}