import { HeroesList } from '../components'

export const Marvel = () => {
    return (
        <div>
            <h1>Marvel Heroes</h1>
            <hr />

            <HeroesList publisher='Marvel Comics' />
        </div>
    )
}