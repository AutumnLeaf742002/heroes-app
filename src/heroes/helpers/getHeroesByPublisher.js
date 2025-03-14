import { heroes } from '../data'

export const getHeroByPublisher = ( publisher )=>{
    const validPublisher = ['Marvel Comics', 'DC Comics']
    if (!validPublisher.includes(publisher)) return new Error(`${publisher} is not a valid publisher`)

    return heroes.filter(heroe=>heroe.publisher === publisher)
}