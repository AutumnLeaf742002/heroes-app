export const HeroeItem = ({ superhero, alter_ego, characters, id }) => {

    const heroImg = `/assets/heroes/${id}.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    
                    <div className="col-4">
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
                            {characters!=alter_ego&&characters}
                        </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )   
}