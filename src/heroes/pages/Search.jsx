import { HeroeItem } from '../components'
import { useForm } from '../../hooks'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router'
import { getHeroesByName } from '../helpers'

export const Search = () => {

    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)
    const result = getHeroesByName(q)

    const { search, onInputChange } = useForm({
        search: q
    })

    const navigate = useNavigate()

    const onFormSubmit = (e) => {

        e.preventDefault()
        navigate(`?q=${search.trim().toLowerCase()}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>
                        Buscar
                    </h4>
                    <hr />

                    <form className="d-flex flex-column gap-3"
                        onSubmit={onFormSubmit}
                    >
                        <div className="form-floating">
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                id="search-hero"
                                name="search"
                                value={search}
                                onChange={onInputChange}
                                autoComplete="off"
                            />
                            <label htmlFor="search-hero">
                                Buscar un heroe
                            </label>
                        </div>

                        <div>
                            <button className="btn btn-outline-info">
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-7">
                    <h4>
                        Resultados
                    </h4>
                    <hr />

                    {
                        q.length <= 0 && <div className="alert alert-primary">Buscar un heroe</div>
                    }

                    {
                        result.length <= 0 && q.length > 0 && <div className="alert alert-danger">
                            No hay resultados que coincidan con <b>{q}</b>
                        </div>
                    }

                    {
                        result.map(item => (
                            <HeroeItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}