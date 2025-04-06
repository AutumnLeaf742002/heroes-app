export const Hero = ({ superhero, alter_ego, characters, id, first_appearance, publisher }) => {

    const heroImg = `/assets/heroes/${id}.jpg`

    return (
        <div className="col mt-5">
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4 animate__animated animate__fadeInLeft animate__faster">
                        <img src={heroImg} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">
                                {superhero}
                            </h5>
                            <p className="card-text">
                                {alter_ego}
                            </p>
                            <p>
                                {characters != alter_ego && characters}
                            </p>

                            <p className="card-text">
                                {publisher}
                            </p>

                            <p className="card-text">
                                <small className="text-muted">
                                    {first_appearance}
                                </small>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}