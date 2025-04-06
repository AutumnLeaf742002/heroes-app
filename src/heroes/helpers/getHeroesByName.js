import { heroes } from '../data'

export const getHeroesByName = ( name = '' ) => {

    if(name.length <= 0) return []

    return heroes.filter( item => item.superhero.toLowerCase().includes(name))
}